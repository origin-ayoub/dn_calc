
export default function ControlAfternic({ afternicNameservers, setAfternicNameservers }) {
    return (
        <div className="p-4 border rounded-xl shadow-sm">
            <p className="font-semibold text-slate-800 mb-3">Afternic (Boost)</p>

            <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">
                    {afternicNameservers ? "Afternic NS ON (20%)" : "Afternic NS OFF (30%)"}
                </span>
                <button
                    type="button"
                    name="nsOn"
                    onClick={() => setAfternicNameservers(!afternicNameservers)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${afternicNameservers ? "bg-blue-600" : "bg-slate-300"}`}
                >
                    <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${afternicNameservers ? "translate-x-6" : "translate-x-1"}`}
                    />
                </button>
            </div>
        </div>
    )
}
