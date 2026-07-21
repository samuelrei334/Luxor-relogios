"use client";

import { useState } from "react";
import Link from "next/link";
import { useCarrinho } from "@/components/CarrinhoProvider";
import { produtos } from "@/lib/produtos";

function formatarPreco(preco: number) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function Carrinho() {
  const { itens, definirQuantidade, remover, totalPreco } = useCarrinho();
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function finalizarCompra() {
    setErro(null);
    setCarregando(true);
    try {
      const resposta = await fetch("/api/criar-preferencia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itens })
      });
      const dados = await resposta.json();
      if (!resposta.ok || !dados.init_point) {
        throw new Error(dados.erro || "Falha ao iniciar pagamento.");
      }
      window.location.href = dados.init_point;
    } catch (e) {
      setErro(
        "Não foi possível iniciar o pagamento agora. Tente novamente em instantes."
      );
      setCarregando(false);
    }
  }

  if (itens.length === 0) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-2xl text-cream">
          Seu carrinho está vazio
        </h1>
        <p className="mt-3 font-sans text-sm text-mute">
          Explore a coleção e adicione um relógio ao carrinho.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block border border-brass px-6 py-3 font-sans text-sm uppercase tracking-wide text-brass transition hover:bg-brass hover:text-ink"
        >
          Ver coleção
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-2xl text-cream">Seu carrinho</h1>

      <div className="mt-8 divide-y divide-hairline border-y border-hairline">
        {itens.map((item) => {
          const produto = produtos.find((p) => p.slug === item.slug);
          if (!produto) return null;
          return (
            <div
              key={item.slug}
              className="flex items-center justify-between gap-4 py-5"
            >
              <div>
                <p className="font-display text-base text-cream">
                  {produto.nome}
                </p>
                <p className="font-mono text-xs text-mute">
                  {formatarPreco(produto.preco)} / unidade
                </p>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min={1}
                  value={item.quantidade}
                  onChange={(e) =>
                    definirQuantidade(item.slug, Number(e.target.value))
                  }
                  className="w-16 border border-hairline bg-surface px-2 py-1 text-center font-mono text-sm text-cream"
                />
                <button
                  onClick={() => remover(item.slug)}
                  className="font-sans text-xs uppercase text-mute transition hover:text-brass"
                >
                  Remover
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="font-sans text-sm uppercase tracking-wide text-mute">
          Total
        </span>
        <span className="font-display text-2xl text-cream">
          {formatarPreco(totalPreco)}
        </span>
      </div>

      {erro && (
        <p className="mt-4 font-sans text-sm text-red-400">{erro}</p>
      )}

      <button
        onClick={finalizarCompra}
        disabled={carregando}
        className="mt-8 w-full border border-brass bg-brass py-4 text-center font-sans text-sm uppercase tracking-wide text-ink transition hover:bg-transparent hover:text-brass disabled:opacity-60"
      >
        {carregando ? "Abrindo pagamento..." : "Finalizar compra"}
      </button>
    </main>
  );
      }
