import { NextRequest, NextResponse } from "next/server";
import { Preference } from "mercadopago";
import { getMercadoPagoClient } from "@/lib/mercadopago";
import { produtos } from "@/lib/produtos";

type ItemCarrinho = {
  slug: string;
  quantidade: number;
};

export async function POST(req: NextRequest) {
  try {
    const { itens }: { itens: ItemCarrinho[] } = await req.json();

    if (!itens || itens.length === 0) {
      return NextResponse.json(
        { erro: "Carrinho vazio." },
        { status: 400 }
      );
    }

    // Recalcula os preços a partir do catálogo do servidor — nunca confia no
    // preço que vier do navegador, para evitar fraude de preço alterado.
    const itensMercadoPago = itens.map((item) => {
      const produto = produtos.find((p) => p.slug === item.slug);
      if (!produto) {
        throw new Error(`Produto não encontrado: ${item.slug}`);
      }
      return {
        id: produto.slug,
        title: produto.nome,
        quantity: item.quantidade,
        unit_price: produto.preco,
        currency_id: "BRL"
      };
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const client = getMercadoPagoClient();
    const preference = new Preference(client);

    const resultado = await preference.create({
      body: {
        items: itensMercadoPago,
        back_urls: {
          success: `${siteUrl}/checkout/sucesso`,
          failure: `${siteUrl}/checkout/erro`,
          pending: `${siteUrl}/checkout/pendente`
        },
        auto_return: "approved"
      }
    });

    return NextResponse.json({
      id: resultado.id,
      init_point: resultado.init_point
    });
  } catch (erro) {
    console.error(erro);
    return NextResponse.json(
      { erro: "Não foi possível iniciar o pagamento." },
      { status: 500 }
    );
  }
}
