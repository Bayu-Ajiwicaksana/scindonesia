"use client";

import { cn } from "@/lib/utils";
import { setUserLocale } from "@/services/locale";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useTransition } from "react";

const langs = {
  id: {
    abbr: "ID",
    label: "Bahasa Indonesia",
  },
  en: {
    abbr: "EN",
    label: "English",
  },
};

export default function LocaleSwitcher({
  defaultValue,
  label,
  children,
  className,
  ...props
}) {
  const [isPending, startTransition] = useTransition();

  function onChange(value) {
    startTransition(() => {
      setUserLocale(value);
    });
  }

  return (
    <DropdownMenu modal={true}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" disabled={isPending} className={className}>
          <Languages className="size-4 stroke-2" />
          {langs[defaultValue].abbr}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        {/* <DropdownMenuLabel>Test</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={defaultValue} onValueChange={onChange}>
          <DropdownMenuRadioItem value="id">
            Bahasa Indonesia
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
