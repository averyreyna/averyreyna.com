import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import { ArrowRight } from 'lucide-react'

function Callout({ link, text }) {
  return (
    <div className="py-1">
      <a 
        href={link} 
        className="text-neutral-800 dark:text-neutral-200 hover:underline phone:underline inline-flex items-center gap-1"
      >
        {text} <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )
}

function Hero({ children }) {
  return (
    <div className="flex phone:flex-col space-x-8 phone:space-x-0 phone:space-y-4">
      <div className="flex flex-col p-0 pt-6 w-[20%] phone:w-full phone:pt-2 text-neutral-800 dark:text-neutral-200">
        {children[0]}
      </div>
      <div className="p-0 w-[80%] phone:w-full phone:pl-0 prose dark:prose-invert">
        {children.slice(1).map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    </div>
  )
}

function TwoCol({ children }) {
  return (
    <div className="flex relative space-x-8 phone:flex-col phone:space-x-0 phone:space-y-2">
      <div className="flex flex-col pt-0 w-[20%] mt-0 phone:w-full phone:mt-2 text-neutral-800 dark:text-neutral-200">
        {children[0]}
      </div>
      <div className="p-0 w-[80%] phone:w-full phone:pl-4 prose dark:prose-invert">
        {children.slice(1).map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    </div>
  )
}

function Line() {
  return <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
}

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
  Callout,
  Hero,
  TwoCol,
  Line
}

export function CustomMDX(props) {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  )
}