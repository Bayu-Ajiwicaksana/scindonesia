import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

export default function ContactUsBtn({
  children = "Let's Talk",
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
    >
      {!iconOnly && children}
      {Icon}
    </Button>
  );
}
