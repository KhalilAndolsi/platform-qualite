import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Adjust import path as needed

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();
    await prisma.contact.create({
      data: {
        email,
        name,
        message,
        phone
      }
    })
    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
