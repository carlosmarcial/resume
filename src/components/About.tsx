'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [end, duration]);

  return (
    <span className="text-magenta font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function About() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="text-primary">{'>'}</span> ABOUT_ME
          </h2>
          
          <div className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-mono leading-relaxed px-4 md:px-8 lg:px-12">
            {isVisible && (
              <TypewriterText 
                text="A creative technologist passionate about merging art with code. I build digital experiences that bridge the gap between traditional creativity and modern technology."
                speed={30}
                delay={300}
              />
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center p-6 border border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <div className="text-3xl md:text-4xl font-bold mb-2 font-orbitron">
              {isVisible && <Counter end={1000000} suffix="+" />}
            </div>
            <div className="text-magenta font-mono text-sm tracking-wider">NFT SALES</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center p-6 border border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <div className="text-3xl md:text-4xl font-bold mb-2 font-orbitron">
              {isVisible && <Counter end={250} suffix="+" />}
            </div>
            <div className="text-magenta font-mono text-sm tracking-wider">COLLECTORS</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center p-6 border border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <div className="text-3xl md:text-4xl font-bold mb-2 font-orbitron">
              {isVisible && <Counter end={5} suffix="+" />}
            </div>
            <div className="text-magenta font-mono text-sm tracking-wider">YEARS CODING</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-card/30 backdrop-blur-sm border border-border/50 p-8 font-mono"
        >
          <div className="text-primary mb-4">
            <span className="text-magenta">$</span> cat about_carlos.txt
          </div>
          <div className="text-sm md:text-base leading-relaxed space-y-4">
            <p>
              <span className="text-primary">{'>'}</span> Artist turned developer, or developer turned artist? The lines blur when you're creating at the intersection of technology and creativity.
            </p>
            <p>
              <span className="text-primary">{'>'}</span> My journey began with traditional art, evolved through digital mediums, and found its voice in the blockchain revolution. Now I build full-stack applications that power the future of digital art.
            </p>
            <p>
              <span className="text-primary">{'>'}</span> When I'm not coding smart contracts or creating NFTs, you'll find me exploring new technologies, mentoring emerging artists, or building tools that democratize access to digital art creation.
            </p>
            <p className="text-magenta">
              <span className="text-primary">{'>'}</span> Currently focused on: AI-assisted art generation, Web3 development, and creating immersive digital experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}