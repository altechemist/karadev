import { notFound } from "next/navigation";
import { getPosts } from "../posts";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";
import { Separator } from "@/components/ui/separator";
import ContactPage from "@/app/contact/page";

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

// Adjusting the PageProps to handle async params correctly
interface PageProps {
  params: Promise<{ slug: string }>; // Ensure params is a Promise here
}

async function fetchPosts(slug: string): Promise<Post | undefined> {
  const posts = getPosts();
  return posts.find((post) => post.slug === slug);
}

export default async function Post({ params }: PageProps) {
  // Await params to avoid sync-dynamic-apis error
  const { slug } = await params;  // Awaiting params as a Promise

  const post = await fetchPosts(slug);

  if (!post) {
    notFound();
  }

  // Serialize the markdown content with remark
  const toHtml = await remark().use(html).process(post.content);
  const htmlContent = toHtml.toString();

  return (
    <div className="bg-bodyColor px-4 py-5 text-white/80">
      <div className="rounded-xl border-lightSky mb-2 shadow-md shadow-lightSky">
        <Image
          src={post.image}
          alt={post.title}
          width={1000}
          height={500}
          layout="responsive"
          className="object-cover w-full h-64 md:h-96 rounded-xl"
        />
      </div>

      <article className="bg-bodyColor text-white/80 py-20 md:px-20 md:py-16 min-h-screen content-center">
        <h1 className="text-3xl text-center mb-4 md:text-5xl font-bold text-lightSky">
          {post.title}
        </h1>

        <p>{post.description}</p>
        <p className="text-white/70 mt-4 mb-6">
          By {post.author} - {post.date}
        </p>

        <Separator />

        {/* Render the markdown content as HTML */}
        <div
          className="mt-4 markdown-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

      <ContactPage />
    </div>
  );
}
