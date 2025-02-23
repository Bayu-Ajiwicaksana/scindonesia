import { cn } from "@/lib/utils";

export default function Section({ as, children, className, ...props }) {
  const Comp = as ?? "section";
  return (
    <Comp className={cn("px-3 xl:px-8 w-full", className)} {...props}>
      {children}
    </Comp>
  );
}
