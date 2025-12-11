export default function ControlAtom({ price, atomListing, atomNoCoin, setAtomListing, setAtomNoCoin }) {
    return (
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">

            {/* Label */}
            <label htmlFor="atomFees" className="block text-[15px] font-semibold text-slate-900">Atom</label>

            {/* Select Input */}
            <select
                id="atomFees"
                value={atomListing}
                onChange={(e) => setAtomListing(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white text-[15px] text-slate-800 p-4 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
            >
                <option value="paylink">Atom Pay Link — 4.5%</option>
                <option value="standard">Standard Listings — 7.5%</option>
                <option value="plus">Plus Listings — 15%</option>
                <option value="premium">Premium Listings — Tiered</option>
            </select>

            {/* Conditional No-coin section */}
            {atomListing === "premium" && price < 4999 && price >= 1 && (
                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl mt-2 shadow-sm">
                    {/* Description */}
                    <div className="flex flex-col">
                        <span className="text-[15px] font-medium text-slate-800">
                            No-coin mode
                        </span>
                        <span className="text-[13px] text-slate-500">
                            Under $4,998 becomes 35%
                        </span>
                    </div>

                    {/* Toggle Switch */}
                    <button
                        type="button"
                        name="noCoin"
                        onClick={() => setAtomNoCoin(!atomNoCoin)}
                        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all ${atomNoCoin ? "bg-blue-600" : "bg-slate-300"} hover:opacity-90 active:scale-95`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-all duration-300 ease-out ${atomNoCoin ? "translate-x-6" : "translate-x-1"}`}
                        />
                    </button>
                </div>
            )}
        </div>
    )
}
