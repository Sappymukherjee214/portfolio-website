'use client';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { askChatbot } from '@/app/actions';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const result = await askChatbot({ question: inputValue });
    setIsLoading(false);

    if (result.success && result.data) {
      const botMessage: Message = { text: result.data.answer, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } else {
      const errorMessage: Message = { text: result.error || 'Something went wrong.', sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <Button onClick={() => setIsOpen(!isOpen)} size="icon" className="rounded-full h-16 w-16 shadow-lg">
          {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-full max-w-sm">
          <div className="glass-card rounded-lg border shadow-2xl flex flex-col h-[60vh]">
            <div className="flex items-center gap-4 p-4 border-b">
              <Bot className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-lg">AI Assistant</h3>
                <p className="text-sm text-muted-foreground">Ask me anything about Saptarshi!</p>
              </div>
            </div>
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                    {msg.sender === 'bot' && <Bot className="h-6 w-6 shrink-0 text-primary" />}
                    <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-end gap-2">
                    <Bot className="h-6 w-6 shrink-0 text-primary" />
                    <div className="rounded-lg px-4 py-2 bg-secondary">
                        <Loader2 className="h-5 w-5 animate-spin"/>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="pr-12"
                  disabled={isLoading}
                />
                <Button
                  size="icon"
                  className="absolute top-1/2 right-1 -translate-y-1/2 h-8 w-8"
                  onClick={handleSendMessage}
                  disabled={isLoading}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
