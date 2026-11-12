"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  AlertTriangle,
  Send,
  Building2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  enquirySchema,
  type EnquiryInput,
  type EnquiryResponse,
} from "@/lib/enquiry-schema";

const businessTypes = [
  "Authorized Regional Distributor",
  "Super Stockist",
  "Wholesale Distributor",
  "Modern Retail / Supermarket",
  "HORECA (Hotel / Restaurant / Café)",
  "Institutional / Canteen Buyer",
  "Other Commercial Partner",
];

export function EnquiryForm({
  type = "distributor",
  product = "",
  title = "Partner with STAR AGRO FOODS",
  subtitle = "Direct commercial desk for STAMINA fruit juice distribution and trade inquiries.",
}: {
  type?: "contact" | "distributor" | "product" | "general";
  product?: string;
  title?: string;
  subtitle?: string;
}) {
  const form = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema) as any,
    defaultValues: {
      fullName: "",
      businessName: "",
      mobile: "",
      email: "",
      city: "",
      state: "",
      businessType: type === "distributor" ? "Authorized Regional Distributor" : "Wholesale Distributor",
      message: product ? `Inquiry regarding STAMINA ${product} supply and terms.` : "",
      enquiryType: type,
      product: product,
    },
  });

  const mutation = useMutation<EnquiryResponse, Error, EnquiryInput>({
    mutationFn: async (values: EnquiryInput) => {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => null)) as EnquiryResponse | null;

      if (!response.ok || !payload?.received) {
        throw new Error(
          payload?.message ||
            "Unable to submit your enquiry to the server. Please verify your details or contact us directly via WhatsApp."
        );
      }

      return payload;
    },
  });

  if (mutation.isSuccess && mutation.data) {
    return (
      <div
        className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-[#55B747]/30 text-center space-y-6"
        role="status"
        aria-live="polite"
      >
        <div className="w-16 h-16 bg-[#55B747]/15 text-[#55B747] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 size={36} className="text-[#55B747]" />
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 bg-[#55B747]/10 text-[#55B747] text-xs font-black uppercase tracking-widest rounded-full">
            ENQUIRY CONFIRMED & RECEIVED
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#17251D]">
            Thank You, {mutation.data.data?.fullName || "Partner"}!
          </h3>
          <p className="text-sm text-[#4E6056] max-w-lg mx-auto leading-relaxed">
            Your enquiry has been received and registered directly with the{" "}
            <strong>STAR AGRO FOODS Commercial Team</strong>.
          </p>
        </div>

        <div className="bg-[#FFF9ED] border border-[#E8DECC] rounded-2xl p-5 max-w-md mx-auto text-left space-y-2">
          <div className="flex items-center justify-between text-xs text-[#4E6056]">
            <span>Official Tracking Reference:</span>
            <span className="font-mono font-black text-[#173D2A] text-sm bg-white px-2.5 py-1 rounded-md border border-[#173D2A]/10">
              {mutation.data.reference}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs text-[#4E6056]">
            <span>Territory:</span>
            <span className="font-semibold text-[#17251D]">
              {mutation.data.data?.city}, {mutation.data.data?.state}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs text-[#4E6056]">
            <span>Business Category:</span>
            <span className="font-semibold text-[#17251D]">
              {mutation.data.data?.businessType}
            </span>
          </div>
        </div>

        <p className="text-xs text-[#4E6056] italic">
          A confirmation record has been logged. Our regional distribution representative will contact you within 24 business hours.
        </p>

        <button
          type="button"
          onClick={() => {
            mutation.reset();
            form.reset();
          }}
          className="btn-outline text-xs px-6 py-2.5"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  const { errors } = form.formState;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E8DECC] relative overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#FFC928]/20 to-transparent rounded-bl-full pointer-events-none" />

      <div className="relative mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 bg-[#FFF9ED] border border-[#FF7A1A]/20 px-3 py-1 rounded-full text-xs font-bold text-[#FF7A1A]">
          <Sparkles size={13} className="text-[#FFC928]" />
          <span>STAR AGRO FOODS • STAMINA JUICES</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17251D] tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-[#4E6056] max-w-xl">
          {subtitle}
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit((values: any) => mutation.mutate(values))}
        noValidate
        className="space-y-5"
      >
        <input type="hidden" {...form.register("enquiryType")} />
        <input type="hidden" {...form.register("product")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#17251D] uppercase tracking-wider">
              Full Name <span className="text-[#E63956]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                autoComplete="name"
                placeholder="e.g. Rajesh Sharma"
                {...form.register("fullName")}
                className={`w-full px-4 py-3 rounded-xl border bg-[#FFFDF8] text-sm text-[#17251D] placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? "border-[#E63956] focus:ring-[#E63956]/20"
                    : "border-[#E8DECC] focus:border-[#FF7A1A] focus:ring-[#FF7A1A]/20"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="text-xs text-[#E63956] font-medium mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Business / Firm Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#17251D] uppercase tracking-wider flex items-center justify-between">
              <span>Business / Firm Name</span>
              <span className="text-[10px] text-neutral-400 font-normal">Optional</span>
            </label>
            <div className="relative">
              <input
                type="text"
                autoComplete="organization"
                placeholder="e.g. Apex Beverages & Trading"
                {...form.register("businessName")}
                className="w-full px-4 py-3 rounded-xl border border-[#E8DECC] bg-[#FFFDF8] text-sm text-[#17251D] placeholder:text-neutral-400 focus:outline-none focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/20 transition-all"
              />
            </div>
            {errors.businessName && (
              <p className="text-xs text-[#E63956] font-medium mt-1">
                {errors.businessName.message}
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#17251D] uppercase tracking-wider">
              Mobile / WhatsApp Number <span className="text-[#E63956]">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="e.g. +91 98220 12345"
                {...form.register("mobile")}
                className={`w-full px-4 py-3 rounded-xl border bg-[#FFFDF8] text-sm text-[#17251D] placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.mobile
                    ? "border-[#E63956] focus:ring-[#E63956]/20"
                    : "border-[#E8DECC] focus:border-[#FF7A1A] focus:ring-[#FF7A1A]/20"
                }`}
              />
            </div>
            {errors.mobile && (
              <p className="text-xs text-[#E63956] font-medium mt-1">
                {errors.mobile.message}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#17251D] uppercase tracking-wider">
              Email Address <span className="text-[#E63956]">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                autoComplete="email"
                placeholder="e.g. rajesh@apexbeverages.com"
                {...form.register("email")}
                className={`w-full px-4 py-3 rounded-xl border bg-[#FFFDF8] text-sm text-[#17251D] placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? "border-[#E63956] focus:ring-[#E63956]/20"
                    : "border-[#E8DECC] focus:border-[#FF7A1A] focus:ring-[#FF7A1A]/20"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-[#E63956] font-medium mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* City */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#17251D] uppercase tracking-wider">
              City / District <span className="text-[#E63956]">*</span>
            </label>
            <input
              type="text"
              autoComplete="address-level2"
              placeholder="e.g. Jalgaon / Pune / Indore"
              {...form.register("city")}
              className={`w-full px-4 py-3 rounded-xl border bg-[#FFFDF8] text-sm text-[#17251D] placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                errors.city
                  ? "border-[#E63956] focus:ring-[#E63956]/20"
                  : "border-[#E8DECC] focus:border-[#FF7A1A] focus:ring-[#FF7A1A]/20"
              }`}
            />
            {errors.city && (
              <p className="text-xs text-[#E63956] font-medium mt-1">
                {errors.city.message}
              </p>
            )}
          </div>

          {/* State */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#17251D] uppercase tracking-wider">
              State <span className="text-[#E63956]">*</span>
            </label>
            <input
              type="text"
              autoComplete="address-level1"
              placeholder="e.g. Maharashtra, Gujarat, MP"
              {...form.register("state")}
              className={`w-full px-4 py-3 rounded-xl border bg-[#FFFDF8] text-sm text-[#17251D] placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                errors.state
                  ? "border-[#E63956] focus:ring-[#E63956]/20"
                  : "border-[#E8DECC] focus:border-[#FF7A1A] focus:ring-[#FF7A1A]/20"
              }`}
            />
            {errors.state && (
              <p className="text-xs text-[#E63956] font-medium mt-1">
                {errors.state.message}
              </p>
            )}
          </div>
        </div>

        {/* Business Type Selector */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#17251D] uppercase tracking-wider">
            Business Type / Role <span className="text-[#E63956]">*</span>
          </label>
          <select
            {...form.register("businessType")}
            className="w-full px-4 py-3 rounded-xl border border-[#E8DECC] bg-[#FFFDF8] text-sm text-[#17251D] focus:outline-none focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/20 transition-all"
          >
            <option value="" disabled>Select your business category</option>
            {businessTypes.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {errors.businessType && (
            <p className="text-xs text-[#E63956] font-medium mt-1">
              {errors.businessType.message}
            </p>
          )}
        </div>

        {/* Message / Requirements */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#17251D] uppercase tracking-wider">
            Inquiry Details & Proposed Territory <span className="text-[#E63956]">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your distribution reach, existing network, expected monthly volume, or any specific flavor preferences (STAMINA Mango, Litchi, Pink Guava, Pomegranate)..."
            {...form.register("message")}
            className={`w-full px-4 py-3 rounded-xl border bg-[#FFFDF8] text-sm text-[#17251D] placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all resize-none ${
              errors.message
                ? "border-[#E63956] focus:ring-[#E63956]/20"
                : "border-[#E8DECC] focus:border-[#FF7A1A] focus:ring-[#FF7A1A]/20"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-[#E63956] font-medium mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Mutation Error Notification */}
        {mutation.isError && (
          <div
            className="p-4 rounded-2xl bg-[#E63956]/10 border border-[#E63956]/30 flex items-start gap-3 text-xs text-[#E63956]"
            role="alert"
          >
            <AlertTriangle size={18} className="shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Submission Notice:</p>
              <p>{mutation.error.message}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF7A1A] hover:bg-[#E6660B] disabled:opacity-70 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-[#FF7A1A]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            {mutation.isPending ? (
              <>
                <LoaderCircle size={18} className="animate-spin text-white" />
                <span>Logging Enquiry Securely…</span>
              </>
            ) : (
              <>
                <span>Submit Distributor Enquiry</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>

          <p className="text-[11px] text-[#4E6056] text-center sm:text-right">
            Instant backend verification &bull; Reference logged directly
          </p>
        </div>
      </form>
    </div>
  );
}
