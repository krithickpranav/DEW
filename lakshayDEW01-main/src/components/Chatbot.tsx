import React, { useState } from 'react';
import { Bot, X, Send, Phone, Mail, Package } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Deepam Engineering Works. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    { id: 1, text: "Container Pricing", icon: Package },
    { id: 2, text: "Lorry Cabins", icon: Package },
    { id: 3, text: "Contact Info", icon: Phone },
    { id: 4, text: "Get Quote", icon: Mail }
  ];

  const handleQuickReply = (text: string) => {
    handleSendMessage(text);
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';

      if (messageText.toLowerCase().includes('price') || messageText.toLowerCase().includes('pricing')) {
        botResponse = "Our container prices vary based on size and specifications. For accurate pricing:\n\n📞 Call: +91 9442262444\n📧 Email: info@deepamengineering.com\n\nOr click 'Get Quote' to request a detailed quotation.";
      } else if (messageText.toLowerCase().includes('cabin') || messageText.toLowerCase().includes('lorry')) {
        botResponse = "We manufacture various lorry cabin types:\n\n✓ Straight Type Cabin\n✓ Aerodynamic Cabin\n✓ Karur Grill Cabin\n✓ Centre Air Glass Cabin\n✓ Curved Air Cutter\n\nWould you like more details about any specific type?";
      } else if (messageText.toLowerCase().includes('contact')) {
        botResponse = "📍 Address: No: 317/3, Salem Main Road, Tiruchengode, Tamil Nadu 637209\n\n📞 Phone: +91 9442262444 / +91 7418698082\n\n📧 Email: info@deepamengineering.com\n\n⏰ Hours: Mon-Sat: 9 AM - 6 PM";
      } else if (messageText.toLowerCase().includes('quote')) {
        botResponse = "I'd be happy to help you get a quote! Please provide:\n\n1. Product type (Container/Cabin)\n2. Size/Model\n3. Quantity\n4. Any special requirements\n\nOr visit our Contact page for a detailed quote form.";
      } else {
        botResponse = "Thank you for your message! For immediate assistance:\n\n📞 Call: +91 9442262444\n💬 WhatsApp: Click the WhatsApp button\n📧 Email: info@deepamengineering.com\n\nHow else can I help you?";
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group relative flex items-center justify-center"
          aria-label="Open chat"
        >
          <Bot size={24} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
          style={{ position: 'fixed' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Deepam Engineering</h3>
                <p className="text-xs text-white/80">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.isBot
                      ? 'bg-white text-slate-800 shadow-sm'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-slate-400' : 'text-white/70'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="p-3 bg-white border-t border-slate-200">
              <p className="text-xs text-slate-500 mb-2">Quick options:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleQuickReply(reply.text)}
                    className="flex items-center space-x-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium text-slate-700 transition-colors"
                  >
                    <reply.icon size={14} />
                    <span>{reply.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-2 rounded-full hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inputValue.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
