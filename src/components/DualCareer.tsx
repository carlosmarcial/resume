'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Palette, Code, Zap, Trophy, Users, TrendingUp } from 'lucide-react';

const artMilestones = [
  {
    year: '2017',
    title: 'First Digital Art',
    description: 'Transitioned from traditional to digital art',
    icon: <Palette className="w-5 h-5" />,
  },
  {
    year: '2020',
    title: 'NFT Discovery',
    description: 'Minted first NFT collection',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    year: '2021',
    title: 'Breakthrough Sale',
    description: 'First 6-figure NFT sale',
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    year: '2023',
    title: 'Major Success',
    description: '$1M+ in total sales',
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

const devMilestones = [
  {
    year: '2017',
    title: 'Started Coding',
    description: 'Self-taught programming journey',
    icon: <Code className="w-5 h-5" />,
  },
  {
    year: '2019',
    title: 'Full-Stack Developer',
    description: 'Mastered modern web technologies',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    year: '2021',
    title: 'Blockchain Focus',
    description: 'Specialized in Web3 development',
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    year: '2024',
    title: 'Technical Leader',
    description: 'Leading innovative projects',
    icon: <Users className="w-5 h-5" />,
  },
];

interface TimelineProps {
  milestones: typeof artMilestones;
  side: 'left' | 'right';
  title: string;
  color: string;
}

function Timeline({ milestones, side, title, color }: TimelineProps) {
  return (
    <div className={`w-full ${side === 'right' ? 'md:pl-8' : 'md:pr-8'}`}>
      <h3 className={`text-2xl md:text-3xl font-bold mb-8 font-orbitron ${color}`}>
        {title}
      </h3>
      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-${color.split('-')[1]}-500/20 border-2 border-${color.split('-')[1]}-500 flex items-center justify-center`}>
                {milestone.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`text-sm font-mono ${color} font-bold`}>
                    {milestone.year}
                  </span>
                  <span className="text-xs text-muted-foreground">|</span>
                  <h4 className="text-lg font-semibold font-orbitron">
                    {milestone.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm font-mono">
                  {milestone.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function DualCareer() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  return (
    <section id="dual-career" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="text-primary">{'>'}</span> DUAL_PATH
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            Two parallel journeys that converged into something greater than the sum of their parts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative">
          {/* Central divider line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/50 transform -translate-x-1/2"></div>
          
          {/* Art Journey */}
          <Timeline
            milestones={artMilestones}
            side="left"
            title="🎨 ARTIST_JOURNEY"
            color="text-cyan-400"
          />
          
          {/* Developer Journey */}
          <Timeline
            milestones={devMilestones}
            side="right"
            title="💻 DEV_JOURNEY"
            color="text-green-400"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 p-8 font-mono">
            <div className="text-primary mb-4">
              <span className="text-accent">$</span> git merge artist developer
            </div>
            <p className="text-muted-foreground">
              <span className="text-primary">{'>'}</span> The convergence of creativity and code created new possibilities.
              <br />
              <span className="text-primary">{'>'}</span> Where art meets technology, innovation flourishes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}