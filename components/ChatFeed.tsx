import { Message } from "@/components/Chatbot";
import { useEffect, useRef } from "react";

interface ChatFeedProps {
  messages: Message[];
}

export function ChatFeed({ messages }: ChatFeedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages, ref])

  return (
    <div ref={ref} className="flex flex-col gap-4 p-4">
      {messages.map((message, index) => {
        switch (message.role) {
          case "user":
            return (
              <div key={index} className="text-white font-semibold text-sm self-end bg-sky-400 rounded-md px-4 py-2">
                {message.text}
              </div>
            );
          case "assistant":
            return (
              <div key={index} className="text-black font-semibold text-sm self-start bg-gray-200 rounded-md px-4 py-2">
                {message.text}
              </div>
            );
        }
      })}
    </div>
  );
}