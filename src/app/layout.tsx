import "../styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { CustomCursor } from "../components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Saptarshi Mukherjee | Portfolio",
  description: "Personal portfolio of Saptarshi Mukherjee, showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={`${inter.variable} bg-gray-950 text-white`}
      >
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
          <iframe src='https://my.spline.design/claritystream-4gsyekR72uUAu0z5IUtAOQHd/' frameBorder='0' width='100%' height='100%'></iframe>
        </div>
        <main>{children}</main>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}