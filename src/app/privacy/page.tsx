import type { Metadata } from 'next';
import Link from 'next/link';
import TerminalWindow from '@/components/TerminalWindow';

export const metadata: Metadata = {
  title: 'Privacy Policy - Claudio | Carlos Marcial',
  description:
    'Privacy policy for Claudio, the personal AI assistant operated by Carlos Marcial, including how it uses Google user data.',
};

const EFFECTIVE_DATE = 'November 5, 2026';
const CONTACT_EMAIL = 'carlosmarcialtorres@gmail.com';

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-magenta font-semibold">{heading}</h2>
      <div className="space-y-3 text-sm sm:text-base text-foreground/90">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <TerminalWindow title="privacy.md" command="cat privacy.md">
          <div className="space-y-8">
            <header className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">Privacy Policy: Claudio</h1>
              <p className="text-sm text-muted-foreground">Effective {EFFECTIVE_DATE}</p>
            </header>

            <Section heading="Who this covers">
              <p>
                Claudio is a personal AI assistant built and operated by Carlos Marcial for his own use.
                It is not offered to the public, and the only Google account connected to it is Carlos&apos;s own.
                This policy explains what data Claudio accesses, why, and how it is handled.
              </p>
            </Section>

            <Section heading="Google data Claudio accesses">
              <p>When authorized through Google OAuth, Claudio may access:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Gmail: reading, labeling, drafting and, only after explicit approval, sending email.</li>
                <li>Google Calendar: reading events and, when asked, creating or updating them.</li>
                <li>Google Drive, Docs and Sheets: reading or editing files when asked to.</li>
                <li>Google Contacts: read-only, to recognize who a message is from.</li>
              </ul>
            </Section>

            <Section heading="How the data is used">
              <p>
                The data is used only to provide assistant features to Carlos: daily briefings, alerts about
                important email, meeting preparation, reminders about commitments, and tasks he requests.
                Claudio does not take irreversible actions, such as sending email, without his approval.
              </p>
            </Section>

            <Section heading="Storage and processing">
              <p>
                Claudio runs on a private server controlled by Carlos. OAuth tokens are stored on that server
                with owner-only file permissions. To generate responses, relevant excerpts may be processed by
                the AI model provider and memory service that power the assistant, solely to perform the
                requested task.
              </p>
            </Section>

            <Section heading="Sharing">
              <p>
                Google user data is not sold, not used for advertising, and not shared with anyone except the
                service providers needed to run the assistant as described above. Humans do not read the data,
                apart from Carlos himself.
              </p>
            </Section>

            <Section heading="Google API Services User Data Policy">
              <p>
                Claudio&apos;s use and transfer of information received from Google APIs adheres to the{' '}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-magenta"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </Section>

            <Section heading="Retention and revoking access">
              <p>
                Data is kept only as long as needed for the assistant&apos;s features. Access can be revoked at any
                time from{' '}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-magenta"
                >
                  Google Account permissions
                </a>
                , after which the stored token is deleted.
              </p>
            </Section>

            <Section heading="Contact">
              <p>
                Questions about this policy:{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary underline underline-offset-4 hover:text-magenta"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </Section>

            <footer className="pt-4 border-t border-border">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                ← back to carlosmarcial.com
              </Link>
            </footer>
          </div>
        </TerminalWindow>
      </div>
    </main>
  );
}
