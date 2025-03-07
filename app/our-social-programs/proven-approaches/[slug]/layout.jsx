import { cn } from "@/lib/utils";

export default function ArticleLayout({ children }) {
  return (
    <div className={cn("pt-24 px-2 flex flex-col items-center")}>
      {children}
    </div>
  );
}
