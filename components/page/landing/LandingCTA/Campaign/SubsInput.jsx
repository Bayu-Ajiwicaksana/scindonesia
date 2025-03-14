import { AtSign, Phone } from "lucide-react";
import EmailSubs from "./EmailSubs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhoneSubs from "./PhoneSubs";

export default function SubsInput() {
  return (
    <Tabs defaultValue="email-subs" className="">
      <TabsList className="gap-5 justify-around h-fit">
        <TabsTrigger
          value="email-subs"
          className="gap-1 data-[state=active]:text-red-600"
        >
          <AtSign className="size-4" /> <span>Email</span>
        </TabsTrigger>
        <TabsTrigger
          value="phone-subs"
          className="gap-1 data-[state=active]:text-green-600"
        >
          <Phone className="size-4" /> <span>WhatsApp</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="email-subs">
        <EmailSubs />
      </TabsContent>
      <TabsContent value="phone-subs">
        <PhoneSubs />
      </TabsContent>
    </Tabs>
  );
}
