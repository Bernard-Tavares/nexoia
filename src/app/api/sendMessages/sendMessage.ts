import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }
  const { text } = req.body;

  // Exemplo: encaminha ao webhook do n8n
  await fetch("https://n8n.ianexo.com.br/webhook/nexo-site/recebe-mensagem-chat-site", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  res.status(200).json({ ok: true });
}
