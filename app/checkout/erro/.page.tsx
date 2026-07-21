import Link from "next/link";

export default function Erro() {
  return (
    <main className="mx-auto max-w-xl px-6 py-28 text-center">
      <p className="font-mono text-xs uppercase tracking-widest2 text-brass">
        Pagamento não concluído
      </p>
      <h1 className="mt-4 font-display text-3xl text-cream">
        Algo deu errado
      </h1>
      <p className="mt-4 font-sans text-sm leading-relaxed text-mute">
        Seu pagamento não foi concluído. Nenhum valor foi cobrado. Você pode
        tentar novamente.
      </p>
      <Link
        href="/carrinho"
        className="mt-8 inline-block border border-brass px-6 py-3 font-sans text-sm uppercase tracking-wide text-brass transition hover:bg-brass hover:text-ink"
      >
        Voltar ao carrinho
      </Link>
    </main>
  );
}
