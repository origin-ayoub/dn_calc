import React from 'react'

function ControlSedo({ sedoType, setSedoType }) {
    return (
        <div className="p-3 border rounded-lg">
            <label htmlFor='sedoFees' className="font-semibold">Sedo</label>
            <select
                id="sedoFees"
                value={sedoType}
                onChange={(e) => setSedoType(e.target.value)}
                className="mt-2 block w-full p-2 rounded border"
            >
                <option value="buy-now-parked">Buy‑Now / Parked — 10%</option>
                <option value="marketplace">Direct marketplace — 15%</option>
                <option value="mls">SedoMLS partner network — 20%</option>
            </select>
        </div>
    )
}

export default ControlSedo