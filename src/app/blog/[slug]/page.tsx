import { notFound } from "next/navigation";
import { getPosts } from "../posts";
import markdownit from 'markdown-it'
import Image from 'next/image';

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

async function fetchPosts(slug: string): Promise<Post | undefined> {
    const posts = getPosts();
    return posts.find(post => post.slug === slug);
}

export default async function Post({ params }: { params: { slug: string } }) {
    const post = await fetchPosts(params.slug);

    if (!post) {
        notFound();
    }

    // Create a new instance of MarkdownIt and render the markdown content
    const md = markdownit();
    const htmlContent = md.render(post.content);

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <Image 
                src={post.image} 
                alt={post.title} 
                width={1000}
                height={500} 
                layout="responsive"
            />
            <p>{post.description}</p>
            <p>By {post.author}</p>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
    );
}