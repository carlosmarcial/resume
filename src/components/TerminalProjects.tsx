'use client';

import TerminalWindow from './TerminalWindow';

interface Project {
  name: string;
  description: string;
  stats: string;
  tech: string[];
  link?: string;
  linkText?: string;
}

const projects: Project[] = [
  {
    name: 'chatrag-ai/',
    description: 'RAG Chatbot Platform - Open-source SaaS boilerplate for custom RAG chatbots',
    stats: 'Zapier MCP integration (7K+ apps)',
    tech: ['Next.js', 'OpenAI/OpenRouter', 'Supabase', 'LlamaIndex', 'TypeScript'],
    link: 'https://chatrag.ai',
    linkText: 'Visit ChatRAG.ai'
  },
  {
    name: 'uruloki-app/',
    description: 'AI-Powered DEX Aggregator - Cross-chain trading with AI technical analysis',
    stats: 'Ethereum & Solana support',
    tech: ['Next.js', 'Node.js', 'Web3.js', 'AI APIs', 'PostgreSQL'],
    link: 'https://uruloki.app',
    linkText: 'Visit Uruloki.app'
  },
  {
    name: 'the-work-of-art-as-algorithmic-system/',
    description: 'Interactive NFT - One-of-a-kind algorithmic aesthetic piece',
    stats: 'Sotheby\'s Paris €22,860',
    tech: ['HTML/JavaScript', 'Three.js', 'WebGL', 'Generative Algorithms'],
    link: 'https://www.sothebys.com/en/buy/auction/2023/natively-digital-oddly-satisfying/carlos-marcial',
    linkText: 'View Sotheby\'s Auction'
  },
  {
    name: 'the-collectors-room/',
    description: 'Generative NFT Series - 1000 editions for PROOF\'s Moonbirds Diamond Exhibition',
    stats: '40% AI-assisted code',
    tech: ['Three.js', 'ChatGPT', 'Generative Art', 'Smart Contracts'],
    link: 'https://opensea.io/collection/the-collector-s-room-by-carlos-marcial',
    linkText: 'View on OpenSea'
  },
  {
    name: 'accelerated-jobs/',
    description: 'High-Tech Job Board - Focus on AI, Robotics, Quantum Computing intersections',
    stats: 'Multi-field filtering',
    tech: ['PostgreSQL', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://acceleratedjobs.com',
    linkText: 'Visit Accelerated Jobs'
  },
  {
    name: 'proof-of-infinite-loop/',
    description: 'First made-with-code cryptoart experiment - Infinite animation minted on SuperRare',
    stats: 'SuperRare featured',
    tech: ['JavaScript', 'Canvas API', 'Generative Animation', 'NFT'],
    link: 'https://l4gejmokfmdhttupkpr3uok2ubedpel2gjbub7b6itz37ky4bdlq.arweave.net/XwxEscorBnnOj1PjujlaoEg3kXoyQ0D8PkTzv6scCNc/',
    linkText: 'View on SuperRare'
  }
];

export default function TerminalProjects() {
  return (
    <section className="py-8">
      <TerminalWindow command="ls -la projects/">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="border-l-2 border-magenta pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="text-primary font-semibold">{project.name}</div>
                <div className="text-sm text-magenta">{project.stats}</div>
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                {project.description}
              </div>
              {project.link && (
                <div className="mb-2">
                  <a 
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-magenta transition-colors duration-200 underline text-sm font-medium"
                  >
                    → {project.linkText || 'Visit Project'}
                  </a>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-secondary text-xs rounded text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TerminalWindow>
    </section>
  );
}