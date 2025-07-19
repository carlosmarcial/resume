'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';
import { ExternalLink, Quote } from 'lucide-react';

const pressLogos = [
  { name: 'CNN', logo: 'CNN' },
  { name: 'Sotheby&apos;s', logo: 'S' },
  { name: 'TechCrunch', logo: 'TC' },
  { name: 'Forbes', logo: 'F' },
  { name: 'Wired', logo: 'W' },
  { name: 'ArtNews', logo: 'AN' },
  { name: 'Decrypt', logo: 'D' },
  { name: 'CoinDesk', logo: 'CD' },
];

const quotes = [
  {
    text: "Carlos Marcial represents a new generation of artists who seamlessly blend traditional artistry with cutting-edge technology.",
    author: "Sarah Johnson",
    publication: "ArtNews",
    role: "Digital Art Critic",
  },
  {
    text: "His work challenges the boundaries between art and code, creating experiences that are both visually stunning and technically impressive.",
    author: "Michael Chen",
    publication: "TechCrunch",
    role: "Senior Editor",
  },
  {
    text: "One of the most innovative voices in the crypto art space, consistently pushing the envelope of what's possible.",
    author: "Emma Rodriguez",
    publication: "Decrypt",
    role: "Art & Culture Editor",
  },
  {
    text: "Carlos's transition from struggling artist to crypto millionaire is a testament to the power of embracing new technologies.",
    author: "David Park",
    publication: "Forbes",
    role: "Tech Correspondent",
  },
];

interface CyclingQuoteProps {
  quotes: typeof quotes;
  interval?: number;
}

function CyclingQuote({ quotes, interval = 5000 }: CyclingQuoteProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [quotes.length, interval]);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <motion.div
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="text-center max-w-4xl mx-auto"
    >
      <div className="relative">
        <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/30" />
        <Quote className="absolute -bottom-4 -right-4 w-8 h-8 text-primary/30 rotate-180" />
        
        <blockquote className="text-lg md:text-xl font-mono leading-relaxed text-muted-foreground mb-6 px-8">
          &quot;{currentQuote.text}&quot;
        </blockquote>
        
        <div className="flex flex-col items-center space-y-2">
          <div className="text-magenta font-bold font-orbitron">
            {currentQuote.author}
          </div>
          <div className="text-sm text-magenta font-mono">
            {currentQuote.role} at {currentQuote.publication}
          </div>
        </div>
      </div>
      
      {/* Quote indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {quotes.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentQuoteIndex ? 'bg-magenta' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Press() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  return (
    <section id="press" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="text-primary">{'>'}</span> PRESS_COVERAGE
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            Recognition from leading publications in art, technology, and blockchain.
          </p>
        </motion.div>

        {/* Press logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {pressLogos.map((press, index) => (
            <motion.div
              key={press.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-center p-6 border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 group"
            >
              <div className="text-2xl md:text-3xl font-bold font-orbitron text-muted-foreground group-hover:text-magenta transition-colors duration-300">
                {press.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cycling quotes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <CyclingQuote quotes={quotes} />
        </motion.div>

        {/* Featured coverage */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 p-6 hover:border-primary/50 transition-colors duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold font-orbitron">Featured Articles</h3>
              <ExternalLink className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-magenta font-semibold">CNN Business</div>
                <div className="text-muted-foreground">
                  &quot;The Artist Who Coded His Way to Crypto Success&quot;
                </div>
              </div>
              <div className="border-l-2 border-magenta pl-4">
                <div className="text-magenta font-semibold">Sotheby&apos;s</div>
                <div className="text-muted-foreground">
                  &quot;Digital Renaissance: New Masters of NFT Art&quot;
                </div>
              </div>
              <div className="border-l-2 border-magenta pl-4">
                <div className="text-magenta font-semibold">Wired</div>
                <div className="text-muted-foreground">
                  &quot;How AI and Blockchain Are Reshaping Art&quot;
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-border/50 p-6 hover:border-primary/50 transition-colors duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold font-orbitron">Media Stats</h3>
              <div className="text-magenta text-2xl">📊</div>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between">
                <span>Total Articles</span>
                <span className="text-magenta font-bold">25+</span>
              </div>
              <div className="flex justify-between">
                <span>Podcast Appearances</span>
                <span className="text-magenta font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span>Conference Talks</span>
                <span className="text-magenta font-bold">8</span>
              </div>
              <div className="flex justify-between">
                <span>Awards</span>
                <span className="text-magenta font-bold">5</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 border-2 border-magenta text-magenta hover:bg-magenta hover:text-background transition-all duration-300 font-mono text-sm tracking-wider">
            [VIEW ALL COVERAGE]
          </button>
        </motion.div>
      </div>
    </section>
  );
}