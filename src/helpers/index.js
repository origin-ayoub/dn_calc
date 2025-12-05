// Formatters
export function formatMoney(n) {
    if (!isFinite(n) || isNaN(n)) return "—";
    return n >= 1e6
        ? (n / 1e6).toFixed(3).replace(/\.?0+$/, "") + "M"
        : n >= 1000
            ? n.toLocaleString(undefined, { maximumFractionDigits: 0 })
            : n.toFixed(2);
}

// Commission calculators per market
export const commissionSpaceship = (price) => price * 0.05;

export const commissionUnstoppable = (price) => price * .03;

export function commissionSedo(price, saleType = "buy-now-parked") {
    // saleType: "buy-now-parked" (10%), "marketplace" (15%), "mls" (20%)
    const pct = saleType === "buy-now-parked" ? 0.10 : saleType === "mls" ? 0.20 : 0.15;
    return price * pct;
}

export function commissionAfternic(price, usingNameservers = true) {
    const pct = usingNameservers ? 0.20 : 0.30;
    return price * pct;
}

export function commissionPorkbun(price, mode = "marketplace") {
    // mode: "marketplace" 7%, "auction" 15%
    const pct = mode === "auction" ? 0.15 : 0.07;
    return price * pct;
}

export function commissionAtom(price, listing = "standard", noCoin = false) {
    // listing: "paylink 4.5%", "standard 7.5%", "plus 15%", "premium 30%"
    // premium: With "no coin" flag, top tier below $4998 uses 35% instead of 30%.

    if (listing === "paylink") return price * 0.045;
    if (listing === "standard") return price * 0.075;
    if (listing === "plus") return price * 0.15;
    if (listing === "premium") {
        if (price <= 4998) return price * (noCoin ? 0.35 : 0.30);
        if (price <= 49999) return price * 0.25;
        if (price <= 74999) return price * 0.20;
        return price * 0.15;
    }

    return 0;
}

// Net received after commission
export function netAfterCommission(price, commissionFn) {
    const commission = commissionFn(price);
    return { commission, net: price - commission };
}
