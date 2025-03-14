import { cn } from "@/lib/utils";
import Image from "next/image";

export default function TestimonyCard({
  testimony,
  children,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "rounded-2xl p-8 flex flex-col gap-6 cursor-grabbing hover:bg-primary hover:text-white transition-colors duration-150 [&_.position]:hover:text-zinc-300 select-none",
        className
      )}
      {...props}
    >
      <div className="flex gap-3 items-center">
        <Image
          src={testimony.avatar}
          alt={testimony.name}
          width={512}
          height={512}
          className="border-none rounded-full size-14"
        />
        <div>
          <h3 className="font-medium">{testimony.name}</h3>
          <span className="position font-normal text-sm text-zinc-600">
            {testimony.position}
          </span>
        </div>
      </div>
      <q className="italic">{testimony.testimony}</q>
    </div>
  );
}
