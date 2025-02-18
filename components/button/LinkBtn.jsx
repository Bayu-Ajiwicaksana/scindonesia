import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LinkBtn({
  children,
  className,
  href = "/",
  icon,
  ...props
}) {
  const Icon = icon ?? ArrowUpRight;
  return (
    <Button className={cn("", className)} {...props} asChild>
      <Link href={href}>
        {children ?? "Link"} <ArrowUpRight />
      </Link>
    </Button>
  );
}
