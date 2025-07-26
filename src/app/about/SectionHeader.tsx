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

  const copyLink = () => {
    if (linkId && typeof window !== 'undefined') {
      const url = `${window.location.origin}${window.location.pathname}#${linkId}`;
      
      // Use a try-catch block to handle potential errors
      try {
        // Check if clipboard API is available
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(url)
            .then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1200);
            })
            .catch((err) => {
              console.error('Failed to copy link:', err);
              // Fallback for older browsers
              fallbackCopyTextToClipboard(url);
            });
        } else {
          // Fallback for non-secure contexts or older browsers
          fallbackCopyTextToClipboard(url);
        }
      } catch (err) {
        console.error('Failed to copy link:', err);
        fallbackCopyTextToClipboard(url);
      }
    }
  };

  // Fallback copy function for older browsers
  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
    
    document.body.removeChild(textArea);
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
                  className="absolute right-10 top-1/2 text-[var(--color-accent)] text-[16px] px-2 py-1 z-30"
                  style={{ fontFamily: 'var(--font-main)' }}
                >
                  Copied!
                </span>
              )}
              <FiLink className="w-6 h-6 text-[var(--color-accent)] opacity-50 hover:opacity-100 transition-opacity duration-200" />
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