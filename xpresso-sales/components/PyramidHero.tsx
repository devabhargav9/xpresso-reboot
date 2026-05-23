export function PyramidHero() {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <svg
        viewBox="0 0 760 470"
        className="block h-auto w-full"
        role="img"
        aria-label="Xpresso product architecture"
      >
        <g>
          <rect x="40" y="14" width="680" height="52" rx="6" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.4" />
          <text x="380" y="36" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#312e81">
            Compliance Autopilot
          </text>
          <text x="380" y="54" textAnchor="middle" fontSize="10.5" fill="#4338ca">
            composes all three to assemble evidence · NAAC · NIRF · AISHE · NBA · UGC · AICTE
          </text>
        </g>

        <g>
          <rect x="40" y="78" width="680" height="52" rx="6" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.4" />
          <text x="380" y="100" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#312e81">
            ODP — Curriculum Agility
          </text>
          <text x="380" y="118" textAnchor="middle" fontSize="10.5" fill="#4338ca">
            composes ALS + EMS + IMS to ship credit-linked short programs · NEP · ABC
          </text>
        </g>

        <g>
          <polygon
            points="380,148 460,248 300,248"
            fill="#ecfdf5"
            stroke="#059669"
            strokeWidth="1.6"
          />
          <text x="380" y="220" textAnchor="middle" fontSize="18" fontWeight="700" fill="#065f46">
            ALS
          </text>
          <text x="380" y="238" textAnchor="middle" fontSize="10" fontWeight="500" fill="#047857">
            Adaptive Learning System
          </text>
        </g>

        <g>
          <polygon
            points="300,248 460,248 540,348 220,348"
            fill="#f5f3ff"
            stroke="#7c3aed"
            strokeWidth="1.6"
          />
          <text x="380" y="300" textAnchor="middle" fontSize="20" fontWeight="700" fill="#5b21b6">
            EMS
          </text>
          <text x="380" y="320" textAnchor="middle" fontSize="11" fontWeight="500" fill="#6d28d9">
            Education Management System
          </text>
        </g>

        <g>
          <polygon
            points="220,348 540,348 620,448 140,448"
            fill="#fffbeb"
            stroke="#d97706"
            strokeWidth="1.6"
          />
          <text x="380" y="400" textAnchor="middle" fontSize="20" fontWeight="700" fill="#92400e">
            IMS
          </text>
          <text x="380" y="420" textAnchor="middle" fontSize="11" fontWeight="500" fill="#b45309">
            Institution Management System
          </text>
        </g>
      </svg>
    </div>
  );
}
