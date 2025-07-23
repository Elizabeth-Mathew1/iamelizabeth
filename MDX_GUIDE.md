# MDX Blog Guide

Your blog now supports MDX (Markdown + JSX) files! This allows you to use React components directly in your markdown content.

## What is MDX?

MDX is an extension of Markdown that allows you to use JSX in your content. This means you can:

- Use React components
- Add interactive elements
- Create custom layouts
- Embed dynamic content

## File Extensions

Your blog now supports both file types:
- `.md` - Regular markdown files (rendered as HTML)
- `.mdx` - MDX files (rendered with React components)

## Available Custom Components

### CalloutBox

A styled callout box with different types:

```jsx
<CalloutBox type="info" title="Information">
  This is an informational callout.
</CalloutBox>

<CalloutBox type="warning" title="Warning">
  This is a warning callout.
</CalloutBox>

<CalloutBox type="success" title="Success">
  This is a success callout.
</CalloutBox>

<CalloutBox type="error" title="Error">
  This is an error callout.
</CalloutBox>
```

### Image

A custom image component with Next.js optimization:

```jsx
<Image 
  src="/path/to/image.jpg" 
  alt="Description" 
  width={800} 
  height={400} 
/>
```

## Creating New MDX Posts

1. Create a new `.mdx` file in the `content/blog` directory
2. Add frontmatter at the top:

```yaml
---
title: "Your Post Title"
date: "2024-01-15"
featured_image: "/images/your-image.jpg"
excerpt: "A brief description of your post"
tags: ["tag1", "tag2"]
draft: false
---
```

3. Write your content using markdown and React components
4. The post will automatically appear in your blog list

## Adding Custom Components

To add new custom components:

1. Create your component in `src/components/`
2. Import and add it to the `components` object in `src/components/MDXContent.tsx`
3. Use it in your MDX files

## CMS Integration

The CMS is configured to create `.mdx` files by default. When you create a new blog post through the CMS, it will be saved as an MDX file.

## Example MDX Post

See `content/blog/sample-mdx.mdx` for a complete example of an MDX blog post with custom components.

## Benefits

- **Flexibility**: Mix markdown with React components
- **Reusability**: Use the same components across your site
- **Interactivity**: Add dynamic, interactive content
- **Consistency**: Maintain your design system in blog posts

## Migration

Existing `.md` files will continue to work as before. You can gradually convert them to `.mdx` if you want to use React components. 