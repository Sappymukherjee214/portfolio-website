
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("container py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  className?: string;
  children: ReactNode;
};

export function SectionHeading({ className, children }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
        <h2 className={cn("font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl", className)}>
        {children}
        </h2>
    </div>
  );
}
