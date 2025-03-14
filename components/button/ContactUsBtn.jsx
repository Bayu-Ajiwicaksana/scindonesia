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
        "w-full h-fit text-lg px-6 py-3 border border-primary transition-all [&_svg]:rotate-0 [&_svg]:hover:rotate-45 [&_svg]:hover:transition-transform",
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
