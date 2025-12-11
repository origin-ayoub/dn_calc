import { formatMoney } from '../helpers'

export default function TableCard({ r }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-4">
            {/* Header Section */}
            <div className="flex items-start justify-between">
                <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-slate-500">Name</span>
                    <span className="text-[17px] font-semibold text-slate-900 leading-tight">
                        {r.name}
                    </span>
                </div>
            </div>

            {/* Description */}
            <div className="flex flex-col">
                <span className="text-[13px] font-medium text-slate-500 mb-0.5">Description</span>
                <span className="text-[15px] text-slate-700 leading-snug">
                    {r.desc}
                </span>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200"></div>

            {/* Commission + Net Price Grid */}
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-slate-500 mb-0.5">Commission</span>
                    <span className="text-[15px] font-semibold text-slate-800">
                        {formatMoney(r.netPrice.commission)}
                    </span>
                </div>

                <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-slate-500 mb-0.5">Net Price</span>
                    <span className="text-[16px] font-bold text-slate-900">
                        {formatMoney(r.netPrice.net)}
                    </span>
                </div>
            </div>
        </div>
    )
}
