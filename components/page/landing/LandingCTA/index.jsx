"use client";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { HandCoins, Handshake, Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Campaign from "./Campaign";
import Partnerships from "./Partnerships";
import Donation from "./Donation";

const ctas = [
  {
    key: "campaign-heees",
    title: "Kampanye H.E.E.E.S",
    subtitle: "(Health, Education, Economy, Environment, Social & Culture)",
    description:
      "Bergabunglah dalam gerakan perubahan dengan mendukung kampanye H.E.E.E.S, yang mencakup Kesehatan, Pendidikan, Ekonomi, Lingkungan, serta Sosial dan Budaya. Kampanye ini bertujuan untuk membangun komunitas yang lebih sehat, cerdas, mandiri, berkelanjutan, dan harmonis.",
    points: [
      {
        title: "Dapatkan Wawasan & Update Eksklusif!",
        description:
          "Kami mengundang Anda untuk berlangganan newsletter eksklusif kami melalui email atau WhatsApp. Dapatkan informasi terbaru, wawasan inspiratif, dan peluang berkontribusi dalam berbagai inisiatif sosial yang berdampak nyata.",
        icon: Mail,
      },
    ],
    cta: "Gabung sekarang dan jadilah bagian dari perubahan!",
  },
  {
    key: "partnerships",
    title: "Partnerships",
    subtitle: "Bersama, Kita Ciptakan Dampak yang Lebih Besar",
    description:
      "Kami membuka peluang kemitraan bagi para Business Owners & Institusi yang ingin berkolaborasi dengan Sirkular Center Indonesia (SCI) dalam menciptakan dampak sosial yang nyata dan berkelanjutan. Kolaborasi ini dirancang sebagai gerbang awal untuk membangun kerja sama strategis yang memberikan manfaat bagi kedua belah pihak.",
    points: [
      {
        title: "Dapatkan Wawasan & Update Eksklusif!",
        description:
          "Kami mengundang Anda untuk berlangganan newsletter eksklusif kami melalui email atau WhatsApp. Dapatkan informasi terbaru, wawasan inspiratif, dan peluang berkontribusi dalam berbagai inisiatif sosial yang berdampak nyata.",
        icon: Mail,
      },
    ],
    cta: "Gabung sekarang dan jadilah bagian dari perubahan!",
  },
  {
    key: "campaign-heees",
    title:
      "Kampanye H.E.E.E.S (Health, Education, Economy, Environment, Social & Culture)",
    description:
      "Bergabunglah dalam gerakan perubahan dengan mendukung kampanye H.E.E.E.S, yang mencakup Kesehatan, Pendidikan, Ekonomi, Lingkungan, serta Sosial dan Budaya. Kampanye ini bertujuan untuk membangun komunitas yang lebih sehat, cerdas, mandiri, berkelanjutan, dan harmonis.",
    points: [
      {
        title: "Dapatkan Wawasan & Update Eksklusif!",
        description:
          "Kami mengundang Anda untuk berlangganan newsletter eksklusif kami melalui email atau WhatsApp. Dapatkan informasi terbaru, wawasan inspiratif, dan peluang berkontribusi dalam berbagai inisiatif sosial yang berdampak nyata.",
        icon: Mail,
      },
    ],
    cta: "Gabung sekarang dan jadilah bagian dari perubahan!",
  },
];

export default function LandingCTA() {
  return (
    <Section className={"px-0"}>
      <Container className={"bg-zinc-800 p-8"}>
        {/* <motion.div className="w-full flex">
          <LayoutGroup>
            <Campaign
              isActive={activeCTA === "campaign-heees"}
              setCTA={setActiveCTA}
            />
            <Partnerships
              isActive={activeCTA === "partnerships"}
              setCTA={setActiveCTA}
            />
            <Donation
              isActive={activeCTA === "donation"}
              setCTA={setActiveCTA}
            />
          </LayoutGroup>
        </motion.div> */}
        <Tabs defaultValue="campaign-heees" className="w-full">
          <TabsList className="gap-5 w-full justify-around *:w-full h-fit">
            <TabsTrigger
              value="campaign-heees"
              className=" text-lg data-[state=active]:bg-primary-accent-darker data-[state=active]:text-primary-foreground"
            >
              Kampanye H.E.E.E.S
            </TabsTrigger>
            <TabsTrigger
              value="partnerships"
              className="gap-1 text-lg data-[state=active]:bg-primary-accent-darker data-[state=active]:text-primary-foreground"
            >
              <Handshake className="size-4" /> <span>Partnerships</span>
            </TabsTrigger>
            <TabsTrigger
              value="donation"
              className="gap-1 text-lg data-[state=active]:bg-primary-accent-darker data-[state=active]:text-primary-foreground"
            >
              <HandCoins className="size-4" />
              <span>Donation</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="campaign-heees" className="mt-8">
            <Campaign />
          </TabsContent>
          <TabsContent value="partnerships" className="mt-8">
            <Partnerships />
          </TabsContent>
          <TabsContent value="donation" className="mt-8">
            <Donation />
          </TabsContent>
        </Tabs>
      </Container>
    </Section>
  );
}
