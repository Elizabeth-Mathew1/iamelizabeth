import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/yourusername",
    label: "Twitter",
  },
];

export default function ResponsiveCircles() {
  return (
    <>
      {/* Desktop: right center vertical */}
      <div className="hidden fixed top-1/2 right-14 -translate-y-1/2 z-10 pointer-events-none flex-col items-center gap-8 md:flex">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="pointer-events-auto text-[#F8C306] hover:text-yellow-400 transition-colors duration-200 transform hover:scale-125 transition-transform"
          >
            {social.label === "GitHub" && <FaGithub size={36} color="var(--color-accent)" />}
            {social.label === "LinkedIn" && <FaLinkedin size={36} color="var(--color-accent)" />}
            {social.label === "Twitter" && <FaTwitter size={36} color="var(--color-accent)" />}
          </a>
        ))}
      </div>
      {/* Mobile: bottom center horizontal */}
      <div className="fixed left-0 bottom-5 w-screen z-10 pointer-events-none flex justify-center items-center gap-4 md:hidden">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="pointer-events-auto text-[#F8C306] hover:text-yellow-400 transition-colors duration-200 text-2xl mb-5 transform hover:scale-125 transition-transform"
          >
            {social.label === "GitHub" && <FaGithub size={24} color="var(--color-accent)" />}
            {social.label === "LinkedIn" && <FaLinkedin size={24} color="var(--color-accent)" />}
            {social.label === "Twitter" && <FaTwitter size={24} color="var(--color-accent)" />}
          </a>
        ))}
      </div>
    </>
  );
} 