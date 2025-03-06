import { Container } from "@/components/Container";
import { getPosts } from "./posts";
import React from "react";
import Image from "next/image";
import Link from 'next/link'; // Importing Link from next/link for routing

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="bg-bodyColor text-white/80 px-4 py-20 md:px-20 md:py-16 min-h-screen content-center">
        <h1 className="text-3xl text-center md:text-5xl font-bold text-lightSky">
          Blog Posts
        </h1>

        <p className="text-center text-white/70 text-lg md:text-xl mt-4 max-w-4xl mx-auto">
          Here are some of my latest blog posts. I write about web development,
          programming, and other tech-related topics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-lightSky/10 p-4 rounded-lg mt-8">
              <Image src={post.image} alt={post.title} width={400} height={200} />
              <h3 className="text-xl font-bold text-lightSky">{post.title}</h3>
              <p className="text-sm text-white/70">{post.author} - {post.date}</p>
              <p className="text-white/80 mt-2 mb-4">{post.description}</p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-lightSky hover:text-lightSky/80 mt-4"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}