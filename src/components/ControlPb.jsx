export default function ControlPb({ porkbunMode, setPorkbunMode }) {
    return (
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
            {/* Label */}
            <label
                htmlFor="pbFees"
                className="block text-[15px] font-semibold text-slate-900"
            >Porkbun</label>

            {/* Select Input */}
            <select
                id="pbFees"
                value={porkbunMode}
                onChange={(e) => setPorkbunMode(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white text-[15px] text-slate-800 p-3 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
            >
                <option value="marketplace">Marketplace — 7%</option>
                <option value="auction">User Auction — 15%</option>
            </select>
        </div>
    )
}
