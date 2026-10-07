import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — KALU",
  description: "Notes on design, development, and building thoughtful digital products.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
