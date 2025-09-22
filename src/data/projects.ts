import { Project } from "@/types/project";

// src/data/projects.ts
export const projectsData: Project[] = [
  {
    title: "AI Photo Caption Generator",
    description: "A web application that uses AI to generate creative captions for your social media posts, saving you time and boosting engagement.",
    tags: ["Python", "Streamlit", "Gemini API"],
    imageUrl: "/projects/Screenshot 2025-09-21 202912.png",
    link: "https://photo-caption-generator-ufrt2zmmfcalamdgavjuik.streamlit.app/"
  },
  {
    title: "Facebook Fake Profile Detection Tool",
    description: "A tool that automatically identifies and flags fake or suspicious Facebook profiles using advanced AI and behavioral analysis.",
    tags: ["Python", "TensorFlow", "OpenCV", "Flask"],
    imageUrl: "/projects/Screenshot 2025-09-21 203308.png",
    link: "https://facebook-fake-profile-detction-tool.vercel.app/"
  },
  {
    title: "AI Resume Builder",
    description: "Generates optimized resumes based on job descriptions using AI.",
    tags: ["React.js", "Typescript", "Tailwind CSS"],
    imageUrl: "/projects/Screenshot 2025-09-21 203647.png",
    link: "https://roaring-stardust-9b8a0b.netlify.app/"
  },
  {
    title: "Virtual Mouse using Hand Gestures",
    description: "An innovative project that allows you to control your computer's cursor using hand gestures captured through your webcam.",
    tags: ["Python", "OpenCV", "MediaPipe"],
    imageUrl: "/projects/virtual-mouse.png",
    link: "https://github.com/Sappymukherjee214/virtual-mouse-keyboard.git"
  },
];