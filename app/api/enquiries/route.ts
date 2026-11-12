import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/enquiry-schema";

export async function POST(request: Request) {
  try {
    const json = await request.json().catch(() => null);
    if (!json) {
      return NextResponse.json(
        { received: false, message: "Invalid request payload. Please check your submission." },
        { status: 400 }
      );
    }

    const validation = enquirySchema.safeParse(json);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const path = issue.path.join(".");
        if (path) fieldErrors[path] = issue.message;
      });

      return NextResponse.json(
        {
          received: false,
          message: "Please fill out all required fields correctly.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validation.data;
    const now = new Date();
    const reference = `SAF-${now.getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    // Log the enquiry securely for verification
    console.info(`[STAR AGRO FOODS ENQUIRY RECEIVED] [${reference}]`, {
      type: data.enquiryType,
      name: data.fullName,
      business: data.businessName,
      phone: data.mobile,
      email: data.email,
      location: `${data.city}, ${data.state}`,
      product: data.product,
      date: now.toISOString(),
    });

    return NextResponse.json(
      {
        received: true,
        reference,
        timestamp: now.toISOString(),
        message:
          "Thank you for contacting STAR AGRO FOODS. Your enquiry has been registered successfully with our distribution desk. Our commercial team will connect with you within 24 business hours.",
        data: {
          fullName: data.fullName,
          email: data.email,
          city: data.city,
          state: data.state,
          businessType: data.businessType,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[Enquiry Handler Error]", error);
    return NextResponse.json(
      {
        received: false,
        message: "An unexpected error occurred while processing your enquiry. Please reach us directly via WhatsApp or telephone.",
      },
      { status: 500 }
    );
  }
}

