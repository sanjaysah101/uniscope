import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    // Build conversation context
    const systemPrompt = `You are Uniscope AI, a helpful educational assistant specializing in university guidance, admissions, and academic planning. You help students make informed decisions about their education.

Key areas you excel in:
- University comparisons and recommendations
- Admission requirements and processes
- Course and program information
- Scholarship and financial aid guidance
- Academic planning and career advice
- Study abroad opportunities

Guidelines:
- Be encouraging and supportive
- Provide specific, actionable advice
- Reference real university data when possible
- Suggest using Uniscope's features (comparison tool, university profiles, community)
- Keep responses concise but informative
- If you don't know something specific, recommend official sources

Current conversation context: You're helping a student with their educational journey.`;

    const conversationMessages =
      conversationHistory?.map((msg: any) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.content,
      })) || [];

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      messages: [...conversationMessages, { role: "user", content: message }],
      // maxTokens: 300,
      temperature: 0.7,
    });

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("Chat API error:", error);

    // Fallback response
    const fallbackResponse =
      "I'm having trouble processing your request right now. Please try asking your question again, or visit our support page for more detailed assistance. You can also browse our university profiles or ask the community for help!";

    return NextResponse.json({ response: fallbackResponse });
  }
}
