import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ClipboardCheck, Goal } from "lucide-react";
import LinkBtn from "@/components/button/LinkBtn";

export default function Donation({ isActive, setCTA, className, ...props }) {
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
          Donasi – Bersama, Kita Bisa Membuat Perubahan Nyata
        </h2>
        <div className="space-y-5">
          <p className="text-lg text-zinc-300">
            Kami percaya bahwa setiap kontribusi, sekecil apa pun, dapat membawa
            dampak besar bagi mereka yang membutuhkan. Melalui program donasi,
            Anda dapat mendukung berbagai inisiatif sosial yang sedang berjalan,
            membantu komunitas yang membutuhkan, dan berkontribusi dalam
            menciptakan perubahan yang lebih baik.
          </p>
          <div className="space-y-4">
            <h3 className="inline-flex gap-2 items-start text-xl font-semibold font-serif">
              {/* <Mail className="size-5 mt-1" /> */}
              <span>
                Dukung program yang saat ini membutuhkan bantuan pendanaan dan
                wujudkan dampak nyata!
              </span>
            </h3>
            <div className="space-y-2">
              <Alert className="bg-transparent border-primary-light text-zinc-300 [&>svg]:text-green-500">
                <Goal className="h-4 w-4 " />
                <AlertTitle className="text-green-500">
                  Setiap donasi yang Anda berikan akan digunakan secara
                  transparan dan tepat sasaran.
                </AlertTitle>
              </Alert>
              <Alert className="bg-transparent border-primary-light text-zinc-300 [&>svg]:text-green-500">
                <ClipboardCheck className="h-4 w-4 " />
                <AlertTitle className="text-green-500">
                  Dapatkan laporan perkembangan dari program yang Anda dukung.
                </AlertTitle>
              </Alert>
            </div>
          </div>
          <LinkBtn>Donasi</LinkBtn>
        </div>
      </div>
      <div className="relative">
        <div className="sticky top-8 bg-secondary w-full aspect-[6/5] rounded-2xl"></div>
      </div>
    </div>
  );
}
