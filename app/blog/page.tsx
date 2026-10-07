import Footer from "@/components/sections/Footer";
import NavBar from "@/components/NavBar";
import { posts } from "@/constants/blog";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main className="w-full">
      <div className="md:px-[50px] xl:px-[180px] px-3">
        <NavBar />
        <section className="min-h-dvh pt-36 pb-24 md:px-10">
          <div className="flex items-end justify-between gap-6 border-b border-black/10 pb-5">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-dark">Journal / 03</p>
              <h1 className="font-korium text-[clamp(4rem,11vw,10rem)] leading-[0.8]">Notes</h1>
            </div>
            <p className="mb-1 max-w-xs text-right text-muted-dark max-md:hidden">
              Thoughts on design, code, and the work behind meaningful digital products.
            </p>
          </div>

          <Link href={"/blog/" + featured.slug} className="group mt-8 grid overflow-hidden rounded-3xl bg-muted md:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[320px] overflow-hidden md:min-h-[500px]">
              <Image src={featured.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 60vw" priority />
            </div>
            <div className="flex flex-col justify-between gap-12 p-6 md:p-10">
              <div className="flex items-center justify-between text-sm text-muted-dark">
                <span>{featured.category}</span><span>{featured.date}</span>
              </div>
              <div>
                <p className="mb-5 text-sm text-muted-dark">Featured note · {featured.readTime}</p>
                <h2 className="max-w-xl text-4xl font-medium leading-[0.95] tracking-tight md:text-6xl">{featured.title}</h2>
                <p className="mt-6 max-w-md text-lg text-muted-dark">{featured.excerpt}</p>
                <span className="mt-10 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-medium transition group-hover:gap-4">Read article <ArrowUpRight size={16} /></span>
              </div>
            </div>
          </Link>

          <div className="mt-28 flex items-end justify-between border-b border-black/10 pb-5">
            <h2 className="font-korium text-5xl leading-none md:text-7xl">More notes</h2>
            <span className="text-sm text-muted-dark">(02)</span>
          </div>
          <div className="grid gap-x-6 gap-y-12 py-8 md:grid-cols-2">
            {rest.map((post, index) => (
              <Link href={"/blog/" + post.slug} key={post.slug} className="group">
                <div className="relative aspect-[1.35] overflow-hidden rounded-2xl bg-muted">
                  <Image src={post.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm text-muted-dark">0{index + 2} / {post.category}</p>
                    <h3 className="max-w-md text-2xl font-medium leading-tight tracking-tight">{post.title}</h3>
                    <p className="mt-2 max-w-md text-muted-dark">{post.excerpt}</p>
                  </div>
                  <ArrowUpRight className="mt-1 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
