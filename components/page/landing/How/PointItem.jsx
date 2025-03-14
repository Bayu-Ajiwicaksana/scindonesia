import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function PointItem({ children }) {
  return (
    <Badge
      variant={"outline"}
      className={
        "flex border-green-500 text-sm text-green-800 font-normal rounded-2xl px-4 py-3 items-start gap-2 hover:bg-green-800 hover:text-white"
      }
    >
      <CheckCircle className="size-4 shrink-0 mt-0.5" />
      <span>{children}</span>
    </Badge>
  );
}
