
'use server';

/**
 * @fileOverview This file defines a Genkit flow for tailoring a resume to a specific job description.
 *
 * - tailorResumeToJobDescription - A function that tailors the resume to the job description.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorResumeToJobDescriptionInputSchema = z.object({
  resume: z
    .string()
    .min(50)
    .describe('The resume content to be tailored.'),
  jobDescription: z.string().min(50).describe('The job description to tailor the resume to.'),
});

const TailorResumeToJobDescriptionOutputSchema = z.object({
  tailoredResume: z.string().describe('The tailored resume content, formatted in plain text.'),
  analysis: z.object({
    matchScore: z.number().int().min(0).max(100).describe('A score from 0-100 indicating how well the resume matches the job description.'),
    missingKeywords: z.array(z.string()).describe('A list of important keywords from the job description that are missing from the resume.'),
    suggestions: z.array(z.string()).describe('A list of actionable suggestions to improve the resume for this specific job application.'),
    overallFeedback: z.string().describe('A brief, overall summary of the resume\'s strengths and weaknesses for this job.'),
  }).describe('A detailed analysis of the resume against the job description.'),
});

const tailorResumeToJobDescriptionPrompt = ai.definePrompt({
  name: 'tailorResumeToJobDescriptionPrompt',
  input: {schema: TailorResumeToJobDescriptionInputSchema},
  output: {schema: TailorResumeToJobDescriptionOutputSchema},
  prompt: `You are an expert resume writer and career coach. Your task is to analyze a resume against a job description and provide a comprehensive enhancement.

**Analysis Steps:**

1.  **Tailor the Resume:** Rewrite the resume to perfectly align with the job description. Emphasize the most relevant skills and experiences. Use strong action verbs and quantify achievements wherever possible. The output should be a complete, professional resume in plain text format.
2.  **Calculate Match Score:** On a scale of 0-100, calculate a "match score" representing how well the original resume aligns with the job description.
3.  **Identify Missing Keywords:** Extract crucial keywords, skills, and technologies from the job description that are absent from the resume.
4.  **Provide Actionable Suggestions:** Offer a list of specific, actionable suggestions for improving the resume. These should go beyond just adding keywords and might include rephrasing bullet points, highlighting different projects, or changing the summary.
5.  **Give Overall Feedback:** Write a concise summary of the resume's strengths and weaknesses for this role.

**Input:**

Resume:
{{{resume}}}

Job Description:
{{{jobDescription}}}

**Output:**

Provide the full response in the required JSON format with all fields populated.`,
});

const tailorResumeToJobDescriptionFlow = ai.defineFlow(
  {
    name: 'tailorResumeToJobDescriptionFlow',
    inputSchema: TailorResumeToJobDescriptionInputSchema,
    outputSchema: TailorResumeToJobDescriptionOutputSchema,
  },
  async input => {
    const {output} = await tailorResumeToJobDescriptionPrompt(input);
    return output!;
  }
);

// This is the only export from this file.
export async function tailorResumeToJobDescription(
  input: z.infer<typeof TailorResumeToJobDescriptionInputSchema>
): Promise<z.infer<typeof TailorResumeToJobDescriptionOutputSchema>> {
  return tailorResumeToJobDescriptionFlow(input);
}
