"use client";

import { useCarrinho } from "./CarrinhoProvider";

function formatarPreco(preco: number) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function BarraCarrinho() {
  const { totalItens, totalPreco } = useCarrinho();

  if (totalItens === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-hairline bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
            {totalItens} {totalItens === 1 ? "item" : "itens"} no carrinho
          </span>
          <span className="font-display text-lg text-cream">
            {formatarPreco(totalPreco)}
          </span>
        </div>
        <button className="border border-brass px-5 py-2 font-sans text-xs uppercase tracking-wide text-brass transition hover:bg-brass hover:text-ink">
          Ver carrinho
        </button>
      </div>
    </div>
  );
}
