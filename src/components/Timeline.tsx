'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

const timelineEvents = [
  {
    year: '2024',
    month: 'Present',
    type: 'work',
    title: 'Leading NFT Innovation',
    company: 'Independent Artist & Developer',
    location: 'Remote',
    description: 'Continuing to push boundaries in digital art and Web3 development. Recent focus on AI-assisted art generation and cross-chain NFT platforms.',
    achievements: [
      'Reached $1M+ in total NFT sales',
      'Built custom generative art platform',
      'Mentored 50+ emerging crypto artists',
    ],
    icon: <Award className="w-5 h-5" />,
  },
  {
    year: '2023',
    month: 'Jan',
    type: 'achievement',
    title: 'Major Breakthrough',
    company: 'Sotheby&apos;s Digital Art Auction',
    location: 'New York',
    description: 'Featured in prestigious digital art auction, marking a significant milestone in my artistic career.',
    achievements: [
      'Artwork sold for $150K',
      'Featured in major media outlets',
      'Established collector base',
    ],
    icon: <Award className="w-5 h-5" />,
  },
  {
    year: '2022',
    month: 'Mar',
    type: 'work',
    title: 'Full-Stack Web3 Developer',
    company: 'Crypto Startup',
    location: 'San Francisco',
    description: 'Led development of decentralized applications and smart contract systems while maintaining my art practice.',
    achievements: [
      'Built DeFi protocol handling $5M+ TVL',
      'Developed NFT marketplace',
      'Implemented Layer 2 solutions',
    ],
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: '2021',
    month: 'Jun',
    type: 'achievement',
    title: 'First Major NFT Success',
    company: 'OpenSea',
    location: 'Online',
    description: 'Launched my first successful NFT collection, establishing my presence in the crypto art space.',
    achievements: [
      'Sold out 1000-piece collection',
      'Generated $100K in primary sales',
      'Built community of 500+ followers',
    ],
    icon: <Award className="w-5 h-5" />,
  },
  {
    year: '2020',
    month: 'Sep',
    type: 'education',
    title: 'Blockchain & Smart Contracts',
    company: 'Online Certification',
    location: 'Remote',
    description: 'Completed comprehensive blockchain development course, focusing on Ethereum and smart contract programming.',
    achievements: [
      'Mastered Solidity programming',
      'Built first DApp',
      'Contributed to open-source projects',
    ],
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    year: '2019',
    month: 'Feb',
    type: 'work',
    title: 'Frontend Developer',
    company: 'Tech Startup',
    location: 'Austin, TX',
    description: 'Developed modern web applications using React and TypeScript while exploring digital art in my spare time.',
    achievements: [
      'Built responsive web applications',
      'Implemented modern UI/UX patterns',
      'Mentored junior developers',
    ],
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: '2017',
    month: 'Aug',
    type: 'education',
    title: 'Started Programming Journey',
    company: 'Self-Taught',
    location: 'Online',
    description: 'Began learning programming while working as a traditional artist, driven by curiosity about technology.',
    achievements: [
      'Completed JavaScript bootcamp',
      'Built first portfolio website',
      'Joined developer community',
    ],
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

const typeColors: Record<string, string> = {
  work: 'text-magenta',
  achievement: 'text-magenta',
  education: 'text-magenta',
};

const typeLabels: Record<string, string> = {
  work: 'WORK',
  achievement: 'ACHIEVEMENT',
  education: 'EDUCATION',
};

interface TimelineItemProps {
  event: typeof timelineEvents[0];
  index: number;
  isVisible: boolean;
}

function TimelineItem({ event, index, isVisible }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12`}
    >
      {/* Timeline point */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-magenta rounded-full border-4 border-background z-10 md:relative md:left-0 md:transform-none md:w-12 md:h-12 md:flex md:items-center md:justify-center md:bg-card md:border-2 md:border-magenta">
        <div className="hidden md:block text-magenta">
          {event.icon}
        </div>
      </div>

      {/* Content */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:ml-8' : 'md:mr-8'} pl-8 md:pl-0`}>
        <div className="bg-card/30 backdrop-blur-sm border border-border/50 p-6 hover:border-primary/50 transition-colors duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold font-orbitron text-magenta">
                {event.year}
              </span>
              <span className="text-sm text-muted-foreground font-mono">
                {event.month}
              </span>
            </div>
            <span className={`text-xs font-mono px-2 py-1 border ${typeColors[event.type]} border-current bg-current/10`}>
              {typeLabels[event.type]}
            </span>
          </div>

          <h3 className="text-xl font-bold font-orbitron mb-2">
            {event.title}
          </h3>
          
          <div className="flex items-center text-sm text-muted-foreground mb-3 font-mono">
            <Briefcase className="w-4 h-4 mr-2" />
            <span>{event.company}</span>
            <MapPin className="w-4 h-4 ml-4 mr-2" />
            <span>{event.location}</span>
          </div>

          <p className="text-muted-foreground mb-4 text-sm font-mono leading-relaxed">
            {event.description}
          </p>

          <div className="space-y-2">
            {event.achievements.map((achievement, i) => (
              <div key={i} className="flex items-start text-sm font-mono">
                <span className="text-magenta mr-2 mt-1">•</span>
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
}

export default function Timeline() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section id="timeline" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="text-primary">{'>'}</span> TIMELINE
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            Key milestones in my journey from traditional artist to crypto success story.
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border/50 md:hidden" />
          
          <div className="space-y-0">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={`${event.year}-${event.month}`}
                event={event}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 p-8 font-mono">
            <div className="text-primary mb-4">
              <span className="text-magenta">$</span> git log --oneline --author=&quot;Carlos Marcial&quot;
            </div>
            <p className="text-muted-foreground">
              <span className="text-primary">{'>'}</span> The journey continues... Next commit: Building the future of digital art.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}