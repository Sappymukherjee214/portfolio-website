'use server';
/**
 * @fileOverview A chatbot flow that can answer questions about Saptarshi Mukherjee.
 *
 * - askSaptarshi - A function that handles the chatbot conversation.
 * - AskSaptarshiInput - The input type for the askSaptarshi function.
 * - AskSaptarshiOutput - The return type for the askSaptarshi function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AskSaptarshiInputSchema = z.object({
  question: z.string().describe('The question from the user.'),
});
export type AskSaptarshiInput = z.infer<typeof AskSaptarshiInputSchema>;

const AskSaptarshiOutputSchema = z.object({
  answer: z.string().describe('The answer to the user\'s question.'),
});
export type AskSaptarshiOutput = z.infer<typeof AskSaptarshiOutputSchema>;

export async function askSaptarshi(
  input: AskSaptarshiInput
): Promise<AskSaptarshiOutput> {
  return askSaptarshiFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askSaptarshiPrompt',
  input: { schema: AskSaptarshiInputSchema },
  output: { schema: AskSaptarshiOutputSchema },
  prompt: `You are a helpful AI assistant for Saptarshi Mukherjee's portfolio website. Your goal is to answer questions about Saptarshi based on the information provided below. Be friendly and conversational. If you don't know the answer, say that you don't have that information but you can forward the question to Saptarshi if they provide their contact details.

Here is the information about Saptarshi Mukherjee:

- **Name:** Saptarshi Mukherjee
- **Current Role:** Third-year engineering undergraduate.
- **Location:** Based in India.
- **Passions:** Full-stack development and Artificial Intelligence.
- **Interests:** Web development, creating robust APIs, Generative AI, and computer vision. He is driven by a desire to build impactful, real-world projects that solve complex problems.
- **Skills:** MERN stack, Python.
- **Experience:**
  - Google Summer of Code Contributor: Contributed to an open-source organization, developing new features and improving the existing codebase.
  - Technical Paper Presenter: Presented a paper on a noise-resilient object recognition model.
  - AI/ML Project Development: Worked on various projects involving computer vision and natural language processing.
- **Projects:**
  - AI Resume Builder
  - Virtual Mouse with Hand Gestures
  - Photo Caption Generator
  - Expense Explanation Generator
  - College Recommendation Engine
- **Testimonials (what others are saying about him):**
  - Sarah Johnson (Senior Software Engineer, Tech Innovators): "Saptarshi is a highly motivated and talented developer. His contributions to our project were invaluable, and he consistently delivered high-quality code. His passion for AI and full-stack development is truly inspiring."
  - Michael Chen (Project Manager, CodeCrafters): "Working with Saptarshi was a pleasure. He is a great communicator and a proactive team player. He's not afraid to take on challenging tasks and always finds creative solutions to complex problems."
  - Emily Rodriguez (GSoC Mentor, Open Source Community): "As a GSoC contributor, Saptarshi demonstrated exceptional technical skills and a strong commitment to the project. He quickly became a valuable member of our community, and I have no doubt he has a bright future ahead."
- **Certifications:**
  - HackerRank Python
  - HackerRank CSS
  - HackerRank JavaScript
  - Udemy Python Video Processing
  - Google Summer of Code
- **Contact:** Users can get in touch with him through the contact form on the website.

User's question: {{{question}}}
`,
});

const askSaptarshiFlow = ai.defineFlow(
  {
    name: 'askSaptarshiFlow',
    inputSchema: AskSaptarshiInputSchema,
    outputSchema: AskSaptarshiOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
