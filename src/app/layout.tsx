import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Configure Space Grotesk for Headings
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Configure Plus Jakarta Sans for Body Text
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Configure JetBrains Mono for Code/Eyebrow styling
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zertte.org"),
  title: "Zertte Case Championship — Кейс-чемпионат по биоинформатике",
  description: "Главный студенческий кейс-чемпионат по биоинформатике и вычислительной геномике. Решайте реальные клинические задачи, анализируйте FASTQ данные и соревнуйтесь за призовой фонд.",
  keywords: ["биоинформатика", "кейс-чемпионат", "геномика", "анализ данных", "программирование", "биология", "Zertte", "FASTQ", "Variant Calling"],
  authors: [{ name: "Zertte Team" }],
  openGraph: {
    title: "Zertte Case Championship — Кейс-чемпионат по биоинформатике",
    description: "Решайте реальные задачи геномики, анализируйте биологические данные и боритесь за призовой фонд вместе с лучшими студентами.",
    type: "website",
    locale: "ru_RU",
    url: "https://zertte.org",
    siteName: "Zertte Case Championship",
    images: [
      {
        url: "/og-image.png", // Placeholder path for OpenGraph share preview
        width: 1200,
        height: 630,
        alt: "Zertte Case Championship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zertte Case Championship — Кейс-чемпионат по биоинформатике",
    description: "Главное студенческое событие в сфере вычислительной биологии. Решайте кейсы онлайн.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
