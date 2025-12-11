import { useState, useMemo } from "react";
import {
    commissionSpaceship, commissionUnstoppable, commissionSedo,
    commissionAfternic, commissionAtom, commissionPorkbun, netAfterCommission,
} from "./helpers";

import TableRes from "./components/TableRes";
import PriceInput from "./components/PriceInput";
import ControlPb from "./components/ControlPb";
import ControlSedo from "./components/ControlSedo";
import ControlAtom from "./components/ControlAtom";
import ControlAfternic from "./components/ControlAfternic";
import TableCard from "./components/TableCard";


export default function App() {
    const [inputValue, setInputValue] = useState(5000);
    const [atomNoCoin, setAtomNoCoin] = useState(false);
    const [sedoType, setSedoType] = useState("buy-now-parked");
    const [atomListing, setAtomListing] = useState("standard");
    const [porkbunMode, setPorkbunMode] = useState("marketplace");
    const [afternicNameservers, setAfternicNameservers] = useState(true);

    const price = Number(inputValue) || 0;

    const markets = useMemo(() => {
        return [
            {
                id: "atom",
                name: "Atom",
                desc: () => atomListing === "paylink" ? "Atom (PAYLINK) 4.5%" :
                    atomListing === "standard" ? "Atom (STANDARD) 7.5%" :
                        atomListing === "plus" ? "Atom (PLUS) 15%" :
                            atomListing === "premium" ? (
                                atomNoCoin && price <= 4998 ? "Atom (PREMIUM — No Coin) 35%" :
                                    price <= 4998 ? "Atom (PREMIUM) 30%" :
                                        price <= 49999 ? "Atom (PREMIUM) 25%" :
                                            price <= 74999 ? "Atom (PREMIUM) 20%" :
                                                price >= 75000 ? "Atom (PREMIUM) 15%" :
                                                    "Atom (PREMIUM)") : "Atom — Invalid",
                commissionFn: (p) => commissionAtom(p, atomListing, atomNoCoin),
            },
            {
                id: "sedo",
                name: "Sedo",
                desc: () => (sedoType === "mls" ? "SedoMLS 20%" : sedoType === "buy-now-parked" ? "Buy‑Now / Parked 10%" : "Direct Marketplace 15%"),
                commissionFn: (p) => commissionSedo(p, sedoType),
            },
            {
                id: "afternic",
                name: "Afternic",
                desc: () => (afternicNameservers ? "Afternic NS ON 20%" : "Afternic NS OFF 30%"),
                commissionFn: (p) => commissionAfternic(p, afternicNameservers),
            },
            {
                id: "porkbun",
                name: "Porkbun",
                desc: () => (porkbunMode === "auction" ? "Auctions 15%" : "Marketplace 7%"),
                commissionFn: (p) => commissionPorkbun(p, porkbunMode),
            },
            {
                id: "spaceship",
                name: "Spaceship",
                desc: () => "Flat 5%",
                commissionFn: (p) => commissionSpaceship(p),
            },
            {
                id: "unstoppabledomains",
                name: "Unstoppable Domains",
                desc: () => "Flat 3%",
                commissionFn: (p) => commissionUnstoppable(p),
            },

        ];
    }, [sedoType, afternicNameservers, porkbunMode, atomListing, atomNoCoin, price]);

    const rows = markets.map((m) => {
        const netPrice = netAfterCommission(price, m.commissionFn);
        // const requiredListing = solveListingPriceForTargetNet(
        //     price,
        //     m.commissionFn,
        //     { limit: Math.max(20000, price * 3 + 5000) }
        // );

        return {
            id: m.id,
            name: m.name,
            desc: m.desc(),
            netPrice,
            // requiredListing,
        };
    });

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6">
                <h1 className="text-2xl font-semibold mb-2 text-center">Domain Market Commission Calculator</h1>
                <p className="text-base text-slate-500 mb-4 text-center">
                    This tool shows the net you'll receive per market.
                </p>

                {/* Inputs */}
                <PriceInput inputValue={inputValue} setInputValue={setInputValue} />

                {/* Config controls for each market */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <ControlAtom price={price} atomNoCoin={atomNoCoin} atomListing={atomListing}
                        setAtomListing={setAtomListing}
                        setAtomNoCoin={setAtomNoCoin}
                    />
                    <ControlSedo sedoType={sedoType} setSedoType={setSedoType} />
                    <ControlPb porkbunMode={porkbunMode} setPorkbunMode={setPorkbunMode} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <ControlAfternic
                        afternicNameservers={afternicNameservers}
                        setAfternicNameservers={setAfternicNameservers}
                    />

                    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">

                        {/* Header */}
                        <p className="text-[15px] font-semibold text-slate-900">
                            Other Markets · (Configured Automatically)
                        </p>

                        {/* List */}
                        <ul className="list-disc list-inside space-y-1">
                            <li className="text-[14px] text-slate-700">Spaceship: 5%</li>
                            <li className="text-[14px] text-slate-700">Unstoppable Domains: 3%</li>
                        </ul>
                    </div>
                </div>

                <hr className="w-full my-6 mb-7 border-1"></hr>

                {/* Result table */}
                <div className="relative overflow-x-auto w-full hidden sm:block">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-sm text-slate-600 text-center md:text-left">
                                <th className="py-2">Market</th>
                                <th className="py-2">Notes</th>
                                <th className="py-2">Commission</th>
                                <th className="py-2">Net</th>
                                {/* <th className="py-2">Required listing for {formatMoney(price)}</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {rows?.map((r) => (
                                <TableRes r={r} key={r?.id} />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Result Mobile cards */}
                <div className="sm:hidden space-y-4">
                    {rows?.map((r) => (
                        <TableCard r={r} key={r?.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
