import { cn, dateFormatter } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OpImage from "@/components/OpImage";
import { Timer } from "lucide-react";
import { parseISO } from "date-fns";
import LinkBtn from "@/components/button/LinkBtn";

export default function ArticleCard({ locale, article, ...props }) {
  // console.log(parseISO(article.$createdAt).toUTCString());
  // console.log(format(parseISO(article.$createdAt), "PPP"));
  return (
    <Card
      className="basis-full md:basis-2/5 xl:basis-3/12 relative border-none bg-transparent shadow-none aspect-[5/7] sm:aspect-[5/4] md:aspect-[5/7] lg:aspect-[5/6] flex flex-col justify-end p-2"
      {...props}
    >
      <OpImage
        src={article.thumbnail}
        alt={article[`title_${locale}`]}
        className="h-full w-full rounded-2xl shadow-md absolute top-0 left-0 object-center"
      />
      {/* <div className="absolute top-[-1px] left-[-1px] size-fit p-2 bg-white rounded-br-2xl border-r border-b">
        <Newspaper className="size-8 stroke-1" />
      </div> */}
      <CardHeader className="p-2 md:p-4 relative bg-secondary/75 backdrop-blur-md rounded-xl">
        <CardDescription className="flex w-full justify-between text-xs mb-2">
          <div className="inline-flex items-center gap-1">
            <Timer className="size-4" />
            <span className="text-zinc-500">{article.read_time} min read</span>
          </div>
          <span>
            {dateFormatter(parseISO(article.published_at), "PPP", locale)}
          </span>
        </CardDescription>
        <CardTitle className="">
          {article[`title_${locale}`] ?? article.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative p-0 pt-1">
        <LinkBtn
          variant="outline"
          className="w-full bg-zinc-700/55 text-primary-foreground backdrop-blur border-none hover:bg-primary hover:text-primary-foreground"
          withPath={true}
          href={`proven-approaches/${article.slug}`}
        >
          Read more
        </LinkBtn>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
