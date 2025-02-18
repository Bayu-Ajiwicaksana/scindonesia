import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ContactUsForm from "@/components/page/contact-us/ContactUsForm";
import { cn } from "@/lib/utils";

export default function ContactUs({ children, className, ...props }) {
  return (
    <Section className={"pt-3"}>
      <Container
        className={
          "grid grid-cols-1 md:grid-cols-[.8fr_1fr] bg-secondary p-3 md:p-8 rounded-3xl gap-5"
        }
      >
        <div className="pt-6 flex flex-col gap-10">
          <h1 className="font-medium sm:text-lg lg:text-2xl lg:leading-loose">
            <span className="font-semibold text-xl sm:text-3xl lg:text-4xl text-primary">
              {/* {lang.get("contact_us.heading")} */}
              Got Questions?
            </span>
            <br />
            {/* {lang.get("contact_us.subheading")} */}
            We have the answers. Let&apos;s work together!
          </h1>
          <img
            src="/img/contents/contact-us.webp"
            alt="Contact Us"
            className="w-full max-w-[300px] self-center"
          />
        </div>
        <ContactUsForm />
      </Container>
    </Section>
  );
}
