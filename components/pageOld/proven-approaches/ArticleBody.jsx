import { Separator } from "../../ui/separator";
import { format, parseISO } from "date-fns";
import { Timer } from "lucide-react";
import OpImage from "../../OpImage";
import ArticleContent from "./ArticleContent";
import { useLocale } from "next-intl";
import { dateFormatter } from "@/lib/utils";

export default function ArticleBody({ article }) {
  const locale = useLocale();
  return (
    <div className="w-full max-w-screen-2xl flex flex-col items-center gap-10">
      <div className="w-full max-w-screen-xl flex flex-col items-center gap-4">
        <h1 className="font-serif text-3xl xl:text-5xl text-center font-semibold xl:w-2/3">
          {article[`title_${locale}`] ?? article.title}
        </h1>
        <div className="flex flex-col items-center gap-2 text-zinc-500 text-sm">
          <span>Written by : {article.author}</span>
          <div className="flex items-center gap-4">
            <span>
              {dateFormatter(parseISO(article.published_at), "PPP", locale)}
            </span>
            <span>|</span>
            <div className="inline-flex items-center gap-1">
              <Timer className="size-4" />
              <span>{article.read_time} min read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-lg relative aspect-[5/3] xl:aspect-[7/3]">
        <OpImage
          src={article.thumbnail}
          alt={article.slug}
          className="absolute top-0 left-0 w-full h-full object-center rounded-3xl shadow-md"
        />
      </div>
      {/* <div className="w-full max-w-screen-xl grid grid-cols-[1fr_.4fr] place-content-center gap-10">
        <article className="prose prose-headings:font-serif max-w-full break-words overflow-hidden">
          <Markdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {article[`content_${locale}`] ?? article.content}
          </Markdown>
        </article>
        <div className="h-20 bg-primary-accent sticky top-[70px]"></div>
      </div> */}
      <ArticleContent
        title={article[`title_${locale}`] ?? article.title}
        content={article[`content_${locale}`] ?? article.content}
      />
    </div>
  );
}
