import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage({ caption, ...props }) {
  return (
    <figure className="my-8 mx-auto max-w-xl">
      <div className="overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-2">
        <Image 
          src={''} alt={''} className="w-full h-auto object-cover"
          {...props}        
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-center text-neutral-600 dark:text-neutral-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function RoundedVideo({ caption, src, ...props }) {
  return (
    <figure className="my-8 mx-auto max-w-xl">
      <div className="overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-2">
        <video
          className="w-full h-auto"
          controls
          playsInline
          {...props}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-center text-neutral-600 dark:text-neutral-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function RoundedGif({ caption, src, ...props }) {
  return (
    <figure className="my-8 mx-auto max-w-xl">
      <div className="overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-2">
        <img
          src={src}
          className="w-full h-auto"
          {...props}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-center text-neutral-600 dark:text-neutral-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  Video: RoundedVideo,
  Gif: RoundedGif,
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}