import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check } from "lucide-react";
import ContactUsBtn from "@/components/button/ContactUsBtn";

const channels = [
  {
    key: "swakelola",
    title: "Swakelola",
    description:
      "Sirkular Center Indonesia (SCI) akan mengelola dan menjalankan program sesuai dengan visi, misi, serta kebutuhan bisnis Anda. Program ini dirancang agar selaras dengan nilai perusahaan Anda, dijalankan oleh tim profesional, serta memiliki dampak yang terukur dan berkelanjutan.",
  },
  {
    key: "partial-program",
    title: "Partial Program",
    description:
      "Kemitraan berbasis kolaborasi, di mana SCI dan perusahaan Anda bekerja sama dalam bagian tertentu dari program sosial yang telah berjalan. Dengan pendekatan ini, Anda dapat berkontribusi dalam aspek yang paling relevan dengan bisnis Anda.",
  },
  {
    key: "charity-program",
    title: "Charity Program",
    description:
      "Salurkan bantuan Anda untuk mendukung program-program sosial yang membutuhkan pendanaan guna mencapai dampak yang lebih luas. Dengan kontribusi ini, Anda turut berperan dalam menciptakan perubahan yang nyata bagi masyarakat.",
  },
  {
    key: "long-term-program",
    title: "Long Term Program",
    description:
      "Kemitraan jangka panjang untuk membangun solusi yang lebih mendalam dan berkelanjutan. Program ini dirancang untuk menciptakan dampak sosial yang sistematis dan bertahan lama melalui strategi yang lebih terstruktur.",
  },
];

export default function Partnerships({ className, ...props }) {
  return (
    <div
      className={cn(
        "min-h-[70vh] rounded-3xl grid grid-cols-[1fr_.75fr] gap-5",
        className
      )}
      {...props}
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold font-serif">
          Partnerships – Bersama, Kita Ciptakan Dampak yang Lebih Besar
        </h2>
        <div className="space-y-5">
          <p className="text-lg text-zinc-300">
            Kami membuka peluang kemitraan bagi para Business Owners & Institusi
            yang ingin berkolaborasi dengan Sirkular Center Indonesia (SCI)
            dalam menciptakan dampak sosial yang nyata dan berkelanjutan.
            Kolaborasi ini dirancang sebagai gerbang awal untuk membangun kerja
            sama strategis yang memberikan manfaat bagi kedua belah pihak.
          </p>
          <div className="space-y-4">
            <h3 className="inline-flex gap-2 items-start text-xl font-semibold font-serif">
              {/* <Mail className="size-5 mt-1" /> */}
              <span>Pilih Kanal Kemitraan yang Sesuai dengan Tujuan Anda:</span>
            </h3>
            <div className="space-y-2">
              {channels.map((channel, i) => (
                <Alert
                  key={`partnerships-${i}`}
                  className="bg-transparent border-primary-light text-zinc-300 [&>svg]:text-green-500"
                >
                  <Check className="h-4 w-4 " />
                  <AlertTitle className="text-green-500">
                    {channel.title}
                  </AlertTitle>
                  <AlertDescription>{channel.description}</AlertDescription>
                </Alert>
              ))}
            </div>
          </div>
          <ContactUsBtn />
        </div>
      </div>
      <div className="relative">
        <div className="sticky top-8 bg-secondary w-full aspect-[6/5] rounded-2xl"></div>
      </div>
    </div>
  );
}
