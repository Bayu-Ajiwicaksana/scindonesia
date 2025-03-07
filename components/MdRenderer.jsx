"use client";

import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default function MdRenderer({ children }) {
  return (
    <Markdown remarkPlugins={[remarkGfm, remarkBreaks]}>{children}</Markdown>
  );
}
