import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

export default function ContactUsBtn({
  children = "Let's Talk",
  withIcon = true,
  iconOnly = false,
  icon,
  className,
  ...props
}) {
  const Icon = icon ?? <Send />;
  return (
    <Button
      className={cn(
        // "focus-visible:ring-green-600 bg-green-600 hover:bg-green-500",
        className
      )}
      {...props}
      asChild
    >
      <Link href={"/contact-us"}>
        {!iconOnly && children}
        {withIcon && Icon}
      </Link>
    </Button>
  );
}
