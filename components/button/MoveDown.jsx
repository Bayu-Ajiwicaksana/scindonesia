"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ArrowDown } from "lucide-react";

export default function ({ className, to, ...props }) {
  const router = useRouter();
  return (
    <div
      className={cn(
        "animate-bounce size-28 bg-transparent border border-border/35 text-border/35 rounded-full flex items-center justify-center hover:border-border hover:text-border hover:cursor-pointer transition-colors",
        className
      )}
      onClick={() => router.push(to)}
      {...props}
    >
      <ArrowDown className="size-12 stroke-1" />
    </div>
  );
}
