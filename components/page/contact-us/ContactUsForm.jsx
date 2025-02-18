"use client";

import "react-international-phone/style.css";
import { cn } from "@/lib/utils";
import { PhoneNumberUtil } from "google-libphonenumber";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CountrySelector, usePhoneInput } from "react-international-phone";

import { Button } from "@/Components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { useEffect } from "react";
import { Send, SendHorizonal } from "lucide-react";
// import { router, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";
import { z } from "zod";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const contactUsFormSchema = z.object({
  full_name: z
    .string()
    .min(2, {
      // message: lang.get("contact_us.form.full_name.error.min_max"),
      message: "Minimum 2 characters",
    })
    .max(50, {
      // message: lang.get("contact_us.form.full_name.error.min_max"),
      message: "Maximum 50 characters",
    })
    .regex(
      /^[a-zA-Z]+(\s[a-zA-Z]+)*$/,
      // lang.get("contact_us.form.full_name.error.regex")
      "Cannot starts and end with whitespace"
    )
    .refine((val) => val.trim() !== "", {
      // message: lang.get("contact_us.form.full_name.error.min_max"),
      message: "Minimum 2 and maximum 50 characters",
    }),
  email: z.string().email({
    // message: lang.get("contact_us.form.email.error"),
    message: "Please input a valid email address",
  }),
  phone_number: z.string().refine((val) => isPhoneValid(val), {
    // message: lang.get("contact_us.form.phone_number.error"),
    message: "Please input a valid phone number",
  }),
  message: z
    .string()
    .min(2, {
      // message: lang.get("contact_us.form.message.error"),
      message: "Minimum 2 and maximum 50 characters",
    })
    .max(250),
});

export default function ContactUsForm({ children, className, ...props }) {
  // const {
  //   flash: { message },
  // } = usePage().props;
  // const flashMessage = message ? JSON.parse(message) : "";

  const form = useForm({
    resolver: zodResolver(contactUsFormSchema),
    mode: "onChange",
    defaultValues: {
      full_name: "",
      email: "",
      phone_number: "+62",
      message: "",
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

  // useEffect(() => {
  //   if (flashMessage) {
  //     toast(flashMessage, { id: "contact-us" });
  //     if (flashMessage.status) {
  //       form.reset();
  //     }
  //   }
  // }, [flashMessage.version]);

  return (
    <div
      className={cn("p-3 md:p-6 bg-background rounded-xl", className)}
      {...props}
    >
      {/* {console.log(form.getValues("phone_number"))} */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {/* {lang.get("contact_us.form.full_name.label")}: */}
                  Full Name:
                </FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {/* {lang.get("contact_us.form.email.label")}: */}
                  Email Address:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="john.doe@example.com"
                    {...field}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                    {/* {lang.get("contact_us.form.phone_number.label")} / WhatsApp: */}
                    Phone / WhatsApp number:
                  </FormLabel>
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
                        ref={inputRef}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
                            control={form.control}
                            name="phone_number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Nomor Telepon / WhatsApp:
                                    </FormLabel>
                                    <div className="flex gap-2">
                                        <Select
                                            ref={inputRef}
                                            value={country.iso2}
                                            onValueChange={setCountry}
                                        >
                                            <SelectTrigger className="w-fit justify-start gap-2 [&>span]:line-clamp-none [&>span]:flex [&>span]:w-full [&>span]:me-5">
                                                <SelectValue>
                                                    <FlagImage
                                                        iso2={country.iso2}
                                                        style={{
                                                            marginRight: "8px",
                                                            display:
                                                                "inline-flex",
                                                        }}
                                                    />
                                                    <span className="text-gray-500 inline-flex">
                                                        +{country.dialCode}
                                                    </span>
                                                </SelectValue>
                                            </SelectTrigger>
                                            <CountrySelector
                                                defCountries={defCountries}
                                            />
                                        </Select>
                                        <FormControl>
                                            <Input
                                                placeholder="082291414942"
                                                {...field}
                                                type="tel"
                                                required
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between">
                  {/* <span>{lang.get("contact_us.form.message.label")}</span> */}
                  <span>Your Message:</span>
                  <span className="text-xs text-neutral-400">
                    {field.value.length}/250
                  </span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    // placeholder={lang.get(
                    //   "contact_us.form.message.placeholder"
                    // )}
                    placeholder="Enter your message here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="rounded-lg capitalize w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {/* {lang.get("contact_us.form.send_label")} */}
            Send
            <Send />
          </Button>
        </form>
      </Form>
    </div>
  );
}

// const CountrySelector = memo(function CountrySelector({ defCountries }) {
//     return (
//         <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
//             {defCountries.map((c) => {
//                 const country = parseCountry(c);
//                 return (
//                     <SelectItem
//                         key={country.iso2}
//                         value={country.iso2}
//                         className="flex"
//                     >
//                         <FlagImage
//                             iso2={country.iso2}
//                             style={{
//                                 marginRight: "8px",
//                                 display: "inline-flex",
//                                 width: "fit-content",
//                             }}
//                         />
//                         <span className="me-2">{country.name}</span>
//                         <span className="text-gray-500">
//                             +{country.dialCode}
//                         </span>
//                     </SelectItem>
//                 );
//             })}
//         </SelectContent>
//     );
// });
