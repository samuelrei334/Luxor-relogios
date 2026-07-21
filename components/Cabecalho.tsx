"use client";

import Link from "next/link";
import { useCarrinho } from "./CarrinhoProvider";

export default function Cabecalho() {
  const { totalItens } = useCarrinho();

  return (
    <header className="sticky top-0 z-30 border-b border-hairline/80 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-wide text-cream">
            luxor
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
            Relógios
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/#colecao"
            className="hidden font-sans text-sm text-mute transition hover:text-cream sm:block"
          >
            Coleção
          </Link>
          <Link
            href="/carrinho"
            className="flex items-center gap-2 font-sans text-sm text-cream"
          >
            <span>Carrinho</span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-brass px-1.5 font-mono text-xs text-brass">
              {totalItens}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
