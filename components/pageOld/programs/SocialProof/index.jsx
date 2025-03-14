import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { Globe, HandHeart, PencilRuler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSocialProofArticles } from "@/lib/actions/programs/get";
import ArticleCard from "./ArticleCard";
import { getLocale } from "next-intl/server";

export default async function SocialProof({ children, className, ...props }) {
  const socialProofArticles = await getSocialProofArticles();
  const locale = await getLocale();
  return (
    <Section className={cn("", className)} {...props}>
      <Container
        className={
          "p-5 bg-white rounded-2xl flex flex-col gap-y-3 justify-start items-center text-center"
        }
      >
        <h2 className="font-serif text-start md:text-center text-4xl font-semibold">
          Proven Approaches to CSR
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {socialProofArticles.map((article, index) => (
            <ArticleCard
              locale={locale}
              article={article}
              key={`article-${article.slug}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
