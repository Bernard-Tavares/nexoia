import type { NextApiRequest, NextApiResponse } from "next";

// Aqui você precisará integrar com onde as mensagens recebidas
// pelo seu webhook foram armazenadas (banco, arquivo, memória, Redis…).
// Exemplo de stub retornando um array vazio:
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO: buscar do seu "store" ou do n8n
  const messages: any[] = [
    // { id: "1", text: "Olá, em que posso ajudar?", from: "bot" }
  ];
  res.status(200).json(messages);
}
