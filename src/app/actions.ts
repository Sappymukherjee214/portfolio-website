
'use server';
import { tailorResumeToJobDescription, TailorResumeToJobDescriptionInput } from '@/ai/flows/ai-resume-builder-tailor-to-job-description';

export async function generateTailoredResume(input: TailorResumeToJobDescriptionInput) {
    try {
        const result = await tailorResumeToJobDescription(input);
        return { success: true, data: result };
    } catch (error) {
        console.error('Error tailoring resume:', error);
        return { success: false, error: 'Failed to tailor resume. Please try again later.' };
    }
}
