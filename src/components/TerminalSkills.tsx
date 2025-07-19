'use client';

import { useState } from 'react';
import TerminalWindow from './TerminalWindow';

interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Development Stack',
    skills: ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    color: '#ff6b6b'
  },
  {
    name: 'AI & Machine Learning',
    skills: ['OpenAI API', 'OpenAI Embeddings', 'LlamaIndex', 'Vector Databases', 'RAG Systems'],
    color: '#8b5cf6'
  },
  {
    name: 'Web3 & Blockchain',
    skills: ['Ethereum', 'Solidity', 'Web3.js', 'Ethers.js', 'NFT Standards', 'Smart Contracts'],
    color: '#ff9500'
  },
  {
    name: 'Creative & Visual',
    skills: ['Three.js', 'WebGL', 'p5.js', 'Generative Algorithms', 'Adobe Creative Suite', 'Figma', 'Blender', 'Cinema4D'],
    color: '#06d6a0'
  },
  {
    name: 'Data & Infrastructure',
    skills: ['PostgreSQL', 'Supabase', 'Vercel', 'Git'],
    color: '#ffd60a'
  },
  {
    name: 'AI-Assisted Development',
    skills: ['Cursor IDE', 'Windsurf', 'Kiro AI', 'VSCode + Copilot', 'Claude Code', 'AI-Assisted Coding'],
    color: '#2a9d8f'
  },
  {
    name: 'Languages',
    skills: ['English (Fluent)', 'Spanish (Fluent)', 'Portuguese (Basic)'],
    color: '#e76f51'
  }
];

export default function TerminalSkills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="py-8">
      <TerminalWindow command="visualize skills">
        <div className="space-y-6">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.name 
                    ? 'border-primary bg-primary/10 shadow-lg' 
                    : 'border-border bg-secondary/10 hover:border-magenta'
                }`}
                onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
              >
                <div className="flex items-center mb-3">
                  <div 
                    className="w-4 h-4 rounded-full mr-3"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <h4 className="font-semibold text-primary">{category.name}</h4>
                </div>
                
                <div className="space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`text-sm px-2 py-1 rounded transition-all duration-200 ${
                        selectedCategory === category.name 
                          ? 'text-primary bg-primary/20' 
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      → {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skill Count Summary */}
          <div className="text-center pt-6 border-t border-border">
            <div className="text-sm text-muted-foreground">
              <span className="text-magenta">›</span> {skillCategories.length} skill categories
              <span className="text-magenta mx-2">›</span> {skillCategories.reduce((total, cat) => total + cat.skills.length, 0)} individual skills
              <span className="text-magenta mx-2">›</span> Click categories to focus
            </div>
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
}