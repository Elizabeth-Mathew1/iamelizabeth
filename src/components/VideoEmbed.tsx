interface VideoEmbedProps {
  src: string;
  title?: string;
  width?: string;
  height?: string;
}

export default function VideoEmbed({ 
  src, 
  title = "Video", 
  width = "100%", 
  height = "400"
}: VideoEmbedProps) {
  // Check if it's a YouTube URL
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
  
  if (isYouTube) {
    // Extract video ID from YouTube URL
    let videoId = '';
    if (src.includes('youtube.com/watch?v=')) {
      videoId = src.split('v=')[1]?.split('&')[0] || '';
    } else if (src.includes('youtu.be/')) {
      videoId = src.split('youtu.be/')[1]?.split('?')[0] || '';
    } else {
      // Assume it's already a video ID
      videoId = src;
    }
    
    return (
      <div className="my-8">
        <iframe 
          width={width} 
          height={height} 
          src={`https://www.youtube.com/embed/${videoId}`} 
          title={title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    );
  }

  // Self-hosted video from public folder
  return (
    <div className="my-8 z-10">
      <video 
        width={width} 
        height={height} 
        controls
        className="rounded-lg"
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/webm" />
        <source src={src} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
} 