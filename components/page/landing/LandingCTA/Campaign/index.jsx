import { cn } from "@/lib/utils";
import SubsInput from "./SubsInput";

export default function Campaign({ isActive, setCTA, className, ...props }) {
  return (
    <div
      className={cn(
        "min-h-[70vh] rounded-3xl grid grid-cols-[1fr_.75fr] gap-5",
        className
      )}
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold font-serif">
          Kampanye H.E.E.E.S <br />
          (Health, Education, Economy, Environment, Social & Culture)
        </h2>
        <div className="space-y-5">
          <p className="text-lg text-zinc-300">
            Bergabunglah dalam gerakan perubahan dengan mendukung kampanye
            H.E.E.E.S, yang mencakup Kesehatan, Pendidikan, Ekonomi, Lingkungan,
            serta Sosial dan Budaya. Kampanye ini bertujuan untuk membangun
            komunitas yang lebih sehat, cerdas, mandiri, berkelanjutan, dan
            harmonis.
          </p>
          <div>
            <h3 className="inline-flex gap-2 items-start text-xl font-semibold font-serif">
              {/* <Mail className="size-5 mt-1" /> */}
              <span>Dapatkan Wawasan & Update Eksklusif!</span>
            </h3>
            <p className="text-base text-zinc-300">
              Kami mengundang Anda untuk berlangganan{" "}
              <strong>newsletter eksklusif</strong> kami melalui{" "}
              <strong>email atau WhatsApp</strong>. Dapatkan informasi terbaru,
              wawasan inspiratif, dan peluang berkontribusi dalam berbagai
              inisiatif sosial yang berdampak nyata.
            </p>
          </div>
          <SubsInput />
        </div>
      </div>
      <div className="relative">
        <div className="sticky top-8 bg-secondary w-full aspect-[6/5] rounded-2xl"></div>
      </div>
    </div>
  );
}
