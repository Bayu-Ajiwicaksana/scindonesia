import ArticleBody from "@/components/page/proven-approaches/ArticleBody";
import { getSocialProofArticle } from "@/lib/actions/programs/get";
import { cn } from "@/lib/utils";

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const article = await getSocialProofArticle(slug);
  // console.log(article);
  return <ArticleBody article={article} />;
}
