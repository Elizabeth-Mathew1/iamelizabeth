'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import CalloutBox from './CalloutBox';
import VideoEmbed from './VideoEmbed';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  [key: string]: unknown;
}

// Custom components that can be used in MDX
const components = {
  // You can add custom components here that will be available in MDX
  Image: ({ src, alt, width = 800, height = 400, ...props }: ImageProps) => (
    <div className="my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg"
        unoptimized
        {...props}
      />
    </div>
  ),
  CalloutBox,
  VideoEmbed,
  a: ({ href, children, ...props }: any) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[var(--color-accent)] underline hover:opacity-80 transition-opacity"
      {...props}
    >
      {children}
    </a>
  ),
  // Add more custom components as needed
};

interface MDXContentProps {
  source: string;
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="leading-relaxed text-lg md:text-[20px] lg:text-[22px] pb-10 prose prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
} 