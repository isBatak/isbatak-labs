export type Billing = "monthly" | "yearly"

export const individualPrice: Record<Billing, number> = { monthly: 19, yearly: 171 }
export const businessPrice: Record<Billing, number> = { monthly: 990, yearly: 8910 }
export const onboardingSprintPrice = 1500

export const agencySlots = { total: 2, open: 2 }
export const foundingSeats = 50

export const libraryOpen: boolean = false
export const checkoutUrls: Record<Billing, string | null> = { monthly: null, yearly: null }

export function isBilling(value: string | null): value is Billing {
  return value === "monthly" || value === "yearly"
}

const euro = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 2 })
const wholeEuro = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })

export function formatEuro(amount: number) {
  return Number.isInteger(amount) ? wholeEuro.format(amount) : euro.format(amount)
}
