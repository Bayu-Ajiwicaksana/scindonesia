import { cn } from "@/lib/utils";
import ContactUsBtn from "@/components/button/ContactUsBtn";
import LinkBtn from "@/components/button/LinkBtn";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Sparkles } from "lucide-react";
import WorkItem from "../../works/WorkList/WorkItem";
import CollabInvite from "../../works/WorkList/CollabInvite";

export default function WorkCarousel({
  locale,
  works,
  translations,
  children,
  className,
  ...props
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
      {works.map((w, i) => (
        <WorkItem locale={locale} data={w} key={`works-${i}`} />
      ))}
      <CollabInvite>
        <LinkBtn href="/our-works" variant="outline">
          {/* More of our works */}
          {translations.more}
        </LinkBtn>
        <span className="text-sm text-muted-foreground">{translations.or}</span>
        <ContactUsBtn>
          {/* Start Your Program with Us */}
          {translations.add}
        </ContactUsBtn>
      </CollabInvite>
    </div>
  );
}

function ProjectBeneficiaries({ impacts, className, ...props }) {
  return (
    <Alert className={cn("bg-secondary", className)} {...props}>
      <Sparkles className="h-4 w-4" />
      <AlertTitle className="mb-3">Beneficiaries</AlertTitle>
      <AlertDescription>
        <ul className="list-disc list-outside space-y-2">
          {impacts.map((impact, index) => (
            <li key={impact} className="text-xs">
              {impact}
            </li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
}
