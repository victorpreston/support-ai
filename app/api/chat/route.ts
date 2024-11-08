import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

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

    // Create the stream with proper format
    const result = await streamText({
      model: openai("gpt-4o-mini"),
      system: SYSTEM_PROMPT,
      messages: messages,
    })

    // Return the streaming response
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(JSON.stringify({ error: "There was an error processing your request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }
}