import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { CarrinhoProvider } from "@/components/CarrinhoProvider";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: "luxor relógios",
  description: "Relógios de precisão, direto da luxor para o seu pulso."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} bg-ink font-sans text-cream`}
      >
        <CarrinhoProvider>
          <Cabecalho />
          {children}
          <Rodape />
        </CarrinhoProvider>
      </body>
    </html>
  );
}
