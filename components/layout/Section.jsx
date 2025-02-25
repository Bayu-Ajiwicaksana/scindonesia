import { cn } from "@/lib/utils";

export default function Section({ as, children, className, ...props }) {
  const Comp = as ?? "section";
  return (
    <Comp className={cn("px-2 w-full pt-24", className)} {...props}>
      {children}
    </Comp>
  );
}
