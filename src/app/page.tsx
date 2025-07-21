import TerminalHeader from '@/components/TerminalHeader';
import TerminalExperience from '@/components/TerminalExperience';
import TerminalSkills from '@/components/TerminalSkills';
import TerminalProjects from '@/components/TerminalProjects';
import TerminalEducation from '@/components/TerminalEducation';
import TerminalExhibitions from '@/components/TerminalExhibitions';
import TerminalMedia from '@/components/TerminalMedia';
import TerminalContact from '@/components/TerminalContact';
import DownloadPDFButton from '@/components/DownloadPDFButton';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <DownloadPDFButton />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <TerminalHeader />
        <TerminalExperience />
        <TerminalSkills />
        <TerminalProjects />
        <TerminalEducation />
        <TerminalExhibitions />
        <TerminalMedia />
        <TerminalContact />
      </div>
    </main>
  );
}
