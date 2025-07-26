"use client"

import { FiLink } from "react-icons/fi";
import { useState } from "react";

interface SectionHeaderProps {
  title: string;
  accentText?: string;
  isAccent?: boolean;
  showLinkIcon?: boolean;
  linkId?: string;
}

export default function SectionHeader({ title, accentText, isAccent = false, showLinkIcon = false, linkId }: SectionHeaderProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    if (linkId) {
      const url = `${window.location.origin}${window.location.pathname}#${linkId}`;
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  return (
    <div className="mb-10">
      <div className={`z-10 flex items-center justify-between text-[50px] md:text-[80px] lg:text-[80px] text-[#e0e0e0] font-normal leading-tight pt-10 ${isAccent ? 'text-[var(--color-accent)]' : ''} group`} style={{ fontFamily: 'var(--font-heading)' }}>
        <span>{title}</span>
        {showLinkIcon && (
          <div className="relative">
            <button
              onClick={copyLink}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:opacity-80 hover:cursor-pointer"
              title="Copy link to this section"
              style={{ outline: 'none' }}
            >
              {copied && (
                <span
                  className="absolute right-10 top-1/2 bg-[var(--color-bg)] text-[var(--color-accent)] text-[16px] px-2 py-1 rounded shadow transition-opacity duration-200 z-30"
                  style={{ fontFamily: 'var(--font-main)' }}
                >
                  Copied!
                </span>
              )}
              <FiLink className="w-6 h-6 text-[var(--color-accent)]" />
            </button>
          </div>
        )}
      </div>
      {accentText && (
        <div className="text-[20px] lg:text-[24px] text-[var(--color-accent)] font-normal leading-tight mb-15" style={{ fontFamily: 'var(--font-sub)' }}>
          {accentText}
        </div>
      )}
    </div>
  );
} 