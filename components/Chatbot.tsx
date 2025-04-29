"use client";

import { Button } from "@/components/ui/button";
import { PopoverClose } from "@radix-ui/react-popover";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCallback, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatFeed } from "@/components/ChatFeed";

export interface Message {
  text: string;
  role: "user" | "assistant";
}

const fakeTextResponses = [
  "I'm not sure I understand what you mean.",
  "Can you please give me some more information?",
  "I'll do my best to help you out.",
  "I'm happy to help you.",
  "I'm here to help you.",
  "I'm not sure what you mean.",
  "Can you please explain?",
  "I'd be happy to help you with that.",
  "I'm not sure I can help you with that.",
  "I'll try my best.",
  "I'll do my best to find the answer.",
  "I'm not sure.",
  "I'll look into it.",
  "I'm not sure what you're asking.",
  "Can you please give me more context?",
  "I'm here to help you, but I need more information.",
  "I'm not sure what you mean by that.",
  "I'll try to help you.",
  "I'll do my best to give you the information you need.",
  "I'm not sure what you're getting at.",
  "Can you please rephrase the question?",
  "I'm not sure what you're talking about.",
  "I'll try to help you out.",
  "I'll do my best to help you.",
  "I'm not sure what you're referring to.",
];

interface ChatbotProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.RefObject<HTMLDivElement>;
}

export function Chatbot({ ref, ...props }: ChatbotProps) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentElapsedSeconds, setCurrentElapsedSeconds] = useState(0);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const handleReset = useCallback(() => {
    setCurrentElapsedSeconds(0);
    setChatMessages([]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElapsedSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = useCallback(() => {
    if (!currentMessage.trim()) return;
    setChatMessages(prev => [...prev, { text: currentMessage, role: "user" }]);
    setCurrentMessage("");
    // Wait a second and then respond with a random response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { text: fakeTextResponses[Math.floor(Math.random() * fakeTextResponses.length)], role: "assistant" }]);
    }, 1000);
  }, [currentMessage, setCurrentMessage, setChatMessages]);

  return (
    <Card ref={ref} {...props} className="shadow-none w-dvw h-dvh sm:w-[400px] sm:h-[600px] overflow-clip translate-y-[98px] sm:translate-y-0">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>
          Chatbot
          <CardDescription>
            Elapsed time: {currentElapsedSeconds} seconds
          </CardDescription>
        </CardTitle>
        <div>
          <Button onClick={handleReset} variant="ghost" size="icon" className="cursor-pointer" role="img" aria-label="Reset">🔄</Button>
          <PopoverClose asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer" role="img" aria-label="Close">❌</Button>
          </PopoverClose>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-4 border-t-[1px] min-h-0">
        <ScrollArea className="flex-1 min-h-0">
          <ChatFeed messages={chatMessages} />
        </ScrollArea>
        <div className="flex gap-2">
          <Input className="flex-1" autoFocus placeholder="Type your message..." value={currentMessage} onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} onChange={(e) => setCurrentMessage(e.currentTarget.value)} />
          <Button onClick={handleSendMessage} className="cursor-pointer p-x-2 bg-sky-400" aria-label="Send">Send</Button>
        </div>
      </CardContent>
    </Card >
  );
}