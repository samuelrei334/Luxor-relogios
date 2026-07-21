import RelogioHero from "@/components/RelogioHero";
import CartaoProduto from "@/components/CartaoProduto";
import { produtos } from "@/lib/produtos";

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-20 sm:py-28 lg:flex-row lg:justify-between">
        <div className="max-w-md text-center lg:text-left">
          <p className="font-mono text-xs uppercase tracking-widest2 text-brass">
            Precisão desde o primeiro segundo
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl">
            Cada segundo, marcado com intenção.
          </h1>
          <p className="mt-5 font-sans text-base leading-relaxed text-mute">
            Relógios selecionados para quem entende que tempo bem marcado é
            tempo bem vivido. Compre online, pagamento seguro, sem sair do
            site.
          </p>
          <a
            href="#colecao"
            className="mt-8 inline-block border border-brass px-6 py-3 font-sans text-sm uppercase tracking-wide text-brass transition hover:bg-brass hover:text-ink"
          >
            Ver coleção
          </a>
        </div>

        <RelogioHero />
      </section>

      <section id="colecao" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between border-b border-hairline pb-4">
          <h2 className="font-display text-2xl text-cream">Coleção</h2>
          <span className="font-mono text-xs text-mute">
            {produtos.length} modelos
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {produtos.map((produto) => (
            <CartaoProduto key={produto.slug} produto={produto} />
          ))}
        </div>
      </section>
    </main>
  );
}
