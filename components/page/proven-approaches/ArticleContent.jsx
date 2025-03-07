"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import ArticleToC from "./ArticleToC";
import { Separator } from "@/components/ui/separator";
import ShareBtn from "@/components/button/ShareBtn";
import useFullUrl from "@/hooks/useFullUrl";

const stripMarkdown = (text) => {
  return text
    .replace(/[_*~`]/g, "") // Remove *, _, ~, ` (bold, italic, strikethrough, code)
    .replace(/^\d+(\.\d+)*\s*/g, "") // Remove leading numbers and dots (e.g., "1.", "2.1.", "3.2.1 ")
    .replace(/^(\d+\.)+\d+\s*/g, "") // Extra check for cases like "1.2.3 Heading"
    .replace(/\.(?=\s|$)/g, "") // Remove trailing dots before spaces or end of text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Remove Markdown links, keep text
    .replace(/<[^>]+>/g, ""); // Remove HTML tags (if any)
};

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[_*~`]/g, "") // Remove *, _, ~, ` (bold, italic, strikethrough, code)
    .replace(/[“”‘’"']/g, "") // Remove double & single quotes
    .replace(/\.(?=\s|$)/g, "") // Remove trailing dots before spaces or end of text
    .replace(/[^\w\s-]/g, "") // Remove other special chars except hyphen & space
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
};

export default function ArticleContent({
  title,
  children,
  className,
  content,
  ...props
}) {
  const [headings, setHeadings] = useState([]);
  const fullUrl = useFullUrl();

  useEffect(() => {
    const extractHeadings = (md) => {
      const headingRegex = /^(#{1,6})\s+(.*)/gm;
      const matches = [...md.matchAll(headingRegex)];

      const parsedHeadings = matches.map((match) => {
        const rawText = match[2]; // Original heading text
        const preparedText = rawText.replace(/\.(?=\s|$)/g, ""); // Remove leading numbers
        const id = generateSlug(preparedText); // Match rehypeSlug's behavior
        const cleanedText = stripMarkdown(preparedText);

        return {
          level: match[1].length,
          text: cleanedText,
          id, // Ensure ToC links match rehypeSlug's IDs
        };
      });

      setHeadings(parsedHeadings);
    };

    extractHeadings(content);
  }, [content]);

  return (
    <div className="w-full max-w-screen-xl grid grid-cols-1 xl:grid-cols-[1fr_.6fr] place-content-center gap-y-6 gap-x-20">
      <article className="prose prose-headings:font-serif max-w-full break-words overflow-hidden order-last xl:order-first">
        <Markdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
        >
          {content}
        </Markdown>
      </article>
      <aside className="xl:sticky xl:top-[70px] flex flex-col-reverse xl:flex-col p-1.5 gap-4 rounded-2xl border h-fit order-first xl:order-last">
        <div className="p-1.5 bg-secondary rounded-xl">
          <h2 className="text-lg font-bold mb-3">Table of Contents</h2>
          <ArticleToC headings={headings} />
        </div>
        {/* <Separator className="my-5" /> */}
        <div className="flex flex-col items-center gap-2">
          <span>Share :</span>
          <ShareBtn
            title={title}
            url={fullUrl}
            className={{ icon: "!size-10" }}
          />
        </div>
      </aside>
    </div>
  );
}
