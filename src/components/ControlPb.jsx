import React from 'react'

function ControlPb({ porkbunMode, setPorkbunMode }) {
    return (
        <div className="p-3 border rounded-lg">
            <label htmlFor='pbFees' className="font-semibold">Porkbun</label>
            <select
                id="pbFees"
                value={porkbunMode}
                onChange={(e) => setPorkbunMode(e.target.value)}
                className="mt-2 block w-full p-2 rounded border"
            >
                <option value="marketplace">Marketplace — 7%</option>
                <option value="auction">User Auction — 15%</option>
            </select>
        </div>
    )
}

export default ControlPb