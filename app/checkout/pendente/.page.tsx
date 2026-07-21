import Link from "next/link";

export default function Pendente() {
  return (
    <main className="mx-auto max-w-xl px-6 py-28 text-center">
      <p className="font-mono text-xs uppercase tracking-widest2 text-brass">
        Pagamento em análise
      </p>
      <h1 className="mt-4 font-display text-3xl text-cream">
        Estamos processando seu pagamento
      </h1>
      <p className="mt-4 font-sans text-sm leading-relaxed text-mute">
        Isso costuma acontecer com boleto ou Pix aguardando confirmação.
        Assim que for aprovado, você receberá um e-mail de confirmação.
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
