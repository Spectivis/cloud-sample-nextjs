import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Spectivis Cloud sample: Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
