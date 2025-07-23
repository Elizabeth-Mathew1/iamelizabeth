import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  featured_image?: string;
  excerpt?: string;
  tags?: string[];
  draft: boolean;
  content: string;
  isMDX?: boolean;
}

export function getAllPosts(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".md" or ".mdx" from file name to get slug
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const isMDX = fileName.endsWith('.mdx');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        featured_image: matterResult.data.featured_image,
        excerpt: matterResult.data.excerpt,
        tags: matterResult.data.tags || [],
        draft: matterResult.data.draft || false,
        content: matterResult.content,
        isMDX,
      };
    })
    .filter((post) => !post.draft) // Filter out draft posts
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // Sort by date

  return allPostsData;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    // Try .mdx first, then .md
    let fullPath = path.join(postsDirectory, `${slug}.mdx`);
    let isMDX = true;
    
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`);
      isMDX = false;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      featured_image: matterResult.data.featured_image,
      excerpt: matterResult.data.excerpt,
      tags: matterResult.data.tags || [],
      draft: matterResult.data.draft || false,
      content: matterResult.content,
      isMDX,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
} 