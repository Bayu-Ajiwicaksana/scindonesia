"use client";
import ContactUsBtn from "@/components/button/ContactUsBtn";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export default function CollabInvite() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 1 });
    }
  }, [isInView]);

  return (
    <Card className="border-dashed border-2 opacity-0" ref={scope}>
      <CardContent className="p-6 w-full h-full flex flex-col gap-3 justify-center items-center">
        <p className="text-sm text-zinc-400">Start your program with us</p>
        <ContactUsBtn
          iconOnly={true}
          icon={<Plus />}
          className={"[&_svg]:size-5"}
        />
      </CardContent>
    </Card>
  );
}
