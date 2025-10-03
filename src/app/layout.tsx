
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Saptarshi Mukherjee Portfolio',
  description: 'Personal portfolio website for Saptarshi Mukherjee, a passionate Software Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-70">
            <iframe
                src='https://my.spline.design/claritystream-d963339474700d1487f5d68b92b95c9a/'
                frameBorder='0'
                width='100%'
                height='100%'
            ></iframe>
            </div>
            {children}
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
