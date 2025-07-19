'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState } from 'react';
import { ExternalLink, Code, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Ethereal Landscapes',
    type: 'NFT Collection',
    description: 'A collection of 1000 generative landscapes that sold out in 24 hours, featuring procedural generation and on-chain metadata.',
    image: '/api/placeholder/400/300',
    tags: ['NFT', 'Generative Art', 'Solidity'],
    stats: { sales: '$250K', holders: '847' },
    links: {
      view: '#',
      code: '#',
    },
  },
  {
    id: 2,
    title: 'ArtDAO Platform',
    type: 'Web3 App',
    description: 'A decentralized platform for artists to collaborate, vote on projects, and share revenue. Built with React, Web3.js, and IPFS.',
    image: '/api/placeholder/400/300',
    tags: ['React', 'Web3', 'IPFS', 'DAO'],
    stats: { users: '2.3K', transactions: '15K' },
    links: {
      view: '#',
      code: '#',
    },
  },
  {
    id: 3,
    title: 'Neural Dreams',
    type: 'AI Art Series',
    description: 'AI-generated artwork series exploring the intersection of machine learning and human creativity.',
    image: '/api/placeholder/400/300',
    tags: ['AI', 'Machine Learning', 'Python'],
    stats: { pieces: '500+', sales: '$180K' },
    links: {
      view: '#',
    },
  },
  {
    id: 4,
    title: 'MetaGallery',
    type: 'Virtual Exhibition',
    description: 'A virtual reality art gallery built with Three.js and WebXR, featuring immersive NFT exhibitions.',
    image: '/api/placeholder/400/300',
    tags: ['Three.js', 'WebXR', 'React', 'NFT'],
    stats: { visitors: '50K+', exhibitions: '25' },
    links: {
      view: '#',
      code: '#',
    },
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-card/50">
        {/* Project Image */}
        <div className="relative h-48 md:h-56 bg-muted/20 overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
          >
            <div className="text-4xl opacity-50">🎨</div>
          </motion.div>
          
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70 flex items-center justify-center space-x-4"
          >
            <button className="p-2 bg-magenta/20 border border-magenta text-magenta hover:bg-magenta hover:text-background transition-all duration-200">
              <Eye className="w-5 h-5" />
            </button>
            {project.links.code && (
              <button className="p-2 bg-magenta/20 border border-magenta text-magenta hover:bg-magenta hover:text-background transition-all duration-200">
                <Code className="w-5 h-5" />
              </button>
            )}
            <button className="p-2 bg-magenta/20 border border-magenta text-magenta hover:bg-magenta hover:text-background transition-all duration-200">
              <ExternalLink className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold font-orbitron">{project.title}</h3>
            <span className="text-xs text-magenta font-mono px-2 py-1 border border-magenta/30 bg-magenta/10">
              {project.type}
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 font-mono leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex justify-between text-sm font-mono">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-magenta font-bold">{value}</div>
                <div className="text-muted-foreground text-xs uppercase">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectGallery() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="text-primary">{'>'}</span> FEATURED_WORKS
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            A selection of projects that showcase the fusion of artistic vision and technical execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-3 border-2 border-magenta text-magenta hover:bg-magenta hover:text-background transition-all duration-300 font-mono text-sm tracking-wider">
            [VIEW ALL PROJECTS]
          </button>
        </motion.div>
      </div>
    </section>
  );
}