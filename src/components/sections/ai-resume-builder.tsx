
'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeading } from '@/components/ui/section';
import { generateTailoredResume } from '@/app/actions';
import { Loader2, ClipboardCopy, Check, FileText, Lightbulb, Star, Award, TrendingUp, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';


const formSchema = z.object({
  resume: z.string().min(50, { message: "Please enter your current resume content (min. 50 characters)." }),
  jobDescription: z.string().min(50, { message: "Please enter the job description (min. 50 characters)." }),
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

type TailorResumeToJobDescriptionOutput = z.infer<
  typeof TailorResumeToJobDescriptionOutputSchema
>;

export function AiResumeBuilder() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<TailorResumeToJobDescriptionOutput | null>(null);
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { resume: '', jobDescription: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnalysisResult(null);
    const result = await generateTailoredResume(values);
    setIsLoading(false);

    if (result.success && result.data) {
      setAnalysisResult(result.data);
      toast({ title: 'Success', description: 'Your AI-powered resume analysis is ready!' });
    } else {
      toast({ variant: 'destructive', title: 'Error', description: result.error });
    }
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    toast({ description: 'Copied to clipboard!' });
    setTimeout(() => setHasCopied(false), 2000);
  }

  const ResultSection = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
        {icon}
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );

  return (
    <Section id="ai-resume-builder">
      <SectionHeading>AI Resume Builder</SectionHeading>
      <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto -mt-8 mb-12">
        Paste your resume and a job description to receive a tailored version, a matching score, keyword analysis, and actionable suggestions for improvement—all powered by AI.
      </p>
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Your Resume</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste your resume content here..."
                          className="min-h-[250px] text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="jobDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Job Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste the job description here..."
                          className="min-h-[250px] text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Enhance My Resume
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="mt-8 flex justify-center">
            <Loader2 className="h-12 w-12 text-primary animate-spin" />
        </div>
      )}

      {analysisResult && (
        <div className="mt-12 space-y-8">
          <h3 className="text-3xl font-bold text-center font-headline">Analysis Results</h3>
          
          <ResultSection title="Overall Match Score" icon={<Award className="w-6 h-6 text-primary"/>}>
            <div className="flex items-center gap-4">
                <Progress value={analysisResult.analysis.matchScore} className="w-full h-4" />
                <span className="text-2xl font-bold text-primary">{analysisResult.analysis.matchScore}%</span>
            </div>
            <p className="text-muted-foreground mt-2">{analysisResult.analysis.overallFeedback}</p>
          </ResultSection>

          <div className="grid md:grid-cols-2 gap-8">
            <ResultSection title="Missing Keywords" icon={<Star className="w-6 h-6 text-primary"/>}>
              <div className="flex flex-wrap gap-2">
                {analysisResult.analysis.missingKeywords.map(keyword => <Badge key={keyword} variant="secondary">{keyword}</Badge>)}
              </div>
            </ResultSection>
            <ResultSection title="Suggestions for Improvement" icon={<Lightbulb className="w-6 h-6 text-primary"/>}>
                <ul className="space-y-2 text-muted-foreground">
                    {analysisResult.analysis.suggestions.map((suggestion, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <TrendingUp className="w-4 h-4 mt-1 shrink-0 text-primary" />
                            <span>{suggestion}</span>
                        </li>
                    ))}
                </ul>
            </ResultSection>
          </div>

          <ResultSection title="Your Enhanced Resume" icon={<FileText className="w-6 h-6 text-primary"/>}>
            <div className="relative">
              <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10" onClick={() => handleCopy(analysisResult.tailoredResume)} aria-label="Copy to clipboard">
                  {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4" />}
              </Button>
              <pre className="whitespace-pre-wrap font-body text-sm bg-secondary p-4 rounded-md max-h-[500px] overflow-auto">{analysisResult.tailoredResume}</pre>
            </div>
          </ResultSection>
        </div>
      )}
    </Section>
  );
}
