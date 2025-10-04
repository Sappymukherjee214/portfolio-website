'use client';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { askChatbot } from '@/app/actions';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const suggestedQuestions = [
    "What are Saptarshi's main skills?",
    "Tell me about his projects.",
    "What is his most recent experience?",
    "How can I contact him?",
];


export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
        // Add a welcome message when the chatbot is opened for the first time
        setMessages([
            { text: "Hi there! I'm Saptarshi's AI assistant. Ask me anything about his skills, projects, or experience.", sender: 'bot' }
        ]);
    }
  }, [isOpen]);

  useEffect(() => {
    // Auto-scroll to the bottom
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = (messageText || inputValue).trim();
    if (textToSend === '' || isLoading) return;

    const userMessage: Message = { text: textToSend, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const result = await askChatbot({ question: textToSend });
    
    if (result.success && result.data) {
      const botMessage: Message = { text: result.data.answer, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } else {
      const errorMessage: Message = { text: result.error || 'Sorry, something went wrong. Please try again.', sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    }
    setIsLoading(false);
  };
  
  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      <div className="fixed bottom-8 left-8 z-50">
        <Button onClick={() => setIsOpen(!isOpen)} size="icon" className="rounded-full h-16 w-16 shadow-lg">
          {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
        </Button>
      </div>

      <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 left-8 z-50 w-full max-w-sm"
        >
          <div className="glass-card rounded-lg border shadow-2xl flex flex-col h-[60vh]">
            <div className="flex items-center gap-4 p-4 border-b">
              <Bot className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-lg">AI Assistant</h3>
                <p className="text-sm text-muted-foreground">Ask me anything about Saptarshi!</p>
              </div>
            </div>
            <ScrollArea className="flex-1" ref={scrollAreaRef}>
              <div className="p-4 space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                    {msg.sender === 'bot' && <Bot className="h-6 w-6 shrink-0 text-primary" />}
                    <div className={`rounded-lg px-4 py-2 max-w-[85%] ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                      <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-end gap-2">
                    <Bot className="h-6 w-6 shrink-0 text-primary" />
                    <div className="rounded-lg px-4 py-2 bg-secondary flex items-center gap-2">
                        <span className="h-2 w-2 bg-primary/50 rounded-full animate-pulse delay-0"></span>
                        <span className="h-2 w-2 bg-primary/50 rounded-full animate-pulse delay-150"></span>
                        <span className="h-2 w-2 bg-primary/50 rounded-full animate-pulse delay-300"></span>
                    </div>
                  </div>
                )}
                 {!isLoading && messages.length > 0 && messages[messages.length-1].sender === 'user' && (
                    <div className="flex items-end gap-2">
                        <Bot className="h-6 w-6 shrink-0 text-primary" />
                        <div className="rounded-lg px-4 py-2 bg-secondary flex items-center gap-2">
                            <span className="h-2 w-2 bg-primary/50 rounded-full animate-pulse delay-0"></span>
                            <span className="h-2 w-2 bg-primary/50 rounded-full animate-pulse delay-150"></span>
                            <span className="h-2 w-2 bg-primary/50 rounded-full animate-pulse delay-300"></span>
                        </div>
                    </div>
                )}
                 {!isLoading && messages.length === 1 && (
                     <div className="pt-4 flex flex-wrap gap-2">
                        {suggestedQuestions.map((q) => (
                            <Button key={q} variant="outline" size="sm" onClick={() => handleSuggestedQuestion(q)}>
                                {q}
                            </Button>
                        ))}
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
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
