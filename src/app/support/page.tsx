"use client";

import {
  BookOpen,
  Bot,
  GraduationCap,
  HelpCircle,
  MessageCircle,
  Search,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useRef, useState } from "react";
import { useAuth } from "@/components/auth-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const quickQuestions = [
  "How do I compare universities?",
  "What are the admission requirements for Stanford?",
  "Tell me about computer science programs",
  "How can I find scholarships?",
  "What's the difference between public and private universities?",
  "How do I prepare for college applications?",
];

const aiResponses: Record<string, string> = {
  "How do I compare universities?":
    "Great question! You can use our comparison feature by going to the 'Compare' section. There you can select up to 4 universities and compare them side-by-side across factors like tuition fees, acceptance rates, programs offered, student population, and more. You can also save your comparisons for later reference.",

  "What are the admission requirements for Stanford?":
    "Stanford University is highly competitive with an acceptance rate of about 4.3%. Generally, they look for: excellent academic performance (GPA 3.9+), strong standardized test scores (SAT 1470+ or ACT 33+), compelling essays, meaningful extracurricular activities, and strong letters of recommendation. Each program may have specific requirements, so I recommend checking their official admissions page for the most current information.",

  "Tell me about computer science programs":
    "Computer Science is one of the most popular and versatile fields! Top programs like Stanford, MIT, and UC Berkeley offer comprehensive curricula covering algorithms, software engineering, AI/ML, systems programming, and more. When choosing a program, consider factors like research opportunities, industry connections, internship programs, and specialization areas that align with your interests.",

  "How can I find scholarships?":
    "There are many scholarship opportunities available! Here are some tips: 1) Check with universities directly - many offer merit-based and need-based aid, 2) Use scholarship search engines like Fastweb or Scholarships.com, 3) Look into field-specific scholarships (STEM, arts, etc.), 4) Check with local organizations and community foundations, 5) Don't forget about federal financial aid - fill out your FAFSA!",

  "What's the difference between public and private universities?":
    "Great question! Public universities are funded by state governments and typically offer lower tuition for in-state students. They're often larger with more diverse student bodies. Private universities are funded through tuition, donations, and endowments. They typically have smaller class sizes, more resources per student, but higher tuition costs. Both can offer excellent education - it depends on your preferences and financial situation.",

  "How do I prepare for college applications?":
    "Start early! Here's a timeline: Junior year - take standardized tests, research universities, build your extracurricular profile. Senior year - write compelling essays, gather recommendation letters, submit applications by deadlines. Focus on: maintaining strong grades, developing leadership skills, pursuing meaningful activities you're passionate about, and crafting authentic essays that showcase your unique perspective.",
};

export default function SupportPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: `Hello${
        user ? ` ${user.name}` : ""
      }! I'm Uniscope AI, your educational assistant. I'm here to help you with questions about universities, admissions, courses, and navigating your educational journey. What would you like to know?`,
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    try {
      // Use dummy AI response instead of API call
      const dummyResponse =
        currentInput in aiResponses
          ? aiResponses[currentInput]
          : "Sorry, I don't have an answer for that right now. Please try another question.";

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: dummyResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error sending message:", error);

      // Fallback to local response if something unexpected happens
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'm having trouble connecting right now. Please try again in a moment, or visit our university profiles and community sections for more information!",
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Uniscope AI Assistant
                      <Badge variant="secondary" className="text-xs">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Online
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Your 24/7 educational support companion
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {message.sender === "ai" && (
                        <Avatar className="w-8 h-8">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-primary-foreground" />
                          </div>
                        </Avatar>
                      )}

                      <div
                        className={`max-w-[80%] ${
                          message.sender === "user" ? "order-1" : ""
                        }`}
                      >
                        <div
                          className={`rounded-lg p-3 ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground ml-auto"
                              : "bg-muted"
                          }`}
                        >
                          <p className="text-sm leading-relaxed break-words whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </div>
                        <div
                          className={`text-xs text-muted-foreground mt-1 ${
                            message.sender === "user"
                              ? "text-right"
                              : "text-left"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>

                      {message.sender === "user" && (
                        <Avatar className="w-8 h-8">
                          <AvatarImage
                            src={user?.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>
                            <User className="w-4 h-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <Avatar className="w-8 h-8">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </Avatar>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          />
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Input */}
              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about universities, admissions, or courses..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Questions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    Quick Questions
                  </CardTitle>
                  <CardDescription>
                    Click on any question to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {quickQuestions.map((question) => (
                    <Button
                      key={question}
                      variant="ghost"
                      className="w-full justify-start text-left h-auto p-3 text-sm"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Help Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />I can help with
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Search className="w-4 h-4 text-primary" />
                    University research & comparison
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Admission requirements & process
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    Course & program information
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    Financial aid & scholarships
                  </div>
                </CardContent>
              </Card>

              {/* Additional Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Need More Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/community">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Ask the Community
                    </Button>
                  </Link>
                  <Link href="/universities">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Browse Universities
                    </Button>
                  </Link>
                  <Link href="/compare">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Compare Options
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
