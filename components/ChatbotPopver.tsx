"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Chatbot } from "./Chatbot";

export function ChatbotPopover() {
  return (
    <Popover>
      <PopoverTrigger className="data-[state=open]:invisible sm:data-[state=open]:visible" asChild>
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-6 right-6 z-50 bg-sky-400 hover:bg-sky-500 cursor-pointer rounded-full w-16 h-16 flex items-center justify-center"
          aria-label="Open Chatbot"
        >
          <span role="img" aria-label="Chat">💬</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent asChild side="top" sideOffset={10} align="end">
        <Chatbot />
      </PopoverContent>
    </Popover>
  );
}