'use client';

import TerminalWindow from './TerminalWindow';

interface ContactItem {
  label: string;
  value: string;
  link?: string;
}

const contacts: ContactItem[] = [
  {
    label: 'Email:',
    value: 'carlosmarcialtorres@gmail.com',
    link: 'mailto:carlosmarcialtorres@gmail.com'
  },
  {
    label: 'GitHub:',
    value: 'github.com/carlosmarcial',
    link: 'https://github.com/carlosmarcial'
  },
  {
    label: 'Twitter:',
    value: '@carlosmarcialt',
    link: 'https://twitter.com/carlosmarcialt'
  },
  {
    label: 'SuperRare:',
    value: 'superrare.com/@carlosmarcial',
    link: 'https://superrare.com/@carlosmarcial'
  }
];

export default function TerminalContact() {
  return (
    <section className="py-8">
      <TerminalWindow command="cat contact.txt">
        <div className="space-y-4">
          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <div className="text-magenta font-semibold text-sm min-w-fit">
                  {contact.label}
                </div>
                <div className="flex-1 break-all">
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-magenta transition-colors duration-200 text-sm"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm">{contact.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Availability Section */}
          <div className="mt-8 pt-4 border-t border-border space-y-2">
            <div className="text-sm text-muted-foreground">
              <span className="text-magenta">›</span> Available for: Development, Art Collaborations, Consulting
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="text-magenta">›</span> Location: Remote | Open to travel
            </div>
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
}