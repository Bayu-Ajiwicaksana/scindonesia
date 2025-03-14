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

export default function PhoneSubs({ children, className, ...props }) {
  const t = useTranslations("page.contactUs.input");
  const locale = useLocale();

  const phoneSubsFormSchema = useMemo(() => {
    return z.object({
      phone_number: z.string().refine((val) => isPhoneValid(val), {
        // message: lang.get("contact_us.form.phone_number.error"),
        message: t("phone.error.type"),
      }),
    });
  }, [locale]);

  const form = useForm({
    resolver: zodResolver(phoneSubsFormSchema),
    mode: "onChange",
    defaultValues: {
      phone_number: "+62",
    },
  });

  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "id",
      value: "+62",
      charAfterDialCode: "",
      onChange: ({ phone }) => {
        // console.log(phone);
        form.setValue("phone_number", phone);
        form.trigger("phone_number");
      },
    });

  function onSubmit(values) {
    console.log(values);
    // router.post(route("contact-us.send"), values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <div>
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field, fieldState }) => (
              <FormItem>
                <div className="flex gap-1">
                  <CountrySelector
                    selectedCountry={country.iso2}
                    onSelect={(country) => setCountry(country.iso2)}
                    renderButtonWrapper={({ children, rootProps }) => (
                      <Button {...rootProps} variant="outline" type="button">
                        {children}
                      </Button>
                    )}
                  />
                  <FormControl>
                    <Input
                      // placeholder={`${lang.get(
                      //   "contact_us.form.phone_number.placeholder"
                      // )}: +6281234567890`}
                      placeholder={`Example: +6281234567890`}
                      {...field}
                      type="tel"
                      onChange={handlePhoneValueChange}
                      className="text-primary-accent-darker"
                      ref={inputRef}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
