import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const prettyCodeOptions = {
  theme: {
    light: "github-light",
    dark: "github-dark-dimmed",
  },
  keepBackground: false,
};

export const mdxOptions: MDXRemoteProps["options"] = {
  parseFrontmatter: false,
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"],
          },
        },
      ],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [rehypePrettyCode, prettyCodeOptions as any],
      [rehypeKatex, { strict: false, output: "html" }],
    ],
  },
};
