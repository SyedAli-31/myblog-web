import Image from "next/image";
import AddComment from "@/components/AddComments";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

// This function generates static paths based on the slugs.
export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);

  // Generate static paths for each post's slug
  return slugs.map((item: { slug: string }) => ({
    params: { slug: item.slug },
  }));
}

// Define the type of PageProps to include params correctly.
interface PageProps {
  params: {
    slug: string;
  };
}

// This is the page component that will render the dynamic page content
export default async function Page({ params }: PageProps) {
  // Ensure that params is awaited
  const { slug } = await params;

  // Fetch post data based on the slug
  const query = `*[_type=='post' && slug.current=="${slug}"]{
    _id, title, summary, image, content,
    author->{bio, image, name}
  }[0]`;
  const post = await client.fetch(query);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlForImage(post.image)}
        width={500}
        height={500}
        alt={post.title}
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlForImage(post.author.image)}
          width={200}
          height={200}
          alt={post.author.name}
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">
            {post.author.name}
          </h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {post.author.bio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <section
        className="text-lg leading-normal text-dark/80 dark:text-light/80
      prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold
      prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary
      prose-strong:text-dark dark:prose-strong:text-white"
      >
        <PortableText value={post.content} />
        <AddComment postId={post._id} />
      </section>
    </article>
  );
}
