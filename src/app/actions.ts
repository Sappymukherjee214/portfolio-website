
'use server';
import { tailorResumeToJobDescription, TailorResumeToJobDescriptionInput } from '@/ai/flows/ai-resume-builder-tailor-to-job-description';
import { askSaptarshi, AskSaptarshiInput } from '@/ai/flows/chatbot';

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
