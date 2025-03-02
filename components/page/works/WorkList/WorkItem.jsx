"use client";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Building2, Sparkles } from "lucide-react";
import TextExpander from "@/components/TextExpander";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useAnimate, useInView } from "motion/react";
import { useEffect } from "react";
import OpImage from "@/components/OpImage";

export default function WorkItem({ locale, data, className, ...props }) {
  const { isSM, isMD, isLG } = useMediaQuery();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 1 });
    }
  }, [isInView]);
  return (
    <Card
      className={cn("flex flex-col justify-between opacity-0", className)}
      {...props}
      ref={scope}
    >
      <div className="contents sm:grid md:contents lg:grid grid-cols-2 gap-6">
        <CardContent className="pt-6 sm:pe-0 md:pe-6 lg:pe-0 sm:pb-0 md:pb-6 lg:pb-0 flex flex-col items-center gap-4">
          {/* <img src={data.programs.thumbnail} alt="" className="rounded-lg" /> */}
          <OpImage
            src={data.programs.thumbnail}
            alt=""
            className="rounded-lg object-contain"
          />
          {(!isSM || isMD) && !isLG && (
            <img
              src={data.clients.logo}
              alt=""
              className={cn(
                "h-7",
                data.clients.slug === "unilever" && "h-14",
                data.clients.slug === "pt-telkom" && "h-12",
                "w-fit"
              )}
            />
          )}
        </CardContent>
        <CardHeader className="pt-0 sm:pt-6 md:pt-0 lg:pt-6 sm:ps-0 md:ps-6 lg:ps-0 sm:pb-0 md:pb-6 lg:pb-0">
          {((isSM && !isMD) || isLG) && (
            <img
              src={data.clients.logo}
              alt=""
              className={cn(
                "h-7",
                data.clients.slug === "unilever" && "h-14",
                data.clients.slug === "pt-telkom" && "h-12",
                "w-fit"
              )}
            />
          )}
          <CardTitle className="flex justify-between text-lg sm:pt-4 md:pt-0 lg:pt-4">
            {data[`title_${locale}`] ?? data.title}
          </CardTitle>
          <CardDescription className="flex flex-col items-start gap-3">
            {/* <div className="flex items-center gap-2">
              <MapPin className="size-4" /> {data.location}
            </div> */}
            <div className="flex items-center gap-2">
              <Building2 className="size-4" /> {data.clients.name}
            </div>
          </CardDescription>
          {(!isSM || isMD) && !isLG && (
            <TextExpander className={"pt-3"}>
              {data[`description_${locale}`] ?? data.description}
            </TextExpander>
          )}
        </CardHeader>
      </div>
      <CardContent className="text-neutral-600 space-y-5">
        {isSM && !isMD ? (
          <TextExpander className={"pt-3"}>
            {data[`description_${locale}`] ?? data.description}
          </TextExpander>
        ) : (
          isLG && (
            <p className={"pt-3"}>
              {data[`description_${locale}`] ?? data.description}
            </p>
          )
        )}
        <ProjectBeneficiaries
          impacts={data[`impact_${locale}`] ?? data.impact}
        />
      </CardContent>
    </Card>
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
            <li key={impact}>{impact}</li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
}
