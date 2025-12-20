export default function ControlAfternic({ afternicNameservers, setAfternicNameservers }) {
    return (
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">

            {/* Title */}
            <label htmlFor="afternicRes" className="text-[16px] font-semibold text-slate-900 mb-4">
                Afternic (Boost)
            </label>

            {/* Row */}
            <div className="flex items-center justify-between">
                <span className="text-[14px] text-slate-600">
                    {afternicNameservers ? "Afternic NS ON (20%)" : "Afternic NS OFF (30%)"}
                </span>

                {/* Switch */}
                <button
                	id="afternicRes"
                    type="button"
                    name="nsOn"
                    onClick={() => setAfternicNameservers(!afternicNameservers)}
                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all ${afternicNameservers ? "bg-blue-600" : "bg-slate-300"} hover:opacity-90 active:scale-95`}
                >
                    <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-all duration-300 ease-out ${afternicNameservers ? "translate-x-6" : "translate-x-1"}`}
                    />
                </button>
            </div>
        </div>
    )
}
