export function PyramidHero() {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <svg viewBox="0 0 720 360" className="block h-auto w-full" role="img" aria-label="Xpresso pyramid">
        <defs>
          <clipPath id="band-clip">
            <rect x="0" y="174" width="720" height="32" rx="6" />
          </clipPath>
        </defs>

        <g>
          <polygon
            points="280,30 440,30 470,100 250,100"
            fill="#ecfdf5"
            stroke="#059669"
            strokeWidth="1.5"
          />
          <text x="360" y="60" textAnchor="middle" className="num" fontSize="14" fontWeight="700" fill="#065f46">
            ALS
          </text>
          <text x="360" y="80" textAnchor="middle" fontSize="11" fill="#047857">
            Adaptive learning
          </text>
        </g>

        <g>
          <polygon
            points="250,100 470,100 510,180 210,180"
            fill="#f5f3ff"
            stroke="#7c3aed"
            strokeWidth="1.5"
          />
          <text x="360" y="135" textAnchor="middle" fontSize="14" fontWeight="700" fill="#5b21b6">
            EMS
          </text>
          <text x="360" y="155" textAnchor="middle" fontSize="11" fill="#6d28d9">
            Knowledge engine
          </text>
        </g>

        <g>
          <polygon
            points="210,200 510,200 560,290 160,290"
            fill="#fffbeb"
            stroke="#d97706"
            strokeWidth="1.5"
          />
          <text x="360" y="240" textAnchor="middle" fontSize="14" fontWeight="700" fill="#92400e">
            IMS
          </text>
          <text x="360" y="260" textAnchor="middle" fontSize="11" fill="#b45309">
            Institution OS
          </text>
        </g>

        <g>
          <rect x="40" y="174" width="640" height="32" rx="6" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.2" />
          <text x="360" y="195" textAnchor="middle" fontSize="12" fontWeight="700" fill="#3730a3">
            Compliance Autopilot — NAAC · NIRF · AISHE · NBA · UGC · AICTE
          </text>
        </g>
      </svg>
    </div>
  );
}
