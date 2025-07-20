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
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-auto object-cover rounded-r-[40px] ${imageClassName}`} 
      />
      <p className="text-[20px] text-gray-100 mt-2 italic">{caption}</p>
    </div>
  );
} 