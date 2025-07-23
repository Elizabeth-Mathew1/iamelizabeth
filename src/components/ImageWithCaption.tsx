import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  imageClassName?: string;
}

export default function ImageWithCaption({ src, alt, caption, className = "", imageClassName = "" }: ImageWithCaptionProps) {
  return (
    <div className={`${className}`}>
      <div className="relative w-full h-auto">
        <Image 
          src={src} 
          alt={alt} 
          width={800}
          height={600}
          className={`w-full h-auto object-cover rounded-r-[40px] ${imageClassName}`}
          unoptimized
        />
      </div>
      <p className="text-[20px] text-gray-100 mt-2 italic">{caption}</p>
    </div>
  );
} 