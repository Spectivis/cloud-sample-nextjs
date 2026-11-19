import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Spectivis Cloud sample: Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bar">
          <div className="wrap">
            <a className="wordmark" href="https://spectivis.com">
              Spectivis <span>Cloud</span>
            </a>
            <nav>
              <a href="https://spectivis.com">spectivis.com</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="foot">
          <div className="wrap">
            <span>Hosted on Spectivis Cloud</span>
            <a href="https://spectivis.com">spectivis.com</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
