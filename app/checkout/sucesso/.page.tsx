import Link from "next/link";

export default function Sucesso() {
  return (
    <main className="mx-auto max-w-xl px-6 py-28 text-center">
      <p className="font-mono text-xs uppercase tracking-widest2 text-brass">
        Pagamento aprovado
      </p>
      <h1 className="mt-4 font-display text-3xl text-cream">
        Obrigado pela compra!
      </h1>
      <p className="mt-4 font-sans text-sm leading-relaxed text-mute">
        Recebemos seu pagamento e já estamos preparando o envio do seu
        relógio. Você receberá as atualizações por e-mail.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-brass px-6 py-3 font-sans text-sm uppercase tracking-wide text-brass transition hover:bg-brass hover:text-ink"
      >
        Voltar à loja
      </Link>
    </main>
  );
}
