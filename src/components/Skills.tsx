'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '💻',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Three.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    title: 'Blockchain',
    icon: '⛓️',
    skills: [
      { name: 'Solidity', level: 87 },
      { name: 'Web3.js', level: 85 },
      { name: 'IPFS', level: 83 },
      { name: 'Smart Contracts', level: 88 },
      { name: 'DeFi Protocols', level: 75 },
    ],
  },
  {
    title: 'AI/ML',
    icon: '🧠',
    skills: [
      { name: 'TensorFlow', level: 78 },
      { name: 'PyTorch', level: 75 },
      { name: 'OpenAI API', level: 85 },
      { name: 'Computer Vision', level: 72 },
      { name: 'NLP', level: 68 },
    ],
  },
  {
    title: 'Creative',
    icon: '🎨',
    skills: [
      { name: 'Digital Art', level: 95 },
      { name: 'UI/UX Design', level: 88 },
      { name: 'Generative Art', level: 92 },
      { name: 'NFT Creation', level: 98 },
      { name: 'Brand Design', level: 85 },
    ],
  },
];

interface SkillBarProps {
  skill: { name: string; level: number };
  index: number;
  isVisible: boolean;
}

function SkillBar({ skill, index, isVisible }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-mono font-semibold">{skill.name}</span>
        <span className="text-xs text-magenta font-mono">
          {animatedLevel}%
        </span>
      </div>
      <div className="w-full bg-secondary/30 h-2 relative overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-magenta relative"
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  category: typeof skillCategories[0];
  index: number;
  isVisible: boolean;
}

function SkillCategory({ category, index, isVisible }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card/30 backdrop-blur-sm border border-border/50 p-6 hover:border-primary/50 transition-colors duration-300"
    >
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-3">{category.icon}</span>
        <h3 className="text-xl font-bold font-orbitron">{category.title}</h3>
      </div>
      
      <div className="space-y-3">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={skillIndex}
            isVisible={isVisible}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="text-primary">{'>'}</span> SKILL_MATRIX
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            A comprehensive overview of my technical capabilities and creative expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-card/30 backdrop-blur-sm border border-border/50 p-8 font-mono"
        >
          <div className="text-primary mb-4">
            <span className="text-magenta">$</span> cat skill_summary.log
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 font-orbitron">
                <span className="text-primary">{'>'}</span> Currently Learning
              </h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-magenta">•</span> Advanced WebGL shaders</li>
                <li><span className="text-magenta">•</span> Rust for Web3 development</li>
                <li><span className="text-magenta">•</span> Advanced AI art generation</li>
                <li><span className="text-magenta">•</span> Zero-knowledge proofs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 font-orbitron">
                <span className="text-primary">{'>'}</span> Next Goals
              </h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-magenta">•</span> Blockchain optimization</li>
                <li><span className="text-magenta">•</span> VR/AR art experiences</li>
                <li><span className="text-magenta">•</span> Quantum computing exploration</li>
                <li><span className="text-magenta">•</span> Cross-chain interoperability</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}