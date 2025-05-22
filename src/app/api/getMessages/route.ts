// src/app/api/getMessages/route.ts
import { NextResponse } from "next/server";
import { getMessages } from "@/lib/messageStore";

export async function GET() {
  return NextResponse.json(getMessages());
}