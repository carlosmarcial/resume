'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState } from 'react';
import { 
  Mail, 
  Twitter, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Copy, 
  Check,
  Send,
} from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    handle: 'carlos@example.com',
    url: 'mailto:carlos@example.com',
    icon: <Mail className="w-5 h-5" />,
    color: 'text-red-400',
    copyable: true,
  },
  {
    name: 'Twitter',
    handle: '@carlosmarcial',
    url: 'https://twitter.com/carlosmarcial',
    icon: <Twitter className="w-5 h-5" />,
    color: 'text-blue-400',
  },
  {
    name: 'GitHub',
    handle: 'github.com/carlosmarcial',
    url: 'https://github.com/carlosmarcial',
    icon: <Github className="w-5 h-5" />,
    color: 'text-gray-400',
  },
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/carlosmarcial',
    url: 'https://linkedin.com/in/carlosmarcial',
    icon: <Linkedin className="w-5 h-5" />,
    color: 'text-blue-600',
  },
];

const collaborationTypes = [
  {
    icon: '🎨',
    title: 'Art Collaborations',
    description: 'Joint NFT projects, exhibitions, and creative partnerships',
  },
  {
    icon: '💻',
    title: 'Development Projects',
    description: 'Web3 applications, smart contracts, and full-stack solutions',
  },
  {
    icon: '🎤',
    title: 'Speaking & Mentoring',
    description: 'Conference talks, workshops, and mentoring sessions',
  },
  {
    icon: '🚀',
    title: 'Startup Consulting',
    description: 'Technical advisory for art-tech and blockchain startups',
  },
];

interface SocialLinkProps {
  social: typeof socialLinks[0];
  index: number;
}

function SocialLink({ social, index }: SocialLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (social.copyable) {
      try {
        await navigator.clipboard.writeText(social.handle);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const handleClick = () => {
    if (social.copyable) {
      handleCopy();
    } else {
      window.open(social.url, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center space-x-4 p-4 border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group cursor-pointer"
      onClick={handleClick}
    >
      <div className={`${social.color} group-hover:scale-110 transition-transform duration-300`}>
        {social.icon}
      </div>
      <div className="flex-1">
        <div className="font-semibold font-orbitron text-sm">{social.name}</div>
        <div className="text-muted-foreground text-xs font-mono">{social.handle}</div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {social.copyable ? (
          copied ? <Check className="w-4 h-4 text-magenta" /> : <Copy className="w-4 h-4" />
        ) : (
          <ExternalLink className="w-4 h-4" />
        )}
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="text-primary">{'>'}</span> CONNECT
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            Ready to build something extraordinary together? Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-orbitron mb-6">
              <span className="text-primary">{'>'}</span> GET_IN_TOUCH
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <SocialLink key={social.name} social={social} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Collaboration Types */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold font-orbitron mb-6">
              <span className="text-primary">{'>'}</span> COLLABORATION
            </h3>
            <div className="space-y-4">
              {collaborationTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="text-2xl">{type.icon}</div>
                  <div>
                    <div className="font-semibold font-orbitron text-sm mb-1">
                      {type.title}
                    </div>
                    <div className="text-muted-foreground text-xs font-mono">
                      {type.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-card/30 backdrop-blur-sm border border-border/50 p-8 mb-16"
        >
          <h3 className="text-2xl font-bold font-orbitron mb-6 text-center">
            <span className="text-primary">{'>'}</span> SEND_MESSAGE
          </h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-mono mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-background/50 border border-border focus:border-magenta focus:outline-none font-mono text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-mono mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-background/50 border border-border focus:border-magenta focus:outline-none font-mono text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-mono mb-2">Project Type</label>
              <select className="w-full px-4 py-2 bg-background/50 border border-border focus:border-magenta focus:outline-none font-mono text-sm">
                <option>Art Collaboration</option>
                <option>Development Project</option>
                <option>Speaking Engagement</option>
                <option>Consultation</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-mono mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 bg-background/50 border border-border focus:border-magenta focus:outline-none font-mono text-sm resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-magenta text-background hover:bg-magenta/80 transition-all duration-300 font-mono text-sm tracking-wider flex items-center space-x-2 mx-auto"
              >
                <Send className="w-4 h-4" />
                <span>[SEND MESSAGE]</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Terminal Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-card/30 backdrop-blur-sm border border-border/50 p-8 font-mono text-center"
        >
          <div className="text-primary mb-4">
            <span className="text-magenta">$</span> echo &quot;Thanks for visiting my digital realm&quot;
          </div>
          <div className="text-muted-foreground text-sm">
            <span className="text-primary">{'>'}</span> Let&apos;s build the future of art and technology together.
            <br />
            <span className="text-primary">{'>'}</span> carlos@example.com | Available for projects worldwide
          </div>
        </motion.div>
      </div>
    </section>
  );
}