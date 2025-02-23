"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ArrowDown } from "lucide-react";

export default function MoveDown({ className, to, ...props }) {
  const router = useRouter();
  return (
    <div className={cn(className)} onClick={() => router.push(to)} {...props}>
      <div
        className={cn(
          "flex animate-bounce size-28 bg-transparent border border-border/35 text-border/35 rounded-full items-center justify-center hover:border-border hover:text-border hover:cursor-pointer transition-colors"
        )}
      >
        <ArrowDown className="size-12 stroke-1" />
      </div>
    </div>
  );
}
