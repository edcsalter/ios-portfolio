import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const easeInOutQuad = (t: number) => 
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    
    updateViewportWidth();
    window.addEventListener('resize', updateViewportWidth);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Smoother percentage calculation
      const percentage = (scrollPosition / windowHeight) * 100;
      setScrollPercentage(Math.min(percentage, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, []);

  const calculateTransform = (direction: 1 | -1) => {    
    const progress = easeInOutQuad(scrollPercentage / 100);
    return `translate3d(${direction * progress * viewportWidth}px, 0, 0)`;
  };

  return (
    <Layout>
      <section className="flex flex-col items-center justify-start h-[200vh] bg-gray-900 text-white text-center pt-[30vh]">
        <h1 
          className="text-5xl font-bold mb-4 transition-transform duration-300 ease-out will-change-transform"
          style={{ 
            transform: calculateTransform(1)
          }}
        >
          Welcome to My Portfolio
        </h1>
        <p 
          className="text-xl mb-8 transition-transform duration-300 ease-out will-change-transform"
          style={{ 
            transform: calculateTransform(-1)
          }}
        >
          I specialize in building stunning iOS applications.
        </p>
        <Link
          href="/projects"
          className="px-6 py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition-opacity duration-300"
          style={{
            opacity: Math.max(1 - easeInOutQuad(scrollPercentage / 50), 0)
          }}
        >
          See My Work
        </Link>
      </section>
    </Layout>
  );
}
