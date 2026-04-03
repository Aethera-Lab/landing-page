import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "DePIN",
    title: "How Regenerative Finance (ReFi) Aims to fix the $3 Trillion Climate Energy Gridlock",
    excerpt:
      "ReFi vs Traditional green finance, why $3.3T in clean energy investment still isn't enough, and why the system is broken at the capital distribution layer.",
    date: "Jun 12, 2026",
    readTime: "5 min read",
    image: "/blogs-1.jpg",
  },
  {
    id: 2,
    category: "Tokenization",
    title: "India Has 143 GW Of Solar. So Why Are Profitable Projects Still Dying For Lack Of Capital?",
    excerpt:
      "The missing middle problem - why ₹2Cr projects fall through every gap in the financial system.",
    date: "May 28, 2026",
    readTime: "7 min read",
    image: "/blogs-2.jpg",
  },
  {
    id: 3,
    category: "Web3",
    title: "The $350 Billion Gap Nobody Is Talking About",
    excerpt:
      "India's renewable energy financing shortfall, who is affected, and what happens if it stays unfilled.",
    date: "May 10, 2026",
    readTime: "6 min read",
    image: "/blogs-4.jpg",
  },
  {
    id: 4,
    category: "Sustainability",
    title: "Why Your Bank Will Never Fund The Energy Transition Fast Enough",
    excerpt:
      "Credit committees, 9-month loan processing, collateral requirements, the structural incompatibility of traditional finance with distributed solar.",
    date: "Apr 22, 2025",
    readTime: "4 min read",
    image: "/blogs-3.jpg",
  },
  {
    id: 5,
    category: "Investing",
    title: "Solar Has Already Won The Technology War. Now It Needs To Win The Capital War",
    excerpt:
      "Cost per watt curves, grid parity achieved - the only bottleneck left is financing speed.",
    date: "Apr 8, 2025",
    readTime: "5 min read",
    image: "blogs-5.jpg",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const Blogs = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-bold text-muted-foreground tracking-widest uppercase">
              From the Blog
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Insights on energy,<br />
              <span className="text-primary">web3 & beyond.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deep dives into DePIN, tokenized infrastructure, and the future of clean energy finance.
            </p>
          </div>

          {/*<a
            href="/blog"
            className="self-start md:self-auto flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-semibold text-foreground hover:border-foreground hover:bg-card transition-all"
          >
            View all posts
            <ArrowRight size={15} />
        </a>*/}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category badge over image */}
                {/*<span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-bold text-foreground">
                  <Tag size={10} className="text-primary" />
                  {post.category}
                </span>*/}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <div className="flex-1 space-y-2">
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    {/*<span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>*/}
                  </div>
                  <ArrowRight
                    size={15}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};