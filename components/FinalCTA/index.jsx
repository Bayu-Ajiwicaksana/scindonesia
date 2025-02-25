import { cn } from "@/lib/utils";
import Section from "../layout/Section";
import Container from "../layout/Container";
import { Button } from "../ui/button";

export default function FinalCTA({
  // heading,
  // subheading,
  // btnLabel,
  children,
  className,
  ...props
}) {
  return (
    <Section className={cn("", className)} {...props}>
      <Container className={"flex flex-col items-center gap-5"}>
        {/* <h2>{heading}</h2>
        <p>{subheading}</p>
        <Button>Contact</Button> */}
        {children}
      </Container>
    </Section>
  );
}

export function CTAHeading({ children, className, ...props }) {
  return (
    <h2
      className={cn(
        "text-3xl text-primary-accent-darker font-semibold font-serif text-center"
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
export function CTASubheading({ children, className, ...props }) {
  return (
    <p className={cn("text-lg text-center w-3/4 italic")} {...props}>
      {children}
    </p>
  );
}
export function CTABtn({ children, className, ...props }) {
  return <Button {...props}>{children}</Button>;
}
