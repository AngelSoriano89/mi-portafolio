// src/components/common/SocialLinks.jsx

import React from 'react';

const links = [
  { href: 'mailto:angelsorianodeveloper89@gmail.com', label: 'Email', icon: 'email' },
  { href: 'https://github.com/AngelSoriano89', label: 'GitHub', icon: 'github' },
  { href: 'https://www.linkedin.com/in/angel-soriano-98353b142/', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://codepen.io/angelsoriano89', label: 'CodePen', icon: 'codepen' },
  // WhatsApp con código de país +593 => 593
  { href: 'https://wa.me/593985150696', label: 'WhatsApp', icon: 'whatsapp' },
];

const Icon = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'email':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Zm2.727-.75a.75.75 0 0 0-.477 1.332l7.5 6a.75.75 0 0 0 .9 0l7.5-6a.75.75 0 0 0-.923-1.176L12 12.585 4.704 5.856a.75.75 0 0 0-.477-.156Z" />
        </svg>
      );
    case 'github':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path fillRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.637 22.412c.575.104.788-.25.788-.556 0-.275-.011-1.184-.017-2.148-3.206.696-3.882-1.374-3.882-1.374-.523-1.327-1.278-1.68-1.278-1.68-1.044-.714.079-.699.079-.699 1.155.081 1.763 1.187 1.763 1.187 1.027 1.761 2.695 1.253 3.35.958.104-.744.402-1.254.73-1.541-2.558-.291-5.247-1.279-5.247-5.692 0-1.258.451-2.285 1.187-3.09-.119-.29-.514-1.46.113-3.043 0 0 .966-.31 3.167 1.181A11.02 11.02 0 0 1 12 6.852c.979.004 1.964.133 2.884.39 2.2-1.491 3.165-1.181 3.165-1.181.629 1.583.234 2.753.115 3.043.739.805 1.186 1.832 1.186 3.09 0 4.425-2.694 5.397-5.26 5.684.413.355.781 1.056.781 2.13 0 1.537-.014 2.775-.014 3.154 0 .309.21.666.794.553A11.5 11.5 0 0 0 12 .5Z" clipRule="evenodd"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5ZM.5 8.25h4V23.5h-4V8.25Zm7.25 0h3.833v2.084h.053c.534-1.012 1.84-2.084 3.785-2.084 4.046 0 4.792 2.663 4.792 6.128v9.122h-4V15.8c0-1.84-.033-4.206-2.563-4.206-2.567 0-2.96 2.006-2.96 4.072v7.834h-4V8.25Z"/>
        </svg>
      );
    case 'codepen':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M20.5 8.34 12.75 3.2a1.5 1.5 0 0 0-1.5 0L3.5 8.34A1.5 1.5 0 0 0 3 9.61v4.78c0 .53.28 1.02.74 1.27l7.75 5.14c.47.31 1.07.31 1.54 0l7.75-5.14c.46-.3.74-.8.74-1.27V9.6c0-.53-.28-1.02-.74-1.27ZM12 5.07l6.26 4.14L15 11.7 12 9.7l-3 2 3 2-3.26 2.5L5.74 13.2 12 9.07Zm-6.26 9.72L9 12.3v2.63l-3.26 1.86Zm6.26 4.14 3.26-2.16V14.4L12 16.4v2.53Zm4.74-2.28L15 14.93V12.3l3.26 2.49ZM12 13.4l-3-2 3-2 3 2-3 2Z"/>
        </svg>
      );
    case 'whatsapp':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12.04 0C5.5 0 .21 5.29.21 11.83c0 2.09.54 4.1 1.58 5.9L0 24l6.43-1.66a11.77 11.77 0 0 0 5.61 1.43h.01c6.54 0 11.83-5.29 11.83-11.83a11.8 11.8 0 0 0-3.36-8.46ZM12.05 21.3a9.48 9.48 0 0 1-4.83-1.32l-.35-.2-3.81.99 1.02-3.71-.22-.38A9.46 9.46 0 1 1 12.05 21.3Zm5.5-7.12c-.3-.15-1.77-.87-2.05-.96-.27-.1-.47-.15-.66.16-.2.3-.76.96-.93 1.15-.17.2-.34.23-.64.08-.3-.15-1.24-.46-2.36-1.47-.87-.78-1.45-1.74-1.62-2.03-.17-.3-.02-.46.13-.61.13-.12.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.38-.02-.54-.07-.15-.66-1.58-.9-2.17-.24-.58-.49-.5-.66-.51h-.56c-.2 0-.5.07-.76.38-.26.3-1 1-1 2.42 0 1.42 1.03 2.8 1.17 2.99.15.2 2.03 3.1 4.92 4.3.69.3 1.22.47 1.64.6.69.22 1.32.19 1.82.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35Z"/>
        </svg>
      );
    default:
      return null;
  }
};

const SocialLinks = ({ className = '' }) => {
  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {links.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-current hover:text-accent transition-colors"
            aria-label={item.label}
            title={item.label}
          >
            <Icon name={item.icon} className="w-6 h-6 md:w-7 md:h-7" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
