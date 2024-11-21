import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

// Define the system prompt for the support AI
const SYSTEM_PROMPT = `
You are SupportAI, a helpful customer support assistant.
Your goal is to provide accurate, friendly, and concise responses to customer inquiries.
If you don't know the answer to a question, acknowledge that and offer to connect the customer with a human agent.
Always maintain a professional and empathetic tone.
`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Create the stream
    const { textStream } = await streamText({
      model: openai("gpt-4o"),
      system: SYSTEM_PROMPT,
      prompt: messages
        .map((message: any) => {
          return message.role === "user" ? message.content : `Assistant: ${message.content}`
        })
        .join("\n"),
    })

    // Return the stream
    return new Response(textStream)
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "There was an error processing your request" }, { status: 500 })
  }
}

