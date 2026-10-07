export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "building-products-that-feel-simple",
    title: "Building products that feel simple",
    excerpt: "Good interfaces do not ask for attention. They make the next step feel obvious.",
    category: "Design & development",
    date: "October 07, 2026",
    readTime: "4 min read",
    image: "/projects/visionpad.png",
    content: [
      "The best digital products often feel quiet. They give people enough guidance to move forward, then get out of the way. That kind of simplicity is not the absence of decisions; it is the result of making the right ones early.",
      "When I start a project, I look for the smallest useful version of the idea. From there, every screen gets a job, every interaction earns its place, and the visual system becomes a tool for clarity rather than decoration.",
      "Simple products are easier to understand, easier to maintain, and much easier to improve. That is the standard I try to bring to every interface I build.",
    ],
  },
  {
    slug: "a-better-way-to-start-a-side-project",
    title: "A better way to start a side project",
    excerpt: "A small, finished idea teaches more than a large idea that never leaves the notebook.",
    category: "Process",
    date: "September 18, 2026",
    readTime: "3 min read",
    image: "/projects/template-generator.png",
    content: [
      "Side projects are most valuable when they have a clear boundary. A focused problem, a short list of constraints, and one person who can use the first version are usually enough to get moving.",
      "I like to define the happy path first. It keeps the build small and gives every technical decision a connection to a real outcome. Once that path works, the product can grow from evidence instead of assumptions.",
      "Finishing is a feature. A compact project that ships creates momentum for the next, more ambitious idea.",
    ],
  },
  {
    slug: "the-details-people-remember",
    title: "The details people remember",
    excerpt: "Polish is not about adding more. It is about making the important moments feel considered.",
    category: "Interface notes",
    date: "August 29, 2026",
    readTime: "5 min read",
    image: "/projects/cheret.png",
    content: [
      "A good first impression comes from the details around the main action: the spacing before a heading, the weight of a button label, and the feedback after a form is submitted.",
      "These moments are easy to overlook because they are small in isolation. Together, they tell people whether a product is trustworthy and whether someone cared about their experience.",
      "I think of polish as a form of respect. It is the final pass that removes friction and lets the core idea come through.",
    ],
  },
];
