import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
}

function parseFrontmatter(fileContent: string) {
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    let match = frontmatterRegex.exec(fileContent);
    
    if (!match) {
      throw new Error('No frontmatter found');
    }
  
    let frontmatter = match[1];
    let content = fileContent.slice(match[0].length);
    let metadata = {
      title: '',
      publishedAt: '',
      summary: ''
    };
  
    frontmatter.split('\n').forEach((line) => {
      let [key, ...valueArr] = line.split(':');
      let value = valueArr.join(':').trim();
      if (value && value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      if (key in metadata) {
        metadata[key] = value;
      }
    });
  
    return {
      metadata,
      content
    };
  }

export function getProjectPosts() {
  const postsDirectory = path.join(process.cwd(), 'app', 'projects', 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { metadata, content } = parseFrontmatter(fileContents)
      
      return {
        metadata,
        slug: fileName.replace(/\.mdx$/, ''),
        content,
      }
    })
}