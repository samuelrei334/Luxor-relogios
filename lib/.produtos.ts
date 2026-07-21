export type Produto = {
  slug: string;
  nome: string;
  colecao: string;
  preco: number; // em reais
  descricao: string;
  material: string;
  resistencia: string;
  imagem: string;
};

// PLACEHOLDER — troque nome, preço, descrição e imagem de cada relógio real
// depois. As imagens podem ser links (https://...) ou arquivos colocados em
// /public/produtos/ (ex: "/produtos/aço-01.jpg").
export const produtos: Produto[] = [
  {
    slug: "meridian-aco",
    nome: "Meridian Aço",
    colecao: "Linha Clássica",
    preco: 489.9,
    descricao:
      "Caixa em aço escovado de 40mm, mostrador minimalista e pulseira em couro legítimo.",
    material: "Aço inoxidável / Couro",
    resistencia: "5 ATM",
    imagem: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200"
  },
  {
    slug: "obsidian-preto",
    nome: "Obsidian Preto",
    colecao: "Linha Noir",
    preco: 549.9,
    descricao:
      "Acabamento PVD preto fosco, visor de cristal de safira e pulseira em aço milanês.",
    material: "Aço PVD / Milanês",
    resistencia: "10 ATM",
    imagem: "https://images.unsplash.com/photo-1495856458515-0637185db551?q=80&w=1200"
  },
  {
    slug: "solaris-dourado",
    nome: "Solaris Dourado",
    colecao: "Linha Prestígio",
    preco: 699.9,
    descricao:
      "Banho dourado 18k, índices aplicados e movimento de precisão japonês.",
    material: "Aço banhado a ouro",
    resistencia: "3 ATM",
    imagem: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200"
  },
  {
    slug: "vento-couro",
    nome: "Vento Couro",
    colecao: "Linha Clássica",
    preco: 429.9,
    descricao:
      "Design fino e leve, caixa em aço 38mm e pulseira em couro trançado.",
    material: "Aço / Couro trançado",
    resistencia: "3 ATM",
    imagem: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200"
  }
];
