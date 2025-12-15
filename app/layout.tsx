import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unleash Your Vision | Creative Agency",
  description: "We are a creative agency specializing in innovation and collaboration, turning bold concepts into visually stunning and highly engaging digital experiences that captivate audiences.",
  keywords: ["creative agency", "web design", "branding", "digital marketing", "innovation"],
  authors: [{ name: "Creativia" }],
  openGraph: {
    title: "Unleash Your Vision | Creative Agency",
    description: "Crafting transformative ideas into digital realities",
    type: "website",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// Material Symbols font needs to be loaded via link tag
const materialSymbolsLink = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
      rel="stylesheet"
    />
  </>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${fredoka.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
