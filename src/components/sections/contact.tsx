
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Section, SectionHeading } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Download, Send, Loader2, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import { submitContactForm } from '@/app/actions';
import { useState } from 'react';
import { SiDiscord, SiCredly } from '@icons-pack/react-simple-icons';


const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const result = await submitContactForm(values);
    setIsLoading(false);

    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: 'Thanks for reaching out. I will get back to you soon.',
      });
      form.reset();
    } else {
        toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: result.error,
        });
    }
  }

  return (
    <Section id="contact">
      <SectionHeading>Contact Me</SectionHeading>
      <div className="max-w-xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                        </>
                    ) : (
                        <>
                            <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                    )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="mt-8 flex justify-center gap-2 flex-wrap">
          <Button variant="outline" asChild>
            <Link href="https://github.com/Sappymukherjee214" target="_blank">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://www.linkedin.com/in/saptarshi-mukherjee-096191263" target="_blank">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Link>
          </Button>
           <Button variant="outline" asChild>
            <Link href="#" target="_blank">
              <Facebook className="mr-2 h-5 w-5" /> Facebook
            </Link>
          </Button>
           <Button variant="outline" asChild>
            <Link href="#" target="_blank">
              <Instagram className="mr-2 h-5 w-5" /> Instagram
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#" target="_blank">
              <SiDiscord className="mr-2 h-5 w-5" /> Discord
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#" target="_blank">
              <SiCredly className="mr-2 h-5 w-5" /> Credly
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#" target="_blank">
              <Youtube className="mr-2 h-5 w-5" /> YouTube
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resume.pdf" download="Saptarshi-Mukherjee-Resume.pdf" target="_blank">
              <Download className="mr-2 h-5 w-5" /> Resume
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
