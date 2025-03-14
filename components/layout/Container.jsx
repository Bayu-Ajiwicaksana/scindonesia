import { cn } from "@/lib/utils";

export default function Container({ children, className, ...props }) {
  return (
    <div className={cn("mx-auto w-full px-4", className)} {...props}>
      {children}
    </div>
  );
}
