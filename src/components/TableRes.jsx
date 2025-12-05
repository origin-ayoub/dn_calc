import { formatMoney } from "../helpers";

export default function TableRes({ r }) {
    return (
        <tr className="border-t">
            <td className="py-3 align-top font-medium">{r.name}</td>
            <td className="py-3 align-top text-sm text-slate-600">{r.desc}</td>
            <td className="py-3 align-top text-sm">
                {formatMoney(r.netPrice.commission)}
            </td>
            <td className="py-3 align-top">
                <div>
                    <div className="text-slate-800 font-medium">{formatMoney(r.netPrice.net)}</div>
                </div>
            </td>
        </tr>
    )
}
