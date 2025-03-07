"use client";

import { cn } from "@/lib/utils";
import { Link } from "lucide-react";

export default function CopyLinkBtn({ children, className, url, ...props }) {
  const handleCopy = async () => {
    if (typeof window !== "undefined" && navigator?.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        // alert("success");
        console.log(`success : ${url}`);
        // setTimeout(() => setCopied(false), 2000); // Reset copied state after 2s
      } catch (error) {
        console.error("Failed to copy:", error);
      }
    }
  };
  return (
    <button className={cn(className)} {...props} onClick={handleCopy}>
      <Link />
    </button>
  );
}
