'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import GlitchText from './GlitchText';
import TypewriterText from './TypewriterText';

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-orbitron">
            <GlitchText text="CARLOS" className="block" scanlines={true} />
            <GlitchText text="MARCIAL" className="block" delay={500} scanlines={true} />
          </h1>
          
          <div className="text-xl md:text-2xl text-accent mb-8 font-mono">
            <TypewriterText 
              text="Full-Stack Developer & Digital Artist"
              speed={80}
              delay={1500}
              className="text-magenta"
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono"
          >
            <span className="text-primary">{'>'}</span> Bridging the gap between design and technology
            <br />
            <span className="text-primary">{'>'}</span> $1M+ in NFT sales | 250+ collectors | 5+ years coding
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1 }}
          className="flex flex-col items-center space-y-2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary hover:text-magenta transition-colors duration-300 cursor-pointer"
            onClick={scrollToNext}
          >
            <ChevronDown size={40} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 0.8 }}
            className="text-sm font-mono text-muted-foreground tracking-wider"
          >
            [KEEP SCROLLING]
          </motion.p>
        </motion.div>
      </div>
      
    </section>
  );
}