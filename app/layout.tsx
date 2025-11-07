import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Intelliwave | Agence d'automatisation IA & chatbots sur mesure",
  description:
    "Intelliwave est une agence d'automatisation IA spécialisée dans les chatbots personnalisés qui transforment l'expérience client et les process internes.",
  openGraph: {
    title: "Intelliwave | Agence d'automatisation IA & chatbots sur mesure",
    description:
      "Accélérez votre croissance avec des chatbots IA performants qui automatisent vos interactions client, ventes et support.",
    url: "https://agentic-b4e8ae79.vercel.app",
    type: "website"
  },
  metadataBase: new URL("https://agentic-b4e8ae79.vercel.app")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
