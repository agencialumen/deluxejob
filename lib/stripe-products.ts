export interface SubscriptionProduct {
  id: string
  tier: "prata" | "gold" | "platinum" | "diamante"
  name: string
  description: string
  priceInCents: number
  stripePriceId: string // You'll get this from Stripe Dashboard after creating products
  features: string[]
}

export const SUBSCRIPTION_PRODUCTS: SubscriptionProduct[] = [
  {
    id: "sub-prata",
    tier: "prata",
    name: "Assinatura Prata",
    description: "Acesso a conteúdo exclusivo básico",
    priceInCents: 1490, // Updated to match your 14.90 price
    stripePriceId: "price_1SEiNQ5I63txB0RGqcNHwv9L", // Updated to TEST mode price ID for 14.90
    features: ["Acesso a stories exclusivos", "Conteúdo premium básico", "Suporte prioritário"],
  },
  {
    id: "sub-gold",
    tier: "gold",
    name: "Assinatura Gold",
    description: "Acesso completo a conteúdo premium",
    priceInCents: 3990, // Updated to match your 39.90 price
    stripePriceId: "price_1SEiO55I63txB0RGVFLZzm3c", // Updated to TEST mode price ID for 39.90
    features: ["Tudo do Prata", "Vídeos exclusivos", "Comentários prioritários", "Badge Gold no perfil"],
  },
  {
    id: "sub-platinum",
    tier: "platinum",
    name: "Assinatura Platinum",
    description: "Experiência VIP completa",
    priceInCents: 7990, // Updated to match your 79.90 price
    stripePriceId: "price_1SEiOW5I63txB0RGTdHiEWXW", // Updated to TEST mode price ID for 79.90
    features: ["Tudo do Gold", "Mensagens diretas", "Conteúdo behind the scenes", "Badge Platinum exclusivo"],
  },
  {
    id: "sub-diamante",
    tier: "diamante",
    name: "Assinatura Diamante",
    description: "Acesso total e benefícios exclusivos",
    priceInCents: 9990, // Updated to match your 99.90 price
    stripePriceId: "price_1SEiQC5I63txB0RGByp1qrEo", // Updated to TEST mode price ID for 99.90
    features: [
      "Tudo do Platinum",
      "Videochamadas mensais",
      "Presentes personalizados",
      "Badge Diamante único",
      "Acesso antecipado a novidades",
    ],
  },
]

export function getSubscriptionProduct(tier: string): SubscriptionProduct | undefined {
  return SUBSCRIPTION_PRODUCTS.find((p) => p.tier === tier)
}

export function getSubscriptionProductById(id: string): SubscriptionProduct | undefined {
  return SUBSCRIPTION_PRODUCTS.find((p) => p.id === id)
}
