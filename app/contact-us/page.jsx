import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import OpImage from "@/components/OpImage";
import ContactUsForm from "@/components/page/contact-us/ContactUsForm";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function ContactUs({ children, className, ...props }) {
  const t = useTranslations("page.contactUs");
  return (
    <Section className={"mt-24 lg:mt-0 lg:pt-3"}>
      <Container
        className={
          "grid grid-cols-1 md:grid-cols-[.8fr_1fr] bg-secondary p-3 md:p-8 rounded-3xl gap-5"
        }
      >
        <div className="p-6 flex flex-col gap-10 relative aspect-[4/3] md:aspect-auto">
          <OpImage
            src="/img/contents/contact-us-bg.webp"
            alt="Contact Us"
            className="absolute top-0 left-0 h-full w-full rounded-2xl"
          />
          <h1 className="font-medium sm:text-lg lg:text-2xl lg:leading-loose relative text-white">
            <span className="font-semibold text-xl sm:text-3xl lg:text-4xl font-serif">
              {/* {lang.get("contact_us.heading")} */}
              {/* Got Questions? */}
              {t("heading")}
            </span>
            <br />
            {/* {lang.get("contact_us.subheading")} */}
            {/* We have the answers. Let&apos;s work together! */}
            {t("subheading")}
          </h1>
        </div>
        <ContactUsForm />
      </Container>
    </Section>
  );
}
