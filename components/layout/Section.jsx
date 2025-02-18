import { cn } from "@/lib/utils";

export default function Section({ as, children, className, ...props }) {
  const Comp = as ?? "section";
  return (
    <Comp className={cn("xl:px-8 w-full", className)} {...props}>
      {children}
    </Comp>
  );
}
