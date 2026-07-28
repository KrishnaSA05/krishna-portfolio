import React, { useState, useRef, useEffect, FormEvent } from "react";
import { MessageSquare, X, Send, User, Bot, Loader2, Zap } from "lucide-react";

// --- TYPE DEFINITIONS ---
interface ChatMessage {
  role: "user" | "bot";
  content: string;
  isToolCall?: boolean;
}

// Mock data representing a single message exchange
const initialMessages: ChatMessage[] = [
  {
    role: "bot",
    content:
      "Hello! I'm Krishna's AI Portfolio Assistant. I can answer questions about his skills, experience, and projects. What would you like to know?",
  },
];

/**
 * Main Chatbot Component for the Portfolio Website
 * Features a collapsible window controlled by a floating button.
 */
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Calls the /api/chat serverless function, which talks to Groq on the server
  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setIsLoading(true);

    const updatedMessages = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(updatedMessages);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: data.reply ?? "Sorry, I couldn't generate a response." },
      ]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const Message: React.FC<{ message: ChatMessage }> = ({ message }) => {
    const isBot = message.role === "bot";

    // Simple parsing for bolding keywords in the mock response
    // FIX: Removed duplicate 'key={index}' attribute from the strong tag.
    const formattedContent = message.content
      .split("**")
      .map((segment, index) =>
        index % 2 === 1 ? <strong key={index}>{segment}</strong> : segment
      );

    return (
      <div
        className={`flex items-start mb-4 ${
          isBot ? "justify-start" : "justify-end"
        }`}
      >
        {isBot && (
          <div className="p-2 mr-2 bg-primary rounded-full">
            <Bot className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
        <div
          className={`max-w-xs sm:max-w-md p-3 rounded-xl shadow-md transition-all duration-300 ${
            isBot
              ? "bg-popover text-popover-foreground rounded-tl-none"
              : "bg-primary text-primary-foreground rounded-br-none"
          }`}
        >
          {message.isToolCall && (
            <span className="text-xs text-primary mb-1 font-mono flex items-center">
              <Zap className="w-3 h-3 mr-1" /> Tool Used
            </span>
          )}
          <p className="text-sm">{formattedContent}</p>
        </div>
        {!isBot && (
          <div className="p-2 ml-2 bg-muted rounded-full">
            <User className="w-4 h-4 text-muted-foreground" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* 1. Chat Window (Collapsible Content) */}
      <div
        className={`bg-card rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out flex flex-col 
          ${isOpen ? "w-80 h-96 sm:w-96" : "w-0 h-0 p-0"}
        `}
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "scale(1)" : "scale(0.8)",
        }}
      >
        {/* Chat Header */}
        <div className="flex justify-between items-center p-3 bg-primary text-primary-foreground shadow-lg">
          <h2 className="text-lg font-semibold flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            AI Portfolio Assistant
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-primary/90 transition"
            aria-label="Close Chatbot"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-background">
          {messages.map((msg, index) => (
            <Message key={index} message={msg} />
          ))}
          <div ref={messagesEndRef} />

          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="p-2 mr-2 bg-primary rounded-full">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="p-3 bg-popover rounded-xl rounded-tl-none shadow-md">
                <Loader2 className="w-5 h-5 text-primary animate-spin" />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSendMessage}
          className="p-3 border-t border-border bg-card"
        >
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Krishna's skills or projects..."
              className="flex-1 px-3 py-2 border border-border rounded-lg focus:ring-primary focus:border-primary transition duration-150 text-sm bg-transparent text-foreground"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition duration-150 disabled:opacity-60"
              disabled={isLoading}
              aria-label="Send Message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* 2. Floating Open/Close Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90 transition duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-primary/30"
          aria-label="Open Chatbot"
        >
          <MessageSquare className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};

// To run this component in your Vite React App, you would import and use it like this:
// function App() {
//   return (
//     <main>
//       {/* Your main portfolio content goes here */}
//       <Chatbot />
//     </main>
//   );
// }

export default Chatbot;
