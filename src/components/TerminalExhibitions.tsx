'use client';

import TerminalWindow from './TerminalWindow';

interface ExhibitionItem {
  year: string;
  title: string;
  venue: string;
  description: string;
  highlight: string;
  link?: string;
  linkText?: string;
}

const exhibitions: ExhibitionItem[] = [
  {
    year: '2023',
    title: 'Sotheby\'s "Natively Digital: Oddly Satisfying"',
    venue: 'Paris, France',
    description: 'Auctioned "The Work of Art as an Algorithmic Aesthetic System" as Lot 28',
    highlight: 'Sold for €22,860',
    link: 'https://www.sothebys.com/en/auctions/2023/natively-digital-oddly-satisfying-pf2304',
    linkText: 'View Auction Results'
  },
  {
    year: '2022',
    title: '0x Society Gallery - MetaVRse Exhibition',
    venue: 'Montreal, Canada',
    description: 'Featured among 12 renowned international digital artists in Canada\'s first physical crypto art gallery',
    highlight: 'Presented "Santa Simbiosis"',
    link: 'https://superrare.com/artwork-v2/santa-simbiosis-29847',
    linkText: 'View on SuperRare'
  },
  {
    year: '2021',
    title: 'CNN Interview - NFT Market Impact',
    venue: 'International Media',
    description: 'Featured alongside artist Osinachi explaining how NFTs transformed digital artists\' lives',
    highlight: 'Mainstream media coverage',
    link: 'https://www.youtube.com/watch?v=mrtn6LEDY8U&ab_channel=CNN',
    linkText: 'Watch CNN Interview'
  },
  {
    year: '2021',
    title: 'Kate Vass Galerie',
    venue: 'Zürich, Switzerland',
    description: 'Showcased "What is Art?" in AI & Generative Art exhibitions at pioneering digital art gallery',
    highlight: 'Early crypto art pioneer',
    link: 'https://www.katevassgalerie.com/artist/carlos-marcial/',
    linkText: 'Visit Gallery Page'
  },
  {
    year: '2022',
    title: 'Right Click Save Feature',
    venue: 'NFT Art Journal',
    description: 'Profiled as "probably the most successful crypto artist to emerge from Mexico City"',
    highlight: 'Mexico City crypto art scene',
    link: 'https://www.rightclicksave.com/article/on-crypto-arts-mexican-roots',
    linkText: 'Read Article'
  }
];


export default function TerminalExhibitions() {
  return (
    <section className="py-8">
      <TerminalWindow command="ls -la exhibitions/">
        <div className="space-y-4">
          {exhibitions.map((exhibition, index) => (
            <div key={index} className="border-l-2 border-primary pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-primary">{exhibition.title}</h3>
                  <div className="text-sm text-magenta">{exhibition.venue}</div>
                </div>
                <div className="text-sm text-muted-foreground mt-1 md:mt-0">
                  {exhibition.year}
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-1">
                {exhibition.description}
              </div>
              <div className="text-sm text-primary font-medium mb-2">
                → {exhibition.highlight}
              </div>
              {exhibition.link && (
                <div>
                  <a 
                    href={exhibition.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-magenta transition-colors duration-200 underline text-sm font-medium"
                  >
                    → {exhibition.linkText || 'View More'}
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