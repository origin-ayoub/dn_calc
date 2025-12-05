
export default function ControlAtom({ price, atomListing, atomNoCoin, setAtomListing, setAtomNoCoin }) {
    return (
        <div className="p-3 border rounded-lg">
            <label htmlFor="atomFees" className="font-semibold">Atom</label>
            <select
                id="atomFees"
                value={atomListing}
                onChange={(e) => setAtomListing(e.target.value)}
                className="mt-2 block w-full p-2 rounded border"
            >
                <option value="paylink">Atom Pay Link — 4.5%</option>
                <option value="standard">Standard Listings — 7.5%</option>
                <option value="plus">Plus Listings — 15%</option>
                <option value="premium">Premium Listings — Tiered</option>
            </select>
            {atomListing === 'premium' && price < 4999 && price >= 1 && (
                <div className="flex items-center justify-between mt-3 p-3 bg-slate-50 rounded-lg border">
                    <span className="text-sm text-slate-700 flex flex-col">
                        <span>No-coin mode</span>
                        <span className="text-slate-500">(Under $4,998 becomes 35%)</span>
                    </span>

                    <button
                        type="button"
                        name="noCoin"
                        onClick={() => setAtomNoCoin(!atomNoCoin)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${atomNoCoin ? "bg-blue-600" : "bg-slate-300"}`}
                    >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition s${atomNoCoin ? "translate-x-5" : "translate-x-1"}`}
                        />
                    </button>
                </div>
            )}
        </div>
    )
}
