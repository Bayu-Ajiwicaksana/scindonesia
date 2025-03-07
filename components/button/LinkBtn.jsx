"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function LinkBtn({
  children,
  className,
  withPath = false,
  href = "/",
  icon,
  ...props
}) {
  const Icon = icon ?? ArrowUpRight;
  const pathname = usePathname();
  return (
    <Button className={cn("", className)} {...props} asChild>
      <Link href={withPath ? pathname + "/" + href : href}>
        {children ?? "Link"} <ArrowUpRight />
      </Link>
    </Button>
  );
}
