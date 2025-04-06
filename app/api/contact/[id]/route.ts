import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await request.json();
    const updatedContact = await prisma.contact.update({
      where: { id },
      data: {
        read: body.read,
      },
    });

    return NextResponse.json({ contact: updatedContact }, { status: 200 });
  } catch (error) {
    console.error(`Error updating contact ${id}:`, error);
    return NextResponse.json(
      { error: "Failed to update contact" },
      { status: 500 }
    );
  }
}
