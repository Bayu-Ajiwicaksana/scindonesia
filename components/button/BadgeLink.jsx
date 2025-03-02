import { cn } from "@/lib/utils";
import { badgeVariants } from "../ui/badge";
import Link from "next/link";

export default function BadgeLink({ children, className, ...props }) {
  return (
    <Link
      className={cn(badgeVariants({ variant: "outline" }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}
