'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

// Button color mapping based on link text - exact colors from original site
const getLinkButtonClass = (text: string): string => {
  const lowerText = text.toLowerCase();

  if (lowerText === 'abstract') {
    return 'bg-[#eaad51] hover:bg-[#d99940] text-white';
  } else if (lowerText === 'arxiv') {
    return 'bg-[#5dbfd8] hover:bg-[#4aafca] text-white';
  } else if (lowerText === 'code') {
    return 'bg-[#e09a8e] hover:bg-[#d1897d] text-white';
  } else if (lowerText.includes('slides') || lowerText.includes('poster')) {
    return 'bg-[#cadbe0] hover:bg-[#b9cad0] text-gray-800';
  } else if (lowerText === 'paper') {
    return 'bg-[#428bca] hover:bg-[#428bca] text-white';
  } else if (lowerText === 'data') {
    return 'bg-[#ed8b84] hover:bg-[#ed8b84] text-white';
  } else if (lowerText === 'website') {
    return 'bg-[#73a895] hover:bg-[#73a895] text-white';
  }

  // Default button style
  return 'bg-gray-500 hover:bg-gray-600 text-white';
};

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const components: Components = {
    h2: ({ children }) => (
      <h2 className="text-2xl font-normal mb-2 mt-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mb-3 mt-4">{children}</h3>
    ),
    p: ({ children }) => {
      return <p className="mb-0 leading-snug">{children}</p>;
    },
    a: ({ href, children }) => {
      const text = String(children);

      // Check if this is a button-style link
      const isButton = ['abstract', 'arxiv', 'code', 'slides', 'poster', 'paper', 'data', 'website']
        .some(keyword => text.toLowerCase().includes(keyword));

      if (isButton) {
        const buttonClass = getLinkButtonClass(text);
        return (
          <a
            href={href}
            className={`${buttonClass} px-2 py-0.5 rounded-sm text-xs font-normal inline-block transition-colors mr-1`}
          >
            {children}
          </a>
        );
      }

      // Regular link (paper titles) - blue color from original site
      return (
        <a href={href} className="text-[#4682B4] hover:underline font-bold">
          {children}
        </a>
      );
    },
    ul: ({ children }) => (
      <ul
        className="mb-4 pl-5"
        style={{
          listStyle: 'disc',
          display: 'block'
        }}
      >
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li
        className="leading-snug mb-2"
        style={{
          display: 'list-item'
        }}
      >
        {children}
      </li>
    ),
    hr: () => null,
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
  };

  return (
    <div className="max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
