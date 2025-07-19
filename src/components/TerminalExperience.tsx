'use client';

import TerminalWindow from './TerminalWindow';

interface ExperienceItem {
  period: string;
  title: string;
  company?: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: '2020-Present',
    title: 'Independent Artist & Developer',
    company: 'Carlos Marcial Studio',
    achievements: [
      'Full-time crypto artist with 250+ unique collectors across international platforms',
      'Generated seven-figure NFT sales (over $1,000,000 by 2021)',
      'Featured at Sotheby\'s "Natively Digital" Paris auction (2023) - €22,860 sale',
      'Exhibited at 0x Society Gallery Montreal (2022) - Canada\'s first physical crypto art gallery',
      'Self-taught full-stack developer building web3/AI applications (ChatRAG, Uruloki)',
      'Developed AI-assisted creative coding workflows (40% code via ChatGPT)',
      'Created custom smart contracts and generative code for art projects',
      'Uses artistic design skills to make software projects visually distinctive'
    ]
  },
  {
    period: '2017-2019',
    title: 'Co-Founder & Creative Director',
    company: 'ViewFin Media Group (VFMG), Toronto',
    achievements: [
      'Co-founded one of the first agencies dedicated to blockchain clients',
      'Built and managed creative team delivering digital design and motion graphics',
      'Served as Art/Creative Director for crypto projects and fintech startups',
      'Created animated promotions for Binance anniversary and experimental blockchain ads',
      'First exposure to cryptocurrency and NFTs (collected first CryptoKitty in 2019)',
      'Interfaced with developers and entrepreneurs in blockchain space',
      'Developed leadership and client collaboration skills in emerging tech sector'
    ]
  }
];

export default function TerminalExperience() {
  return (
    <section className="py-8">
      <TerminalWindow command="cat experience.log">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-primary">{exp.title}</h3>
                  {exp.company && (
                    <div className="text-sm text-magenta">{exp.company}</div>
                  )}
                </div>
                <div className="text-sm text-muted-foreground mt-1 md:mt-0">
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-sm text-muted-foreground">
                    <span className="text-magenta">•</span> {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </TerminalWindow>
    </section>
  );
}