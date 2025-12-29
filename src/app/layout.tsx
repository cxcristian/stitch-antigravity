import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solare - Beauty Studio",
  description: "Un espacio exclusivo donde la belleza se encuentra con el arte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
