import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactUsBtn({
  children,
  withIcon = true,
  iconOnly = false,
  icon,
  className,
  ...props
}) {
  const t = useTranslations("btn");
  const label = children ?? t("contactUs.default");
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
        {!iconOnly && label}
        {withIcon && Icon}
      </Link>
    </Button>
  );
}
