"use client";
import { cn } from "@/lib/utils";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CountrySelector, usePhoneInput } from "react-international-phone";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useMemo } from "react";
import { AtSign, Phone, Send } from "lucide-react";
import { z } from "zod";
import { useLocale, useTranslations } from "next-intl";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

export default function EmailSubs({ children, className, ...props }) {
  const t = useTranslations("page.contactUs.input");
  const locale = useLocale();

  const emailSubsFormSchema = useMemo(() => {
    return z.object({
      email: z.string().email({
        // message: lang.get("contact_us.form.email.error"),
        message: t("email.error.type"),
      }),
    });
  }, [locale]);

  const form = useForm({
    resolver: zodResolver(emailSubsFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    // router.post(route("contact-us.send"), values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full gap-2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full max-w-md">
              <FormControl>
                <Input
                  placeholder="john.doe@example.com"
                  {...field}
                  type="email"
                  className="text-primary rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="rounded-lg capitalize"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {/* {lang.get("contact_us.form.send_label")} */}
          {/* Send */}
          {/* {t("send")} */}
          Subscribe
          <Send />
        </Button>
      </form>
    </Form>
  );
}
