'use client';

import TerminalWindow from './TerminalWindow';

interface EducationItem {
  year: string;
  title: string;
  institution?: string;
  description: string;
}

const education: EducationItem[] = [
  {
    year: '2010-2012',
    title: 'M.A. Film (Screen Directing)',
    institution: 'University of the Arts London (Drama Centre), UK',
    description: 'Master\'s degree in screen directing with focus on visual storytelling and creative production'
  },
  {
    year: '2003-2008',
    title: 'B.A. Interdisciplinary Studies (Film & Literature)',
    institution: 'University of Puerto Rico, Río Piedras',
    description: 'Bachelor\'s degree combining film studies and literature with interdisciplinary approach'
  },
  {
    year: '2017-Present',
    title: 'Self-Taught Full-Stack Development',
    institution: 'Codecademy + Advanced Training',
    description: 'Comprehensive self-directed learning: full-stack courses, advanced WebGL/Three.js training'
  },
  {
    year: '2012-Present',
    title: 'Early Bitcoin Adoption & Crypto Education',
    description: 'Bitcoin adoption since 2012, leading to deep understanding of blockchain and crypto art discovery'
  }
];

export default function TerminalEducation() {
  return (
    <section className="py-8">
      <TerminalWindow command="cat education.txt">
        <div className="space-y-4">
          {education.map((item, index) => (
            <div key={index} className="border-l-2 border-primary pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <div className="text-primary font-semibold">{item.title}</div>
                <div className="text-sm text-magenta">{item.year}</div>
              </div>
              {item.institution && (
                <div className="text-sm text-muted-foreground mb-1">
                  {item.institution}
                </div>
              )}
              <div className="text-sm text-muted-foreground">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TerminalWindow>
    </section>
  );
}