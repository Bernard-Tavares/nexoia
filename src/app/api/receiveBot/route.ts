// src/app/api/receiveBot/route.ts
import { NextResponse } from "next/server";
import { addMessage } from "@/lib/messageStore";

export async function POST(request: Request) {
  const { text } = await request.json();
  addMessage({ id: Date.now().toString(), text, fromMe: false });
  console.log("🤖 receiveBot recebeu do n8n:", text);
  return NextResponse.json({ ok: true });
}
