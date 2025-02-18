import { cn } from "@/lib/utils";

export default function ContactUs({ children, className, ...props }) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}
