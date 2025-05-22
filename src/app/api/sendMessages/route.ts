// src/app/api/sendMessages/route.ts
import { NextResponse } from "next/server";
import { addMessage } from "@/lib/messageStore";

const SEND_URL =
  "https://n8n.ianexo.com.br/webhook/nexo-site/recebe-mensagem-chat-site";

export async function POST(request: Request) {
  const { text } = await request.json();
  // 1) registra localmente
  addMessage({ id: Date.now().toString(), text, fromMe: true });
  console.log("📨 sendMessages recebeu:", text);

  // 2) encaminha para o seu n8n
  const res = await fetch(SEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  console.log("↩️ resposta do n8n:", await res.text());

  return NextResponse.json({ ok: true });
}
