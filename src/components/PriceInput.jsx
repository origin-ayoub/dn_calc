
export default function PriceInput({ inputValue, setInputValue }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
            <div className="lg:col-span-2 p-5 rounded-2xl shadow bg-white border border-slate-200">
                <label htmlFor="price" className="text-sm font-semibold text-slate-700">Enter Price</label>
                <input type="number" id="price" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 p-3 text-lg shadow-sm focus:ring-2 focus:ring-indigo-400" placeholder="e.g. 2500" />
            </div>
        </div>
    )
}
