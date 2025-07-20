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
  },
  "resend-18m-series-a": {
    title: "Resend raises $18M Series A",
    date: "Dec 4, 2024",
    content: `
      <p>Exciting news from the Resend team as we announce our $18M Series A funding round. This milestone represents a significant step forward in our mission to revolutionize email delivery for developers.</p>
      
      <p>In this post, I'll share the journey that led us here and what this means for our users and the future of Resend.</p>
    `
  },
  "life-post-yc": {
    title: "How is life post YC?",
    date: "Feb 12, 2024",
    content: `
      <p>Life after Y Combinator is often romanticized, but the reality is both challenging and rewarding. In this post, I'll share my honest reflections on what it's like to build a company after graduating from YC.</p>
      
      <p>From the pressure to perform to the incredible network and opportunities, here's what I've learned about life post YC.</p>
    `
  },
  "10-years-dracula": {
    title: "Celebrating 10 years of Dracula",
    date: "Oct 12, 2023",
    content: `
      <p>Ten years ago, I created the Dracula theme as a simple color scheme for my terminal. Today, it's used by millions of developers worldwide. This post celebrates the journey and the incredible community that has grown around it.</p>
      
      <p>From humble beginnings to a global phenomenon, here's the story of how Dracula became more than just a theme.</p>
    `
  },
  "resend-3m": {
    title: "Resend raises $3M",
    date: "Jul 18, 2023",
    content: `
      <p>We're thrilled to announce that Resend has raised $3M in seed funding. This investment will help us accelerate our mission to make email delivery simple and reliable for developers.</p>
      
      <p>In this post, I'll share what this funding means for our team and our users.</p>
    `
  },
  "waitlist-lessons": {
    title: "Lessons learned from growing a 6,338 people waitlist in 7 weeks",
    date: "Feb 21, 2023",
    content: `
      <p>Building a waitlist of over 6,000 people in just 7 weeks taught me invaluable lessons about product-market fit, community building, and the power of authentic marketing.</p>
      
      <p>In this post, I'll share the strategies that worked, the mistakes I made, and the key insights that helped us achieve this milestone.</p>
    `
  },
  "25000-domain": {
    title: "Why I spent $25,000 on a domain (or how to pick a startup name)",
    date: "Feb 6, 2023",
    content: `
      <p>Naming a startup is one of the most challenging decisions founders face. In this post, I'll share why I decided to invest $25,000 in a domain name and the thought process behind choosing the right name for your company.</p>
      
      <p>From brand considerations to SEO implications, here's everything you need to know about picking a startup name.</p>
    `
  }
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogData[slug as keyof typeof blogData];
  
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