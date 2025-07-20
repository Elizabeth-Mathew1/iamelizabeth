"use client"
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about", message: "Learn more about me" },
  { label: "Blogs", href: "/blogs", message: "Read my thoughts" },
  { label: "Work", href: "/work", message: "See my projects" },
  { label: "Resume", href: "/resume.pdf", message: "Download my resume", external: true },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="navbar flex flex-col">
      <ul className="flex gap-12 italic">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="relative after:absolute after:-left-4 after:-right-4 after:bottom-0 after:h-[3px] after:bg-[#F8C306]/40 after:rounded after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
            onMouseEnter={() => setHovered(item.label)}
            onMouseLeave={() => setHovered(null)}
          >
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
      <div className={`h-8 mt-2 transition-opacity duration-200 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        {hovered && (
          <div className="text-[22px] py-8 rounded shadow-lg min-w-[200px] bg-[var(--color-bg)]">
            {navItems.find((item) => item.label === hovered)?.message}
          </div>
        )}
      </div>
    </nav>
  );
} 