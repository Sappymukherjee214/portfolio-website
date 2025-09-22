// src/components/sections/HeroSection.tsx
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    // Section container to center everything
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-8 max-w-4xl">
        
        {/* "Available for work" Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1 mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-sm font-medium text-slate-700">
            Available for work!
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Hi, I am an aspiring <span className="text-pink-600">Software</span> developer
          <br />
          building user-friendly web applications.
        </h1>

        {/* Sub-headline */}
        <p className="mt-4 max-w-xl mx-auto text-lg text-white">
          A passionate software developer based in the India, skilled in the MERN stack and other applications like Python, dedicated to writing clean, efficient code while continuously expanding my technical knowledge.
        </p>

        {/* Buttons and Links Group */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          
          {/* "Get in touch" Primary Button */}
          <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-700 transition-colors">
            Get in touch
            <ArrowRight size={20} />
          </button>
          
          {/* "Download Resume" Secondary Button */}
          <a
            href="/Saptarshi Mukherjee - Software Engineer.pdf" // Make sure your resume is in the /public folder
            download
            className="inline-flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-full font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Download Resume
            <Download size={20} />
          </a>
          
          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/saptarshi-mukherjee-096191263/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 inline-flex items-center justify-center border border-slate-300 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/Sappymukherjee214"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 inline-flex items-center justify-center border border-slate-300 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}