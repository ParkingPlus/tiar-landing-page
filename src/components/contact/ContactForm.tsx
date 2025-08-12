"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { countries } from "@/data/countries";
import { primaryNeeds, lookingFor, hearAboutUs } from "@/data/contactOptions";

const formSchema = z.object({
  primaryNeed: z.string().min(1, "Primary need is required."),
  lookingFor: z.string().min(1, "This field is required."),
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().min(1, "Phone number is required."),
  companyName: z.string().min(1, "Company name is required."),
  country: z.string().min(1, "Country is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  howDidYouHear: z.string().min(1, "This field is required."),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type FormData = z.infer<typeof formSchema>;

// IMPORTANT: Replace with your actual Web3Forms access key
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botField, setBotField] = useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        primaryNeed: "",
        lookingFor: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        country: "",
        message: "",
        howDidYouHear: "",
        terms: false,
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simple honeypot: if filled, treat as spam
    if (botField.trim().length > 0) {
      setIsSubmitting(false);
      toast.error("Submission blocked. Please try again.");
      return;
    }

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY || "");
    formData.append("subject", "New Contact Form Submission from Tiar");
    formData.append("from_name", "Tiar Contact Form");
    formData.append("replyto", data.email);

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(`Something went wrong: ${result.message}`);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate aria-describedby="contact-form-description">
        <p id="contact-form-description" className="sr-only">Contact sales form. All fields marked with * are required.</p>
        {/* Honeypot field - hidden from users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="companyWebsite">Company Website</label>
          <input
            id="companyWebsite"
            name="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Need */}
            <div className="space-y-2">
                <Label htmlFor="primaryNeed">Primary Need*</Label>
                <Controller
                    control={control}
                    name="primaryNeed"
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger id="primaryNeed">
                                <SelectValue placeholder="Select your primary need" />
                            </SelectTrigger>
                            <SelectContent>
                                {primaryNeeds.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors.primaryNeed && <p className="text-red-500 text-sm">{errors.primaryNeed.message}</p>}
            </div>

            {/* Looking For */}
            <div className="space-y-2">
                <Label htmlFor="lookingFor">I&apos;m looking for...*</Label>
                 <Controller
                    control={control}
                    name="lookingFor"
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger id="lookingFor">
                                <SelectValue placeholder="Select what you're looking for" />
                            </SelectTrigger>
                            <SelectContent>
                                {lookingFor.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors.lookingFor && <p className="text-red-500 text-sm">{errors.lookingFor.message}</p>}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* First Name */}
            <div className="space-y-2">
                <Label htmlFor="firstName">First Name*</Label>
                <Input id="firstName" {...register("firstName")} placeholder="John" aria-invalid={!!errors.firstName} aria-describedby={errors.firstName ? "firstName-error" : undefined} />
                {errors.firstName && <p id="firstName-error" className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
                <Label htmlFor="lastName">Last Name*</Label>
                <Input id="lastName" {...register("lastName")} placeholder="Doe" aria-invalid={!!errors.lastName} aria-describedby={errors.lastName ? "lastName-error" : undefined} />
                {errors.lastName && <p id="lastName-error" className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Email */}
            <div className="space-y-2">
                <Label htmlFor="email">Business Email*</Label>
                <Input id="email" type="email" {...register("email")} placeholder="john.doe@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                {errors.email && <p id="email-error" className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number*</Label>
                <Input id="phoneNumber" type="tel" {...register("phoneNumber")} placeholder="+62 (555) 123-4567" aria-invalid={!!errors.phoneNumber} aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined} />
                {errors.phoneNumber && <p id="phoneNumber-error" className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div className="space-y-2">
                <Label htmlFor="companyName">Company Name*</Label>
                <Input id="companyName" {...register("companyName")} placeholder="Your Company Inc." aria-invalid={!!errors.companyName} aria-describedby={errors.companyName ? "companyName-error" : undefined} />
                {errors.companyName && <p id="companyName-error" className="text-red-500 text-sm">{errors.companyName.message}</p>}
            </div>
            
            {/* Country */}
            <div className="space-y-2">
                <Label htmlFor="country">Country*</Label>
                <Controller
                    control={control}
                    name="country"
                    render={({ field }) => (
                         <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger id="country">
                                <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                                {countries.map((country) => (
                                    <SelectItem key={country.code} value={country.name}>
                                        {country.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
            </div>
        </div>
        
        {/* Message */}
        <div className="space-y-2">
            <Label htmlFor="message">Message*</Label>
            <Textarea id="message" {...register("message")} placeholder="Please describe your needs..." aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
            {errors.message && <p id="message-error" className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        {/* How did you hear about us? */}
        <div className="space-y-2">
            <Label htmlFor="howDidYouHear">How did you hear about us?*</Label>
             <Controller
                control={control}
                name="howDidYouHear"
                render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger id="howDidYouHear">
                            <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                            {hearAboutUs.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            />
            {errors.howDidYouHear && <p className="text-red-500 text-sm">{errors.howDidYouHear.message}</p>}
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center space-x-2">
             <Controller
                control={control}
                name="terms"
                render={({ field }) => (
                    <Checkbox
                        id="terms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                    />
                )}
            />
            <Label htmlFor="terms" className="text-sm">
                I accept the <a href="/terms" className="underline">Terms and Conditions</a>
            </Label>
        </div>
         {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}


        <Button type="submit" className="w-full bg-brand-500 text-white hover:bg-brand-600 transition-colors hover:translate-y-0.5" aria-busy={isSubmitting} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Contact Sales"}
        </Button>
      </form>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
    </>
  );
}
