import type { ReactNode } from "react";
import { version as nextVersion } from "next/package.json";
import "./globals.css";

export const metadata = {
  title: "Spectivis Cloud sample: Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-framework="nextjs">
      <body>
        <div className="page">
          <header className="top">
            <span className="host">Next.js sample</span>
            <nav>
              <a href="#notes">Notes</a>
              <a className="outline" href="https://spectivis.com">
                Spectivis Cloud
              </a>
            </nav>
          </header>
          {children}
          <footer className="foot">
            <span>Next.js {nextVersion}, App Router</span>
            <a href="https://spectivis.com">spectivis.com</a>
          </footer>
        </div>
      </body>
    </html>
  );
}
