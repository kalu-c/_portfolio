import Footer from "@/components/sections/Footer";
import NavBar from "@/components/NavBar";
import { posts } from "@/constants/blog";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main className="w-full">
      <div className="md:px-[50px] xl:px-[180px] px-3">
        <NavBar />
        <article className="mx-auto max-w-4xl px-0 pb-32 pt-36 md:px-10">
          <Link href="/blog" className="mb-16 inline-flex items-center gap-2 text-sm text-muted-dark transition hover:text-primary"><ArrowLeft size={16} /> Back to notes</Link>
          <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-dark">
            <span>{post.category}</span><span>{post.date}</span><span>{post.readTime}</span>
          </div>
          <h1 className="max-w-3xl font-korium text-[clamp(3.5rem,9vw,8rem)] leading-[0.85]">{post.title}</h1>
          <p className="mt-8 max-w-2xl text-xl text-muted-dark md:text-2xl">{post.excerpt}</p>
          <div className="relative mt-14 aspect-[1.8] overflow-hidden rounded-3xl bg-muted">
            <Image src={post.image} alt="" fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" priority />
          </div>
          <div className="mx-auto mt-16 max-w-2xl space-y-8 text-lg leading-relaxed text-foreground/80">
            {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}
