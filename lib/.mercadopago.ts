import { MercadoPagoConfig } from "mercadopago";

// O Access Token nunca fica exposto ao navegador — só existe aqui no servidor,
// lido da variável de ambiente MERCADOPAGO_ACCESS_TOKEN.
export function getMercadoPagoClient() {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error(
      "MERCADOPAGO_ACCESS_TOKEN não configurado. Adicione-o nas variáveis de ambiente."
    );
  }
  return new MercadoPagoConfig({ accessToken });
}
