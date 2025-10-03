
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
import { Card, CardContent } from '@/components/ui/card';
import { Section, SectionHeading } from '@/components/ui/section';
import { generateTailoredResume } from '@/app/actions';
import { Loader2, ClipboardCopy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  resume: z.string().min(50, { message: "Please enter your current resume content (min. 50 characters)." }),
  jobDescription: z.string().min(50, { message: "Please enter the job description (min. 50 characters)." }),
});

export function AiResumeBuilder() {
  const [isLoading, setIsLoading] = useState(false);
  const [tailoredResume, setTailoredResume] = useState('');
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { resume: '', jobDescription: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTailoredResume('');
    const result = await generateTailoredResume(values);
    setIsLoading(false);

    if (result.success && result.data) {
      setTailoredResume(result.data.tailoredResume);
      toast({ title: 'Success', description: 'Your AI-powered resume is ready!' });
    } else {
      toast({ variant: 'destructive', title: 'Error', description: result.error });
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(tailoredResume);
    setHasCopied(true);
    toast({ description: 'Copied to clipboard!' });
    setTimeout(() => setHasCopied(false), 2000);
  }

  return (
    <Section id="ai-resume-builder">
      <SectionHeading>AI Resume Builder</SectionHeading>
      <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto -mt-8 mb-12">
        Paste your resume and a job description below to get a tailored version crafted by AI.
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
                    Generating...
                  </>
                ) : (
                  'Tailor My Resume'
                )}
              </Button>
            </form>
          </Form>

          {(isLoading || tailoredResume) && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 font-headline">Your Tailored Resume:</h3>
              <Card className="relative bg-secondary min-h-[250px]">
                <CardContent className="p-6">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                       <Loader2 className="h-8 w-8 text-primary animate-spin" />
                    </div>
                  ) : (
                    <>
                     <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={handleCopy} aria-label="Copy to clipboard">
                        {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4" />}
                      </Button>
                      <pre className="whitespace-pre-wrap font-body text-sm">{tailoredResume}</pre>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </Section>
  );
}
