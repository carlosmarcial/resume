'use client';

import TerminalWindow from './TerminalWindow';

interface MediaItem {
  year: string;
  title: string;
  outlet: string;
  description: string;
  highlight: string;
  link?: string;
  linkText?: string;
}

const mediaItems: MediaItem[] = [
  {
    year: '2021',
    title: 'CNN Interview - NFT Market Impact',
    outlet: 'International Media',
    description: 'Featured alongside artist Osinachi explaining how NFTs transformed digital artists\' lives',
    highlight: 'Mainstream media coverage',
    link: 'https://www.youtube.com/watch?v=mrtn6LEDY8U&ab_channel=CNN',
    linkText: 'Watch CNN Interview'
  },
  {
    year: '2022',
    title: 'Right Click Save Feature',
    outlet: 'NFT Art Journal',
    description: 'Profiled as "probably the most successful crypto artist to emerge from Mexico City"',
    highlight: 'Mexico City crypto art scene',
    link: 'https://www.rightclicksave.com/article/on-crypto-arts-mexican-roots',
    linkText: 'Read Article'
  }
];

export default function TerminalMedia() {
  return (
    <section className="py-8">
      <TerminalWindow command="cat media_coverage.txt">
        <div className="space-y-4">
          {mediaItems.map((media, index) => (
            <div key={index} className="border-l-2 border-magenta pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-primary">{media.title}</h3>
                  <div className="text-sm text-magenta">{media.outlet}</div>
                </div>
                <div className="text-sm text-muted-foreground mt-1 md:mt-0">
                  {media.year}
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-1">
                {media.description}
              </div>
              <div className="text-sm text-primary font-medium mb-2">
                → {media.highlight}
              </div>
              {media.link && (
                <div>
                  <a 
                    href={media.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-magenta transition-colors duration-200 underline text-sm font-medium"
                  >
                    → {media.linkText || 'View More'}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </TerminalWindow>
    </section>
  );
}