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
}

export function getAllPosts(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

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
      };
    })
    .filter((post) => !post.draft) // Filter out draft posts
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // Sort by date

  return allPostsData;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
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