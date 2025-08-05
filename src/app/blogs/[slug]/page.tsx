import AccentGlow from "../../../components/AccentGlow";
import "../../../styles/styles.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, markdownToHtml, getAllPosts } from "../../../lib/markdown";
import MDXContent from "../../../components/MDXContent";
import { IoHome } from "react-icons/io5";
import { Metadata } from "next";

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getPostBySlug(slug);
  
  if (!blog) {
    return {
      title: "Blog Post | Elizabeth",
      description: "Blog post by Elizabeth",
    };
  }

  return {
    title: `${blog.title} | Elizabeth`,
    description: blog.excerpt || `Blog post by Elizabeth: ${blog.title}`,
    openGraph: {
      title: `${blog.title} | Elizabeth`,
      description: blog.excerpt || `Blog post by Elizabeth: ${blog.title}`,
      images: [
        {
          url: blog.featured_image || '/lizu.webp',
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: 'article',
      publishedTime: blog.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blog.title} | Elizabeth`,
      description: blog.excerpt || `Blog post by Elizabeth: ${blog.title}`,
      images: [blog.featured_image || '/lizu.webp'],
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getPostBySlug(slug);
  
  if (!blog) {
    notFound();
  }

  return (
    <div className="page-root">
      <AccentGlow />
      <div className="flex min-h-screen w-screen bg-[var(--color-bg)] relative">
        {/* Fixed left vertical line - shorter, starts from top */}
        <div className="fixed bottom-0 h-[85%] w-[4px] bg-[#F8C306] z-10 lg:left-[100px] 2xl:left-[500px] lg:block hidden"></div>

        <div className="fixed top-0 w-full h-[15%] bg-[var(--color-bg)] flex items-center justify-between">
          <div className="text-[20px] md:text-[22px] text-[var(--color-accent)] mt-4 pl-[80px] lg:pl-[180px] 2xl:pl-[650px]" style={{ fontFamily: 'var(--font-main)' }}>
            -BLOG
          </div>
          <Link href="/" className="mr-[80px] lg:mr-[180px] 2xl:mr-[650px] mt-4 hover:opacity-80 transition-opacity flex items-center">
            <IoHome className="w-6 h-6 text-[var(--color-accent)] opacity-100" />
          </Link>
        </div>

        {/* Scrollable content */}
        <div className="mt-30 xl:mt-20 2xl:mt-35 overflow-y-auto max-w-6xl mx-[80px] lg:mx-[180px] 2xl:mx-[650px]">
          
        

          {/* Blog header */}
          <div className="mb-10 mt-10 2xl:mt-20">
            <h1 className="text-[40px] md:text-[50px] lg:text-[60px] text-[var(--color-text)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {blog.title}
            </h1>
            <p className="pb-10 text-[18px] md:text-[24px] text-[var(--color-accent)]" style={{ fontFamily: 'var(--font-sub)' }}>
              {new Date(blog.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Blog content */}
          {blog.isMDX ? (
            <MDXContent source={blog.content} />
          ) : (
            <div 
              className="leading-relaxed text-lg md:text-[20px] lg:text-[22px] pt-10 pb-10 prose prose-invert max-w-none" 
              style={{ fontFamily: 'var(--font-main)' }}
              dangerouslySetInnerHTML={{ __html: await markdownToHtml(blog.content) }}
            />
          )}

        </div>

        {/* Fixed right vertical line - longer, starts from top */}
        <div className="fixed top-0 h-[70%] w-[4px] bg-[#F8C306] z-10 lg:right-[100px] 2xl:right-[500px] lg:block hidden"></div>
      </div>
    </div>
  );
} 