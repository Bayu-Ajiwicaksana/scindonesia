"use client";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { coreValues } from "@/lib/data";
import { Fragment, useState, useRef, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import AppLogo from "@/components/AppLogo";
import useMediaQuery from "@/hooks/useMediaQuery";

const startInput = 0;
const endInput = 1;
// const diffInput = (endInput - startInput) * 100;

export default function CoreValue({
  translations,
  children,
  className,
  ...props
}) {
  const [activeCore, setActiveCore] = useState(0);
  const { isMD, isLG } = useMediaQuery();
  const targetScroll = useRef(null);
  const targetView = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({ target: targetScroll });
  const scroll_y = useTransform(
    scrollYProgress,
    [startInput, endInput],
    ["0%", "-300%"]
  );
  const y = useSpring(scroll_y, {
    stiffness: 200,
    damping: 45,
    restDelta: 0.5,
  });

  let scrollPerItem;

  useEffect(() => {
    if (targetScroll.current) {
      scrollPerItem = targetScroll.current.offsetHeight / coreValues.length;
      console.log(scrollPerItem);
    }
  }, [targetScroll.current]);

  return (
    <Section
      className={cn("bg-background lg:h-[400vh]", className)}
      {...props}
      ref={targetScroll}
      id="core_values"
    >
      <Container
        className={"lg:h-screen py-40 lg:pt-[90px] lg:pb-6 lg:sticky lg:top-0"}
      >
        {isLG ? (
          <div className={"grid grid-cols-2 gap-x-10 h-full"}>
            <div className="h-full flex flex-col justify-between">
              <div>
                <h2 className="text-foreground text-4xl font-serif font-semibold">
                  {/* Our Core Values */}
                  {translations.heading}
                </h2>
                <div className="mt-8">
                  {coreValues.map((value, index) => (
                    <Fragment key={`core-${index}`}>
                      <motion.button
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "text-muted-foreground h-fit w-auto"
                        )}
                        style={{
                          color: "hsl(var(--muted-foreground))",
                        }}
                        animate={{
                          x: index === activeCore ? "25px" : "0px",
                          color:
                            index === activeCore
                              ? "hsl(var(--primary))"
                              : "hsl(var(--muted-foreground))",
                          fontSize: index === activeCore ? "24px" : "20px",
                          lineHeight: index === activeCore ? "32px" : "28px",
                          fontWeight: index === activeCore ? 600 : 400,
                        }}
                        onClick={() =>
                          window.scrollTo({
                            // top: window.scrollY - targetScroll.current.offsetHeight,
                            top:
                              window.scrollY +
                              targetScroll.current.getBoundingClientRect().top +
                              index *
                                (targetScroll.current.offsetHeight /
                                  coreValues.length),
                          })
                        }
                      >
                        <span>{index < 9 ? `0${index + 1}` : index + 1}</span>
                        <span>{value.name}</span>
                      </motion.button>
                      <Separator
                        className={cn(
                          "w-full",
                          index !== coreValues.length - 1 ? "my-3" : "mt-3"
                        )}
                      />
                    </Fragment>
                  ))}
                </div>
              </div>
              {/* <button onClick={() => setActiveCore(2)}>Set state</button> */}
              <AppLogo asLink={false} className={"w-[75%] opacity-65"} />
            </div>
            <div
              className="w-full h-full bg-primary overflow-hidden rounded-2xl"
              ref={targetView}
            >
              <motion.div className="w-full h-full" style={{ y }}>
                {coreValues.map((value, index) => (
                  <CoreItem
                    key={`value-${index}`}
                    value={value}
                    index={index}
                    state={activeCore}
                    setState={setActiveCore}
                    root={targetView}
                    translate={translations[value.key]}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            <h2 className="text-foreground text-4xl font-serif font-semibold text-center">
              {/* Our Core Values */}
              {translations.heading}
            </h2>
            <div className="flex flex-col justify-between gap-20">
              {coreValues.map((value, index) => (
                <CoreItemMobile
                  key={`core-mobile-${index}`}
                  value={value}
                  index={index}
                  translate={translations[value.key]}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

function CoreItem({ value, index, state, setState, root, translate }) {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, {
    root: root,
    amount: "all",
    once: false,
    margin: "45% 0px 45% 0px",
  });
  const Icon = value.icon;

  useEffect(() => {
    if (isInView) {
      setState(index);
    }
  }, [isInView]);

  return (
    <div
      className="relative h-full w-full p-4 flex flex-col justify-center items-center gap-5"
      ref={inViewRef}
      id={value.key}
    >
      <Icon className="absolute size-[80%] stroke-[0.6] text-primary-foreground opacity-15" />
      <q className="text-primary-foreground font-serif text-5xl italic text-center">
        {/* {value.description} */}
        {translate}
      </q>
    </div>
  );
}

function CoreItemMobile({ value, index, translate }) {
  const Icon = value.icon;

  return (
    <div
      className={cn(
        "w-full aspect-[3/4] md:aspect-video p-9 border border-primary rounded-2xl sticky overflow-hidden",
        (index + 1) % 2 === 0
          ? "bg-white text-primary"
          : "bg-primary text-white"
      )}
      style={{
        bottom: `${170 - index * 50}px`,
        zIndex: coreValues.length - index,
      }}
      key={`core-mobile-${index}`}
    >
      <div className="h-full w-full relative flex flex-col gap-16">
        <h3 className="text-3xl md:text-5xl font-semibold font-serif">
          {value.name}
        </h3>
        <q
          className={cn(
            "font-serif text-3xl md:text-4xl italic text-center md:w-2/3 md:mx-auto",
            (index + 1) % 2 === 0 ? "text-primary" : "text-primary-foreground"
          )}
        >
          {/* {value.description} */}
          {translate}
        </q>
        <Icon
          className={cn(
            "absolute -bottom-1/4 left-1/2 size-[80%] stroke-[0.6] opacity-15",
            (index + 1) % 2 === 0 ? "text-primary" : "text-primary-foreground"
          )}
        />
      </div>
    </div>
  );
}
