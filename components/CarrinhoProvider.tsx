"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";
import { produtos } from "@/lib/produtos";

export type ItemCarrinho = {
  slug: string;
  quantidade: number;
};

type CarrinhoContexto = {
  itens: ItemCarrinho[];
  adicionar: (slug: string) => void;
  remover: (slug: string) => void;
  definirQuantidade: (slug: string, quantidade: number) => void;
  esvaziar: () => void;
  totalItens: number;
  totalPreco: number;
};

const Contexto = createContext<CarrinhoContexto | null>(null);

const CHAVE_ARMAZENAMENTO = "loja-relogios:carrinho";

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    try {
      const salvo = window.localStorage.getItem(CHAVE_ARMAZENAMENTO);
      if (salvo) setItens(JSON.parse(salvo));
    } catch {
      // ignora dados corrompidos
    } finally {
      setCarregado(true);
    }
  }, []);

  useEffect(() => {
    if (!carregado) return;
    window.localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(itens));
  }, [itens, carregado]);

  function adicionar(slug: string) {
    setItens((atual) => {
      const existente = atual.find((i) => i.slug === slug);
      if (existente) {
        return atual.map((i) =>
          i.slug === slug ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }
      return [...atual, { slug, quantidade: 1 }];
    });
  }

  function remover(slug: string) {
    setItens((atual) => atual.filter((i) => i.slug !== slug));
  }

  function definirQuantidade(slug: string, quantidade: number) {
    if (quantidade <= 0) {
      remover(slug);
      return;
    }
    setItens((atual) =>
      atual.map((i) => (i.slug === slug ? { ...i, quantidade } : i))
    );
  }

  function esvaziar() {
    setItens([]);
  }

  const totalItens = itens.reduce((soma, i) => soma + i.quantidade, 0);
  const totalPreco = itens.reduce((soma, i) => {
    const produto = produtos.find((p) => p.slug === i.slug);
    return soma + (produto ? produto.preco * i.quantidade : 0);
  }, 0);

  return (
    <Contexto.Provider
      value={{
        itens,
        adicionar,
        remover,
        definirQuantidade,
        esvaziar,
        totalItens,
        totalPreco
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export function useCarrinho() {
  const contexto = useContext(Contexto);
  if (!contexto) {
    throw new Error("useCarrinho precisa estar dentro de <CarrinhoProvider>");
  }
  return contexto;
}
