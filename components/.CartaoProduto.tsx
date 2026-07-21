"use client";

import Image from "next/image";
import { Produto } from "@/lib/produtos";
import { useCarrinho } from "./CarrinhoProvider";
import { useState } from "react";

function formatarPreco(preco: number) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function CartaoProduto({ produto }: { produto: Produto }) {
  const { adicionar } = useCarrinho();
  const [adicionado, setAdicionado] = useState(false);

  function handleAdicionar() {
    adicionar(produto.slug);
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 1600);
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-hairline bg-surface">
      <div className="relative aspect-square overflow-hidden bg-surface2">
        <Image
          src={produto.imagem}
          alt={produto.nome}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
            {produto.colecao}
          </p>
          <h3 className="font-display text-lg text-cream">{produto.nome}</h3>
        </div>

        <p className="flex-1 font-sans text-sm leading-relaxed text-mute">
          {produto.descricao}
        </p>

        <div className="flex justify-between font-mono text-xs text-mute">
          <span>{produto.material}</span>
          <span>{produto.resistencia}</span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="font-display text-xl text-cream">
            {formatarPreco(produto.preco)}
          </span>
          <button
            onClick={handleAdicionar}
            className="border border-brass px-4 py-2 font-sans text-xs uppercase tracking-wide text-brass transition hover:bg-brass hover:text-ink"
          >
            {adicionado ? "Adicionado" : "Adicionar"}
          </button>
        </div>
      </div>
    </div>
  );
}
