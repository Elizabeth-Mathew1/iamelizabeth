import AccentGlow from "../../../components/AccentGlow";
import "../../../styles/styles.css";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample blog data - in a real app, this would come from a CMS or database
const blogData = {
  "sample-blog": {
    title: "Sample Blog Post",
    date: "12th May 2025",
    content: `
      <p>This is a sample blog post to demonstrate the blog functionality. In a real application, this content would be much more substantial and would likely come from a content management system or markdown files.</p>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>Key Points</h2>
      <ul>
        <li>First important point about the topic</li>
        <li>Second important point with more details</li>
        <li>Third point that wraps up the main ideas</li>
      </ul>
      
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h2>Conclusion</h2>
      <p>This concludes our sample blog post. The actual content would be much more engaging and informative, covering real topics related to technology, startups, or other areas of interest.</p>
    `
  },
  "marathons-and-startups": {
    title: "Marathons and Startups",
    date: "Feb 4, 2025",
    content: `
      <p>Running a marathon and building a startup have more in common than you might think. Both require endurance, preparation, and the ability to push through when things get tough.</p>
      
      <p>In this post, I'll explore the parallels between these two challenging endeavors and share insights from my own experiences.</p>
    `
  },
  "heartbeat-framework": {
    title: "The Heartbeat Framework",
    date: "Dec 7, 2024",
    content: `
      <p>The Heartbeat Framework is a methodology I've developed for maintaining consistent progress in long-term projects. It's based on the principle that small, regular actions compound into significant results over time.</p>
      
      <p>This framework has helped me stay on track with both personal and professional goals, and I'm excited to share it with you.</p>
    `
  }
};

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogData[params.slug as keyof typeof blogData];
  
  if (!blog) {
    notFound();
  }

  return (
    <div className="page-root">
      <AccentGlow />
      <div className="flex min-h-screen w-screen bg-[var(--color-bg)] relative">
        {/* Fixed left vertical line - shorter, starts from top */}
        <div className="fixed bottom-0 h-[85%] w-[4px] bg-[#F8C306] z-10 lg:left-[100px] 2xl:left-[500px] lg:block hidden"></div>

        <div className="fixed top-0 w-full h-[15%] bg-[var(--color-bg)] lg:block flex items-center">
          <div className="text-[20px] md:text-[22px] text-[var(--color-accent)] mt-4 pl-[80px] lg:pl-[180px] 2xl:pl-[650px]" style={{ fontFamily: 'var(--font-main)' }}>
            -BLOG
          </div>
        </div>

        {/* Scrollable content */}
        <div className="mt-30 xl:mt-20 2xl:mt-35 overflow-y-auto max-w-6xl mx-[80px] lg:mx-[180px] 2xl:mx-[650px]">
          
          {/* Back to blogs link */}
          <div className="mb-8">
            <Link 
              href="/blogs"
              className="text-[var(--color-accent)] hover:opacity-80 transition-opacity duration-200 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-main)' }}
            >
              ← Back to Blogs
            </Link>
          </div>

          {/* Blog header */}
          <div className="mb-12">
            <h1 className="text-[40px] md:text-[50px] lg:text-[60px] text-[var(--color-text)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {blog.title}
            </h1>
            <p className="text-[18px] md:text-[20px] text-[var(--color-accent)]" style={{ fontFamily: 'var(--font-main)' }}>
              {blog.date}
            </p>
          </div>

          {/* Blog content */}
          <div 
            className="leading-relaxed text-lg md:text-[20px] lg:text-[22px] pb-10" 
            style={{ fontFamily: 'var(--font-main)' }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

        </div>

        {/* Fixed right vertical line - longer, starts from top */}
        <div className="fixed top-0 h-[70%] w-[4px] bg-[#F8C306] z-10 lg:right-[100px] 2xl:right-[500px] lg:block hidden"></div>
      </div>
    </div>
  );
} 