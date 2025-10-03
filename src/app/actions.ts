
'use server';
import { tailorResumeToJobDescription, TailorResumeToJobDescriptionInput } from '@/ai/flows/ai-resume-builder-tailor-to-job-description';
import { askSaptarshi, AskSaptarshiInput } from '@/ai/flows/chatbot';
import { z } from 'zod';

export async function generateTailoredResume(input: TailorResumeToJobDescriptionInput) {
    try {
        const result = await tailorResumeToJobDescription(input);
        return { success: true, data: result };
    } catch (error) {
        console.error('Error tailoring resume:', error);
        return { success: false, error: 'Failed to tailor resume. Please try again later.' };
    }
}

export async function askChatbot(input: AskSaptarshiInput) {
    try {
        const result = await askSaptarshi(input);
        return { success: true, data: result };
    } catch (error) {
        console.error('Error with chatbot:', error);
        return { success: false, error: 'The chatbot is currently unavailable. Please try again later.' };
    }
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(formData: z.infer<typeof contactFormSchema>) {
    // This is a server action.
    // TODO: When Firebase is ready, add code here to save the formData to Firestore.
    // For now, we'll just simulate a successful submission.
    console.log('Contact form submitted:', formData);

    try {
        // In a real app, you would save to a database here.
        // For example: await db.collection('contacts').add(formData);
        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return { success: false, error: 'Failed to send message. Please try again later.' };
    }
}
