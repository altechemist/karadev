import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/app/posts');

// Define the structure of a post
interface Post {
  title: string;
  image: string;
  description: string;
  author: string;
  date: string;
  content: string;
  slug: string;
}

// Get all posts
export function getPosts(): Post[] {
  const postFiles = fs.readdirSync(postsDirectory);

  return postFiles.map((filename): Post => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);

    // Check if required fields exist
    if (!data.title || !data.image || !data.description || !data.author || !data.date) {
      throw new Error(`Post at ${filePath} is missing required metadata`);
    }

    return {
      title: data.title,
      image: data.image,
      description: data.description,
      author: data.author,
      date: data.date,
      content,
      slug,
    };
  });
}