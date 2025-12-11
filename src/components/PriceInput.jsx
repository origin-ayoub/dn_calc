import { useState } from "react"

export default function PriceInput({ inputValue, setInputValue }) {
    const [coloredBd, setBdColor] = useState("");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
            <div className="lg:col-span-2 p-5 rounded-2xl shadow bg-white border border-slate-200">
                <label htmlFor="price" className="font-semibold text-slate-700">Enter Price</label>
                <input
                    autoFocus
                    id="price"
                    type="number"
                    value={inputValue}
                    placeholder="e.g. 2500"
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={() => setBdColor("border-slate-300")}
                    onFocus={() => setBdColor("border-cyan-500 shadow-cyan-500 focus:outline-none")}
                    className={`mt-2 w-full rounded-xl p-3 pb-2 text-lg shadow-md border ${coloredBd}`}
                />
            </div>
        </div>
    )
}
