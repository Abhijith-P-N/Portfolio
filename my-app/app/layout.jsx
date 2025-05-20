// app/layout.jsx

import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Portfolio',
  description: 'Frontend Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <Link href="/" className="navbar-name">Abhijith</Link>
          <nav className="navbar-menu">
            <Link href="/#about">About</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
