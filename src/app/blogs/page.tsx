import AccentGlow from "../../components/AccentGlow";
import "../../styles/styles.css";
import Link from "next/link";
import { getAllPosts } from "../../lib/markdown";
import { IoHome } from "react-icons/io5";

export default function Blogs() {
  const blogEntries = getAllPosts();

  return (
    <div className="page-root">
      <AccentGlow />
      <div className="flex min-h-screen w-screen bg-[var(--color-bg)] relative">
        {/* Fixed left vertical line - shorter, starts from top */}
        <div className="fixed bottom-0 h-[85%] w-[4px] bg-[#F8C306] z-10 lg:left-[100px] 2xl:left-[500px] lg:block hidden"></div>

        <div className="fixed top-0 w-full h-[15%] bg-[var(--color-bg)] flex items-center justify-between">
          <div className="text-[20px] md:text-[22px] text-[var(--color-accent)] mt-4 pl-[80px] lg:pl-[180px] 2xl:pl-[650px]" style={{ fontFamily: 'var(--font-main)' }}>
            -BLOGS
          </div>
          <Link href="/" className="mr-[80px] lg:mr-[180px] 2xl:mr-[650px] mt-4 hover:opacity-80 transition-opacity flex items-center">
            <IoHome className="w-6 h-6 text-[var(--color-accent)]" />
          </Link>
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
                        {new Date(blog.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
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

        </div>

        {/* Fixed right vertical line - longer, starts from top */}
        <div className="fixed top-0 h-[70%] w-[4px] bg-[#F8C306] z-10 lg:right-[100px] 2xl:right-[500px] lg:block hidden"></div>
      </div>
    </div>
  );
} 