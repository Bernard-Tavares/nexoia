// src/lib/messageStore.ts
export type Msg = {
  id: string;
  text: string;
  fromMe: boolean;
};

// memória volátil: reinicia sempre que o servidor for reiniciado
const MESSAGES: Msg[] = [];

export function addMessage(msg: Msg) {
  MESSAGES.push(msg);
}

export function getMessages(): Msg[] {
  return MESSAGES;
}