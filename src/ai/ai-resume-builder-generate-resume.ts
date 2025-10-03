'use server';
/**
 * @fileOverview AI-powered resume generator.
 *
 * - generateResume - A function that generates a resume based on user input.
 * - GenerateResumeInput - The input type for the generateResume function.
 * - GenerateResumeOutput - The return type for the generateResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateResumeInputSchema = z.object({
  name: z.string().describe('The name of the person for whom to generate the resume.'),
  jobTitle: z.string().describe('The job title of the person.'),
  experience: z.string().describe('The experience of the person.'),
  skills: z.string().describe('The skills of the person.'),
  education: z.string().describe('The education of the person.'),
  contactInformation: z.string().describe('The contact information of the person.'),
});
export type GenerateResumeInput = z.infer<typeof GenerateResumeInputSchema>;

const GenerateResumeOutputSchema = z.object({
  resume: z.string().describe('The generated resume.'),
});
export type GenerateResumeOutput = z.infer<typeof GenerateResumeOutputSchema>;

export async function generateResume(input: GenerateResumeInput): Promise<GenerateResumeOutput> {
  return generateResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateResumePrompt',
  input: {schema: GenerateResumeInputSchema},
  output: {schema: GenerateResumeOutputSchema},
  prompt: `You are a professional resume writer. Generate a resume for the following person:

Name: {{{name}}}
Job Title: {{{jobTitle}}}
Experience: {{{experience}}}
Skills: {{{skills}}}
Education: {{{education}}}
Contact Information: {{{contactInformation}}}

Please generate a professional-looking resume.`,
});

const generateResumeFlow = ai.defineFlow(
  {
    name: 'generateResumeFlow',
    inputSchema: GenerateResumeInputSchema,
    outputSchema: GenerateResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
