# Domain Price Calculator

A fast and accurate utility for **domain investors** who want to understand how different marketplaces affect their final payout.
This tool calculates:

* Marketplace commission fees
* Final net amount after fees
* Required listing price based on marketplace rules
* Special conditions (tiered commissions, minimum fees, “no coin” modes, etc.)

Designed for domain flippers, and anyone listing domains on platforms such as **Atom**, **Sedo**, **Afternic**, and others.

---

## Features

### Multi-Marketplace Calculations

Each marketplace has its own fee structure. This tool supports:

* Percentage-based commissions
* Tiered or conditional fees
* Minimum or maximum fees
* Special overrides (e.g., Atom “No Coin 35%” below $4,998)

### Live Listing Price Simulation

As you enter a domain price:

* Commission is calculated automatically
* Net after commission updates instantly
* Required listing price adjusts based on marketplace logic

---

## How the Calculator Works

### 1. **User enters the desired domain price**

Example:

```
$10,000
```

### 2. **Each marketplace applies its own commission rules**

Example (pretend values):

| Marketplace | Commission | Net After Fees |
| ----------- | ---------- | -------------- |
| Atom        | 15%        | $8,500         |
| Sedo        | 20%        | $8,000         |
| Afternic    | 25%        | $7,500         |

### 3. **Special conditions are applied if enabled**

Example:
Atom “No Coin” mode → 35% if price < $4,998.

### 4. **Results are displayed in a clean table**

Each row shows:

* Marketplace name
* Fee description
* Fee amount
* Final net amount

---


## Core Formula

### **Commission Amount**

```
commission = price * commissionRate
```

### **Net**

```
net = price - commission
```

---


## Installation

```
git clone https://github.com/yourrepo/domain-price-calculator
cd domain-price-calculator
npm install
npm run dev
```

---

## Target Users

* Domain traders
* Domain portfolio managers
* Anyone comparing marketplace commissions

---

## License

MIT License.