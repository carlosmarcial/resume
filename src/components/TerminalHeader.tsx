'use client';

import TerminalWindow from './TerminalWindow';

export default function TerminalHeader() {
  return (
    <section className="py-8">
      <TerminalWindow command="whoami" className="mb-8">
        <div className="space-y-2">
          <div className="text-2xl font-bold text-primary">Carlos Marcial</div>
          <div className="text-lg text-magenta">Digital Artist & Full-Stack Developer</div>
          <div className="text-sm text-muted-foreground">
            <span className="text-magenta">›</span> Mexico City-born | 
            <span className="text-primary"> Crypto Art Pioneer since 2019</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-magenta">›</span> Seven-figure NFT sales | 
            <span className="text-primary"> 250+ unique collectors</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-magenta">›</span> Featured at Sotheby&apos;s Paris (2023) | 
            <span className="text-primary"> CNN Interview (2021)</span>
          </div>
        </div>
      </TerminalWindow>

      <TerminalWindow command="cat summary.txt">
        <div className="text-muted-foreground">
          <span className="text-magenta">›</span> Mexico City-born digital artist and self-taught software developer
          <br />
          <span className="text-magenta">›</span> Emerged as one of the first artists to sustain full-time living from NFTs (2020)
          <br />
          <span className="text-magenta">›</span> Explores intersection of technology, cryptocurrency, and art history from Latin American perspective
          <br />
          <span className="text-magenta">›</span> Builds AI-driven web applications and integrates cutting-edge tools into creative projects
          <br />
          <span className="text-magenta">›</span> Leverages AI-assisted development and Model Context Protocol for innovative solutions
        </div>
      </TerminalWindow>
    </section>
  );
}