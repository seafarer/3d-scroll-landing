
import { useEffect, useState } from 'react';
import { Scene3D } from '../components/Scene3D';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalScroll;
      setScrollProgress(currentProgress);

      // Add visible class to elements for scroll animation
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1 bg-secondary text-primary rounded-full text-sm font-medium animate-on-scroll">
              Medical Innovation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-on-scroll">
              Revolutionizing
              <span className="text-gradient block">Healthcare Technology</span>
            </h1>
            <p className="text-lg text-gray-600 animate-on-scroll">
              Discover how our cutting-edge medical solutions are transforming patient care through innovative technology and data-driven insights.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105 animate-on-scroll">
              Get Started
            </button>
          </div>
          <div className="h-[600px] relative animate-on-scroll">
            <div className="absolute inset-0 hero-gradient rounded-2xl shadow-xl">
              <Scene3D scroll={scrollProgress} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
