import Link from 'next/link';
import { useState } from 'react';

export function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <div className="px-4 mt-0 mx-auto py-18 pb-32 ">
      {/* <div>
        Built by me. Inspired by{' '}
        <a className="underline" target="_blank" href="https://gossipsweb.net/">
          Gossip's Web
        </a>
        .
      </div> */}

      <div className="text-sm bg-gray-100 text-gray-500 rounded-3xl p-8  max-w-[800px] mx-auto">
        If you made it this far, we probably have some shared interests. Send me an {' '}
        <a className="underline" href="mailto:avery.reyna16@gmail.com">
          email
        </a>
        {' '} or check out my{' '}
        <a
          target="_blank"
          className="underline"
          href="https://are.na/avryryn"
        >
          Are.na
        </a>
        .
      </div>
    </div>
  );
}