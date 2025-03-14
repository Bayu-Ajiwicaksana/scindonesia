import { cn } from "@/lib/utils";

export default function ArticleToC({
  headings,
  children,
  className,
  ...props
}) {
  return (
    <ul className="list-disc space-y-2">
      {headings.map((heading) => (
        <li key={heading.id} className={`ml-3 text-sm`}>
          <a href={`#${heading.id}`} className="hover:underline">
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
