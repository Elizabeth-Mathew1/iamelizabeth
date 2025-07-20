import AccentGlow from "../../components/AccentGlow";
import "../../styles/styles.css";
import Link from "next/link";

// Sample blog data based on the image
const blogEntries = [
  {
    title: "Marathons and Startups",
    date: "Feb 4, 2025",
    slug: "marathons-and-startups"
  },
  {
    title: "The Heartbeat Framework",
    date: "Dec 7, 2024",
    slug: "heartbeat-framework"
  },
  {
    title: "Resend raises $18M Series A",
    date: "Dec 4, 2024",
    slug: "resend-18m-series-a"
  },
  {
    title: "How is life post YC?",
    date: "Feb 12, 2024",
    slug: "life-post-yc"
  },
  {
    title: "Celebrating 10 years of Dracula",
    date: "Oct 12, 2023",
    slug: "10-years-dracula"
  },
  {
    title: "Resend raises $3M",
    date: "Jul 18, 2023",
    slug: "resend-3m"
  },
  {
    title: "Lessons learned from growing a 6,338 people waitlist in 7 weeks",
    date: "Feb 21, 2023",
    slug: "waitlist-lessons"
  },
  {
    title: "Why I spent $25,000 on a domain (or how to pick a startup name)",
    date: "Feb 6, 2023",
    slug: "25000-domain"
  }
];

export default function Blogs() {
  return (
    <div className="page-root">
      <AccentGlow />
      <div className="flex min-h-screen w-screen bg-[var(--color-bg)] relative">
        {/* Fixed left vertical line - shorter, starts from top */}
        <div className="fixed bottom-0 h-[85%] w-[4px] bg-[#F8C306] z-10 lg:left-[100px] 2xl:left-[500px] lg:block hidden"></div>

        <div className="fixed top-0 w-full h-[15%] bg-[var(--color-bg)] lg:block flex items-center">
          <div className="text-[20px] md:text-[22px] text-[var(--color-accent)] mt-4 pl-[80px] lg:pl-[180px] 2xl:pl-[650px]" style={{ fontFamily: 'var(--font-main)' }}>
            -BLOGS
          </div>
        </div>

        {/* Scrollable content */}
        <div className="mt-30 xl:mt-30 2xl:mt-45 overflow-y-auto max-w-4xl mx-auto px-8">
          
            <div className="mb-20">
             <div className="mb-2 text-[40px] md:text-[50px] lg:text-[70px] text-[var(--color-text)]" style={{ fontFamily: 'var(--font-heading)' }}>
               Sometimes I <span className="text-[var(--color-accent)]">write..</span>
             </div>
             <div className="mt-0 text-[18px] md:text-[22px]" style={{ fontFamily: 'var(--font-main)' }}>
             Just a girl writing her heart out.
             </div>
           </div>

          {/* Blog entries list */}
          <div className="space-y-0 max-w-2xl mx-auto">
            {blogEntries.map((blog, index) => (
              <div key={blog.slug}>
                <Link href={`/blogs/${blog.slug}`}>
                  <div className="blog-entry group py-4 px-4 rounded-lg cursor-pointer">
                    <div className="flex justify-between items-center">
                      <h2 className="text-[18px] md:text-[20px] lg:text-[22px] text-[var(--color-text)]" style={{ fontFamily: 'var(--font-main)' }}>
                        {blog.title}
                      </h2>
                      <span className="text-[16px] md:text-[18px] text-gray-400" style={{ fontFamily: 'var(--font-main)' }}>
                        {blog.date}
                      </span>
                    </div>
                  </div>
                </Link>
                {index < blogEntries.length - 1 && (
                  <div className="h-[1px] bg-gray-700 mx-4"></div>
                )}
              </div>
            ))}
          </div>

          {/* Add the requested blog with 12th May 2025 date */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="h-[1px] bg-gray-700 mx-4"></div>
            <Link href="/blogs/sample-blog">
              <div className="blog-entry group py-4 px-4 rounded-lg cursor-pointer">
                <div className="flex justify-between items-center">
                  <h2 className="text-[18px] md:text-[20px] lg:text-[22px] text-[var(--color-text)]" style={{ fontFamily: 'var(--font-main)' }}>
                    Sample Blog Post
                  </h2>
                  <span className="text-[16px] md:text-[18px] text-gray-400" style={{ fontFamily: 'var(--font-main)' }}>
                    12th May 2025
                  </span>
                </div>
              </div>
            </Link>
          </div>

        </div>

        {/* Fixed right vertical line - longer, starts from top */}
        <div className="fixed top-0 h-[70%] w-[4px] bg-[#F8C306] z-10 lg:right-[100px] 2xl:right-[500px] lg:block hidden"></div>
      </div>
    </div>
  );
} 