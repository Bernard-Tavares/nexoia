"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Msg = { id: string; text: string; fromMe: boolean };

export function ChatSection() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch("/api/getMessages");
      if (res.ok) {
        const data: Msg[] = await res.json();
        setMessages(data);
      }
    } catch (e) {
      console.error("fetchMessages:", e);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
    const iv = setInterval(fetchMessages, 3000);
    return () => clearInterval(iv);
  }, [fetchMessages]);

  useEffect(() => {
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    await fetch("/api/sendMessages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text: input, fromMe: true },
    ]);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="conhecer" className="flex flex-col h-[83vh] bg-gray-50">
      {/* Header */}
      <header className="p-4 border-b bg-white shadow-sm text-center font-semibold text-lg">
        Chat com a Nexo
      </header>

      {/* Chat area */}
      <main className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
              msg.fromMe
                ? "bg-blue-600 text-white self-end ml-auto"
                : "bg-white border text-gray-800 self-start mr-auto"
            }`}
          >
            <div className="font-medium mb-1">
              {msg.fromMe ? "Você" : "Atendimento"}
            </div>
            <div>{msg.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </main>

      {/* Input area */}
      <footer className="p-3 border-t bg-white flex gap-2">
        <Input
          placeholder="Escreva sua mensagem…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1"
        />
        <Button size="sm" onClick={sendMessage}>
          Enviar
        </Button>
      </footer>
    </section>
  );
}