export default function ControlSedo({ sedoType, setSedoType }) {
    return (
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
            {/* Label */}
            <label
                htmlFor="sedoFees"
                className="block text-[15px] font-semibold text-slate-900"
            >Sedo
            </label>

            {/* Select Input */}
            <select
                id="sedoFees"
                value={sedoType}
                onChange={(e) => setSedoType(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white text-[15px] text-slate-800 p-3 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
            >
                <option value="buy-now-parked">Buy‑Now / Parked — 10%</option>
                <option value="marketplace">Direct marketplace — 15%</option>
                <option value="mls">SedoMLS partner network — 20%</option>
            </select>
        </div>
    )
}
