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
    <Button
      className={cn(
        "w-full h-fit text-lg px-6 py-3 border border-primary transition-all [&_svg]:rotate-0 [&_svg]:hover:rotate-45 [&_svg]:hover:transition-transform",
        className
      )}
      {...props}
      asChild
    >
      <Link href={withPath ? pathname + "/" + href : href}>
        {children ?? "Link"} <ArrowUpRight />
      </Link>
    </Button>
  );
}
