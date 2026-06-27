/**
 * Xpresso — Year 1 Cost Sheet (Cofounder Review)
 * ================================================
 *
 * Generates a print-ready Google Doc for the 3 cofounders to sit
 * together and decide PSPY based on Year 1 development and
 * maintenance costs. Designed to fit on 3–4 A4 pages.
 *
 * Sections:
 *   1.  Headline numbers (Y1 burn)
 *   2.  Where the money goes (category breakdown)
 *   3.  Fixed vs variable split — the PSPY anchor
 *   4.  Cost-per-student at different customer outcomes
 *   5.  The trap to avoid (do NOT price purely off Y1 cost)
 *   6.  Recommended PSPY decision framework
 *   7.  The 4 numbers to walk in with
 *   8.  Cost recovery scenarios at planned pricing
 *   9.  Worked scenario — 5 customers × 1,000 students × ₹2,500 PSPY
 *   10. What NOT to debate
 *   11. One-screen meeting agenda
 *
 * How to use:
 *  1. Go to https://script.google.com and click "New project"
 *  2. Delete the default Code.gs content
 *  3. Paste this entire file into the editor
 *  4. Save (Cmd/Ctrl + S)
 *  5. From the dropdown, pick `renderXpressoY1CostSheet` and click Run
 *  6. First run will request Google Drive permissions — accept
 *  7. The generated doc appears in your Google Drive root
 *     (and the URL prints in the script logs)
 *
 * The script is self-contained — all content is embedded below.
 */

// =====================================================================
// COLOR PALETTE
// =====================================================================
const COLORS = {
  primary: '#0f172a',
  secondary: '#475569',
  tertiary: '#94a3b8',
  border: '#e2e8f0',
  zebraEven: '#f8fafc',
  zebraOdd: '#ffffff',
  cardBg: '#fafbfc',
  headerBg: '#1e293b',
  headerText: '#ffffff',

  successText: '#047857',
  successBg: '#ecfdf5',

  infoText: '#1e40af',
  infoBg: '#eff6ff',

  warningText: '#b45309',
  warningBg: '#fffbeb',

  dangerText: '#b91c1c',
  dangerBg: '#fef2f2',

  neutralBg: '#f1f5f9',
  neutralText: '#475569',
};

// =====================================================================
// MAIN ENTRY POINT
// =====================================================================
function renderXpressoY1CostSheet() {
  const doc = DocumentApp.create(
    'Xpresso — Year 1 Cost Sheet & PSPY Decision Framework'
  );
  const body = doc.getBody();
  body.clear();

  body.setMarginTop(48);
  body.setMarginBottom(48);
  body.setMarginLeft(48);
  body.setMarginRight(48);

  renderTitleSection(body);
  renderHeadlineNumbers(body);
  renderCategoryBreakdown(body);
  renderFixedVariableSplit(body);
  renderCostPerStudentTable(body);
  renderTrapCallout(body);
  renderDecisionFramework(body);
  renderFourNumbers(body);
  renderCostRecoveryScenarios(body);
  renderWorkedScenario(body);
  renderWhatNotToDebate(body);
  renderMeetingAgenda(body);

  Logger.log('Document created: ' + doc.getUrl());
  return doc.getUrl();
}

// =====================================================================
// SECTION RENDERERS
// =====================================================================

function renderTitleSection(body) {
  appendH1(body, 'Year 1 Cost Sheet & PSPY Decision');
  appendBodyText(
    body,
    'Print this. Walk into the cofounder meeting with a copy each. Designed to be worked through end-to-end in a single 60-minute session, ending with the 4 pricing numbers agreed.',
    { tone: 'secondary' }
  );
  appendBodyText(
    body,
    'Assumptions: 3 founders (1 developer, 2 sales) · zero founder salary until cash break-even · only Basic + Pro shipping in Year 1 · Pro Plus deferred to Year 2.',
    { tone: 'tertiary', italic: true }
  );
  appendSpacer(body);
}

function renderHeadlineNumbers(body) {
  appendH2(body, '1. Headline numbers — the bottom line');
  appendStatsRow(body, [
    { value: '₹32 L', label: 'Total Y1 cost (Base)' },
    { value: '₹64 L', label: 'Total Y1 cost (Stretch)' },
    { value: '₹2.7 L', label: 'Average monthly burn' },
    { value: '0', label: 'Founder salaries (Y1)', tone: 'info' },
  ]);
  appendBodyText(
    body,
    'Read this as: in the conservative case (Base), Year 1 spend is ₹32 L. If costs run hot (Stretch — more customers, more cloud usage, more travel), spend can rise to ₹64 L. Plan against Base; reserve cash for Stretch.',
    { tone: 'secondary' }
  );
  appendSpacer(body);
}

function renderCategoryBreakdown(body) {
  appendH2(body, '2. Where the money goes');
  appendComparisonTable(
    body,
    ['Category', 'Base', '% of total', 'Stretch', "What's in it"],
    [
      ['Cloud infra', '₹9 L', '28%', '₹16 L', 'AWS Mumbai: EKS, Aurora PG, S3, CloudFront, Whisper transcription, Bedrock AI, monitoring, dev/staging'],
      ['Sales + marketing', '₹11 L', '34%', '₹24 L', 'College visits, events (NAAC summits), brand, paid mktg, sales kit'],
      ['Tools + APIs', '₹5.5 L', '17%', '₹11 L', 'GitHub, Linear, Cursor, Sentry, WhatsApp Business API, SMS gateway, LinkedIn API'],
      ['Legal + admin', '₹4 L', '13%', '₹7 L', 'Pvt Ltd setup, CA retainer, insurance, statutory filings, contract templates'],
      ['Contingency (10%)', '₹2.5 L', '8%', '₹6 L', 'Buffer for surprises'],
      ['TOTAL', '₹32 L', '100%', '₹64 L', ''],
    ],
    { lastRowBold: true }
  );
  appendSpacer(body);
}

function renderFixedVariableSplit(body) {
  appendH2(body, '3. Fixed vs variable — the most important split for PSPY');
  appendBodyText(
    body,
    'You can only price intelligently if you know which costs are fixed (you spend regardless of customer count) and which scale per student. This split anchors every PSPY calculation below.',
    { tone: 'secondary' }
  );
  appendComparisonTable(
    body,
    ['Bucket', 'Y1 amount (Base)', 'Scales with what?'],
    [
      ['Fixed (per-year)', '~₹26 L', 'Sales travel + tools + legal + cloud baseline + dev/staging'],
      ['Variable (per student/year)', '₹150 – 250', 'AI tutor inference (Pro), Whisper transcription (Pro), WhatsApp/SMS, S3 storage, data egress'],
      ['One-time (per customer)', '₹50 K – 1 L', 'Onboarding labor, custom config, training, first-month support spike'],
    ]
  );
  appendSpacer(body);
}

function renderCostPerStudentTable(body) {
  appendH2(body, '4. Cost-per-student at different Y1 outcomes');
  appendBodyText(
    body,
    'This is the table you actually argue over. Read across: "if we sign X customers averaging Y students each, our cost per student is Z, and we need to charge this PSPY at this margin."',
    { tone: 'secondary' }
  );

  appendComparisonTable(
    body,
    [
      'Customers',
      'Avg students',
      'Total students',
      'Break-even PSPY',
      '50% margin',
      '65% margin',
      '75% margin',
    ],
    [
      ['3', '800', '2,400', '₹1,333', '₹2,666', '₹3,810', '₹5,333'],
      ['5', '800', '4,000', '₹800', '₹1,600', '₹2,285', '₹3,200'],
      ['5', '1,200', '6,000', '₹533', '₹1,067', '₹1,524', '₹2,133'],
      ['5', '1,500', '7,500', '₹427', '₹853', '₹1,219', '₹1,706'],
      ['8', '1,200', '9,600', '₹333', '₹667', '₹952', '₹1,333'],
    ]
  );

  appendBodyText(
    body,
    'Mark the row you believe is most realistic for Year 1. Most likely: 5 customers × 1,200 students avg → break-even PSPY is ₹533. At 65% margin, PSPY = ₹1,524.',
    { tone: 'tertiary', italic: true }
  );
  appendSpacer(body);
}

function renderTrapCallout(body) {
  appendH2(body, '5. The trap to avoid (read before deciding)');
  appendCallout(
    body,
    'Do NOT set PSPY purely off Year 1 cost',
    'Year 1 cost is artificially low because (a) all 3 founders take ZERO salary, (b) there is no dedicated sales team, (c) there is no real engineering team. Year 2 cost jumps to ₹4.5 Cr — a 14× increase. If your Y1 PSPY just covers Y1 cost, you would need to 3–4× your prices in Y2 — customers will revolt and churn.',
    'danger'
  );
  appendBodyText(body, 'The right approach:', { bold: true });
  appendBulletList(body, [
    'Pick a STEADY-STATE PSPY that funds Y2–Y3 economics with healthy gross margin (60–70%)',
    'Offer Y1 customers a 20–30% "Founding 5" discount, locked for 2–3 years',
    'When you sign customer #6, public list prices go up 10%',
    'When you sign customer #15 (mid-Y2), prices go up another 10%',
  ]);
  appendSpacer(body);
}

function renderDecisionFramework(body) {
  appendH2(body, '6. Recommended PSPY decision framework');
  appendComparisonTable(
    body,
    ['Step', 'Question', 'Suggested answer'],
    [
      [
        '1',
        'What PSPY funds Y2–Y3 economics at 60–70% gross margin?',
        'Basic ₹2,400 – 2,800 · Pro ₹4,000 – 5,000 (for mid-size 800–1,500 students)',
      ],
      [
        '2',
        'How aggressive on founding-customer discount?',
        '20 – 30% off steady-state, locked for 2 – 3 years, marked as "Founding 5"',
      ],
      [
        '3',
        'What goes on the actual Y1 proposal?',
        'Basic ₹1,800 – 2,000 · Pro ₹3,000 – 3,500 (for mid-size), locked till Y3 EOY',
      ],
      [
        '4',
        "What's the absolute floor?",
        '₹1,200 PSPY — only for 1 prestige customer max, still covers Y1 variable cost',
      ],
      [
        '5',
        'Cost coverage check (5 customers × 1,000 students × ₹1,800 PSPY)',
        '₹90 L revenue vs ₹32 L cost = 65% Y1 gross margin ✓',
      ],
    ]
  );
  appendSpacer(body);
}

function renderFourNumbers(body) {
  appendH2(body, '7. The 4 numbers to walk in with');
  appendBodyText(
    body,
    'These are the decisions that must be aligned by end of the meeting. If you can answer these four, you have your Y1 pricing.',
    { tone: 'secondary' }
  );
  appendComparisonTable(
    body,
    ['#', 'Question for the discussion', 'Suggested answer'],
    [
      ['1', 'Hard floor PSPY (below which we walk away)', '₹1,200'],
      ['2', 'Public list PSPY for Basic (mid-size college)', '₹2,400'],
      ['3', 'Public list PSPY for Pro (mid-size college)', '₹4,200'],
      ['4', 'Discount sales can offer the first 5 customers', 'Up to 25%, locked through Y3'],
    ]
  );
  appendSpacer(body);
}

function renderCostRecoveryScenarios(body) {
  appendH2(body, '8. Cost recovery scenarios at planned pricing');
  appendBodyText(
    body,
    'At public list (Basic ₹2,400 / Pro ₹4,200) with 25% Founding 5 discount applied — what does Y1 actually look like?',
    { tone: 'secondary' }
  );
  appendComparisonTable(
    body,
    ['Customers', 'Mix', 'Avg students', 'Total students', 'Revenue (Y1)', 'Y1 cost', 'Gross margin'],
    [
      ['3', '3 Basic', '1,000', '3,000', '₹54 L', '₹32 L', '41%'],
      ['5', '4 Basic, 1 Pro', '1,000', '5,000', '₹1.04 Cr', '₹32 L', '69%'],
      ['5', '3 Basic, 2 Pro', '1,200', '6,000', '₹1.41 Cr', '₹32 L', '77%'],
      ['8', '5 Basic, 3 Pro', '1,000', '8,000', '₹1.67 Cr', '₹32 L', '81%'],
    ]
  );
  appendCallout(
    body,
    'What this tells us',
    'All four scenarios beat 40% gross margin. The middle two (5 customers, mid-size colleges) are the realistic Y1 target. Hit those and Year 1 is cash-positive and the Seed raise narrative writes itself.',
    'success'
  );
  appendSpacer(body);
}

function renderWorkedScenario(body) {
  appendH2(body, '9. Worked scenario — 5 customers × 1,000 students × ₹2,500 PSPY');
  appendBodyText(
    body,
    'This is the specific Y1 outcome to plan against. The math below shows exactly what hitting it looks like — cash position, margin, salary trigger, surplus uses, and the Seed-raise narrative it sets up.',
    { tone: 'secondary' }
  );

  // Headline tiles
  appendH3(body, 'Headline result');
  appendStatsRow(body, [
    { value: '₹1.25 Cr', label: 'Total ARR signed', tone: 'success' },
    { value: '74%', label: 'Gross margin (Base)', tone: 'success' },
    { value: '+₹93 L', label: 'EOY cash surplus (Base)', tone: 'success' },
    { value: 'Month 9', label: 'Cash break-even hit', tone: 'info' },
  ]);

  // Revenue math
  appendH3(body, 'Revenue math');
  appendComparisonTable(
    body,
    ['Item', 'Calculation', 'Result'],
    [
      ['ARR per customer', '1,000 students × ₹2,500', '₹25 L'],
      ['Number of customers', '—', '5'],
      ['Total annual contract value (ACV)', '5 × ₹25 L', '₹1.25 Cr'],
    ]
  );

  // Profitability
  appendH3(body, 'Profitability check');
  appendComparisonTable(
    body,
    ['Scenario', 'Revenue', 'Cost', 'Gross profit', 'Gross margin'],
    [
      ['Base case', '₹1.25 Cr', '₹32 L', '₹93 L', '74.4%'],
      ['Stretch case (cost runs hot)', '₹1.25 Cr', '₹64 L', '₹61 L', '48.8%'],
    ]
  );

  // Critical question
  appendH3(body, 'Critical question — is ₹2,500 PSPY positioned as Basic or Pro?');
  appendComparisonTable(
    body,
    ['Interpretation', 'Effective discount vs steady-state', 'What it signals'],
    [
      [
        'Basic tier at near-full price (steady-state ₹2,400)',
        '~0% discount',
        "Charging ERP-replacement prices and customers think it's worth it. Strong PMF signal.",
      ],
      [
        'Pro tier at heavy discount (steady-state ₹4,000–4,200)',
        '~37–40% discount',
        'Undercuts the 25% Founding 5 cap. Y2 renewal jump will be painful.',
      ],
    ]
  );
  appendCallout(
    body,
    'Recommended positioning',
    'Pitch ₹2,500 as Pro tier with explicit ~35% Founding 5 discount. Mark it: "Founding 5 — locked till March 2028 — public rate ₹4,000." Customer sees they got a deal AND understands the renewal math. Much stronger than calling it Basic.',
    'success'
  );

  // Cash flow timing
  appendH3(body, 'Cash flow timing — month-by-month');
  appendComparisonTable(
    body,
    ['Month', 'Event', 'Cash in', 'Cumulative cash', 'Cumulative cost'],
    [
      ['1–4', 'Prospecting, no revenue', '0', '0', '₹11 L'],
      ['5', 'Customer #1 signs (₹25 L upfront)', '₹25 L', '₹25 L', '₹14 L'],
      ['6–7', 'Operations, prospecting', '0', '₹25 L', '₹20 L'],
      ['8', 'Customer #2 signs', '₹25 L', '₹50 L', '₹23 L'],
      ['9', 'Cash break-even crossed', '—', '₹50 L', '₹23 L'],
      ['10', 'Customer #3 signs', '₹25 L', '₹75 L', '₹26 L'],
      ['11', 'Founder salaries switch on (₹50 K/mo each)', '—', '₹73.5 L', '₹27.5 L'],
      ['12', 'Customer #4 signs', '₹25 L', '₹98 L', '₹30 L'],
      ['13 (Y2 Q1)', 'Customer #5 signs (cash hits Y2)', '—', '—', '—'],
    ]
  );
  appendBodyText(
    body,
    'Y1 cash exit if 4 of 5 close in-year: +₹68 L surplus (even after switching on founder salaries from month 11). If all 5 close in Y1: +₹93 L surplus.',
    { tone: 'tertiary', italic: true }
  );

  // What the surplus funds
  appendH3(body, 'What the surplus funds');
  appendComparisonTable(
    body,
    ['Use of surplus', 'Cost', 'Why it matters'],
    [
      ['Founder salaries (3 × ₹50 K × 2 months end of Y1)', '₹3 L', 'Quality of life unlocked'],
      ['Hire engineer #2 in month 12, pre-fund 6 months at ₹2 L/mo', '₹12 L', "Y2 readiness — can't onboard 20 customers solo"],
      ['Hire engineer #3 mid-Y2, pre-fund 4 months', '₹8 L', 'Pro tier R&D + delivery'],
      ['Office (small, 6–8 seats)', '₹4 L', 'Y2 ready'],
      ['Cash buffer for Y2', '₹40+ L', 'Reduces Seed-round urgency / better terms'],
    ]
  );

  appendCallout(
    body,
    'Strategic implication',
    'You no longer NEED a Seed round to survive Y1. The Seed conversation shifts from "we need this to live" to "we want this to scale faster." Likely valuation upgrade from ₹30–40 Cr post to ₹40–60 Cr post. Same dilution, more capital — or same capital, less dilution.',
    'info'
  );

  // Seed narrative
  appendH3(body, 'Seed raise narrative end of Y1');
  appendBodyText(
    body,
    '"5 paying customers in Y1, all locked at ₹25 L/year for 3 years. ₹1.25 Cr ARR exit. 74% gross margin. Cash-positive Y1 with zero founder salary for 8 months. Three founders fully committed. Now raising ₹6–10 Cr to scale to 25 customers and ₹8 Cr ARR by EOY Y2."',
    { italic: true, tone: 'secondary' }
  );

  appendBodyText(body, 'SaaS metrics you can quote:', { bold: true });
  appendComparisonTable(
    body,
    ['Metric', 'Y1 result', 'Industry benchmark'],
    [
      ['Paying customers', '5', '—'],
      ['ARR', '₹1.25 Cr', '—'],
      ['Gross margin', '74%', '>70% = healthy'],
      ['Net retention', '100% (no churn in Y1)', '>100% = excellent'],
      ['CAC payback', '~9 months', '<18 months = healthy'],
      ['Burn multiple', '<0.3', '<1 = excellent'],
      ['Annual contracts upfront', '100%', '—'],
    ]
  );

  // Risks
  appendH3(body, 'Risks at ₹2,500 PSPY');
  appendComparisonTable(
    body,
    ['Risk', 'Why it matters', 'Mitigation'],
    [
      [
        'Customer #5 thinks ₹25 L is too high',
        '"Why am I last? Give me more discount."',
        'Use scarcity — "Founding 5 cap, then prices go to ₹4,000"',
      ],
      [
        'Cloud bill doubles (Stretch case)',
        'Gross margin drops to 48%',
        'Monthly cloud alerts at ₹1.5 L, ₹2 L, ₹3 L; per-tenant AI rate limits',
      ],
      [
        'Y2 renewal sticker shock',
        '60% jump = customer revolt',
        'Lock Founding 5 at ₹2,500 for 3 years; charge customer #6+ at ₹4,000',
      ],
      [
        'Founders pay themselves too early',
        'Burns the surplus',
        'Hard rule: salaries on only after 2 months sustained break-even, capped at ₹50 K/mo',
      ],
      [
        'One customer churns mid-year',
        'Loses ₹25 L of expected revenue',
        "Annual upfront billing — they've already paid",
      ],
      [
        'Implementation slips, customer threatens to walk',
        'Refund risk + reputation hit',
        'Milestone-based delivery; 25% of fee held until go-live',
      ],
    ]
  );

  appendCallout(
    body,
    'The one rule',
    'Lock the rate at ₹2,500 for 3 years for the first 5 customers. Charge customer #6 onward at ₹4,000 — and tell #6 about #1–#5\'s locked rate so #6 understands the price.',
    'warning'
  );
  appendSpacer(body);
}

function renderWhatNotToDebate(body) {
  appendH2(body, '10. What NOT to debate in this meeting');
  appendBodyText(
    body,
    'These topics are time-wasters for the Y1 pricing decision. Park them for later sessions.',
    { tone: 'secondary' }
  );
  appendBulletList(body, [
    'Pricing for >5,000 student institutions — you will not sell to them in Y1',
    'Pricing for <500 student institutions — skip them in Y1; unit economics are bad',
    'Pro Plus pricing — not shipping in Y1',
    'Annual vs monthly billing — always annual upfront in higher-ed; non-negotiable',
    'Currency / international pricing — Y1 is India-only',
  ]);
  appendSpacer(body);
}

function renderMeetingAgenda(body) {
  appendH2(body, '11. One-screen agenda for the cofounder meeting');
  appendComparisonTable(
    body,
    ['#', 'Agenda item', 'Outcome'],
    [
      ['1', 'Review headline — Y1 burn ₹32 L, target 5 customers, ≥60% gross margin', 'Shared understanding'],
      ['2', 'Align on the 4 pricing numbers (Section 7)', 'Decisions agreed'],
      ['3', 'Decide the "Founding 5" pitch — locked rate for 3 years, must agree to case study + reference call', 'Sales-ready'],
      ['4', 'Pick the first 10 colleges to attack (3 – 4 per cofounder)', 'Named list'],
      ['5', 'Set quota — each cofounder closes ≥1 customer by month 6, ≥2 by month 12', 'Commitments'],
      ['6', 'Trigger to raise prices — public list +10% when we sign customer #6', 'Documented'],
    ]
  );
  appendSpacer(body);

  appendCallout(
    body,
    'After the meeting',
    'Update the pricing canvas with the agreed 4 numbers. Share the "Founding 5" proposal template with both sales cofounders. Walk into the first prospect meeting within 7 days.',
    'info'
  );
}

// =====================================================================
// PRIMITIVE BUILDERS — typography, lists, callouts, stats, tables
// =====================================================================

function appendH1(body, text) {
  const p = body.appendParagraph(text);
  p.setHeading(DocumentApp.ParagraphHeading.HEADING1);
  p.editAsText()
    .setFontSize(22)
    .setBold(true)
    .setForegroundColor(COLORS.primary);
  p.setSpacingAfter(8);
  return p;
}

function appendH2(body, text) {
  const p = body.appendParagraph(text);
  p.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  p.editAsText()
    .setFontSize(14)
    .setBold(true)
    .setForegroundColor(COLORS.primary);
  p.setSpacingBefore(16);
  p.setSpacingAfter(6);
  return p;
}

function appendH3(body, text) {
  const p = body.appendParagraph(text);
  p.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  p.editAsText()
    .setFontSize(11.5)
    .setBold(true)
    .setForegroundColor(COLORS.primary);
  p.setSpacingBefore(10);
  p.setSpacingAfter(4);
  return p;
}

function appendBodyText(body, text, opts) {
  opts = opts || {};
  const p = body.appendParagraph(text);
  p.setLineSpacing(1.4);
  p.setSpacingAfter(8);
  const t = p.editAsText();
  t.setFontSize(10.5);
  if (opts.tone === 'secondary') t.setForegroundColor(COLORS.secondary);
  else if (opts.tone === 'tertiary') t.setForegroundColor(COLORS.tertiary);
  else t.setForegroundColor(COLORS.primary);
  if (opts.bold) t.setBold(true);
  if (opts.italic) t.setItalic(true);
  return p;
}

function appendBulletList(body, items) {
  items.forEach((item) => {
    const li = body.appendListItem(item);
    li.setGlyphType(DocumentApp.GlyphType.BULLET);
    li.setLineSpacing(1.4);
    li.setSpacingAfter(2);
    li.editAsText().setFontSize(10).setForegroundColor(COLORS.primary);
  });
  appendSpacer(body);
}

function appendSpacer(body) {
  const p = body.appendParagraph('');
  p.setSpacingBefore(0);
  p.setSpacingAfter(8);
}

function appendCallout(body, title, text, tone) {
  const bg = COLORS[tone + 'Bg'];
  const fg = COLORS[tone + 'Text'];

  const table = body.appendTable([[''], ['']]);
  table.setBorderColor(fg);
  table.setBorderWidth(1);

  const titleCell = table.getCell(0, 0);
  titleCell.setBackgroundColor(bg);
  titleCell.setPaddingTop(8);
  titleCell.setPaddingBottom(2);
  titleCell.setPaddingLeft(12);
  titleCell.setPaddingRight(12);
  const titleP = titleCell.getChild(0).asParagraph();
  titleP.setText(title);
  titleP.editAsText().setFontSize(11).setBold(true).setForegroundColor(fg);

  const bodyCell = table.getCell(1, 0);
  bodyCell.setBackgroundColor(bg);
  bodyCell.setPaddingTop(2);
  bodyCell.setPaddingBottom(10);
  bodyCell.setPaddingLeft(12);
  bodyCell.setPaddingRight(12);
  const bodyP = bodyCell.getChild(0).asParagraph();
  bodyP.setText(text);
  bodyP.setLineSpacing(1.4);
  bodyP.editAsText().setFontSize(10).setForegroundColor(COLORS.primary);
}

function appendStatsRow(body, stats) {
  const values = stats.map((s) => s.value);
  const labels = stats.map((s) => s.label);

  const table = body.appendTable([values, labels]);
  table.setBorderColor(COLORS.border);
  table.setBorderWidth(1);

  for (let i = 0; i < stats.length; i++) {
    const stat = stats[i];
    const bg = stat.tone ? COLORS[stat.tone + 'Bg'] : COLORS.cardBg;
    const fg = stat.tone ? COLORS[stat.tone + 'Text'] : COLORS.primary;

    const valueCell = table.getCell(0, i);
    valueCell.setBackgroundColor(bg);
    valueCell.setPaddingTop(14);
    valueCell.setPaddingBottom(4);
    valueCell.setPaddingLeft(8);
    valueCell.setPaddingRight(8);
    const vp = valueCell.getChild(0).asParagraph();
    vp.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    vp.editAsText().setFontSize(20).setBold(true).setForegroundColor(fg);

    const labelCell = table.getCell(1, i);
    labelCell.setBackgroundColor(bg);
    labelCell.setPaddingTop(2);
    labelCell.setPaddingBottom(12);
    labelCell.setPaddingLeft(8);
    labelCell.setPaddingRight(8);
    const lp = labelCell.getChild(0).asParagraph();
    lp.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    lp.editAsText().setFontSize(9).setForegroundColor(COLORS.secondary);
  }
}

function appendComparisonTable(body, headers, rows, opts) {
  opts = opts || {};
  const allRows = [headers].concat(rows);
  const table = body.appendTable(allRows);
  table.setBorderColor(COLORS.border);
  table.setBorderWidth(1);

  // Header row
  const headerRow = table.getRow(0);
  for (let i = 0; i < headers.length; i++) {
    const cell = headerRow.getCell(i);
    cell.setBackgroundColor(COLORS.headerBg);
    cell.setPaddingTop(8);
    cell.setPaddingBottom(8);
    cell.setPaddingLeft(10);
    cell.setPaddingRight(10);
    cell
      .getChild(0)
      .asParagraph()
      .editAsText()
      .setFontSize(10)
      .setBold(true)
      .setForegroundColor(COLORS.headerText);
  }

  // Body rows
  for (let r = 0; r < rows.length; r++) {
    const row = table.getRow(r + 1);
    const isLastRow = r === rows.length - 1;
    const boldLast = opts.lastRowBold && isLastRow;
    const tone = opts.rowTones ? opts.rowTones[r] : null;
    const bg = boldLast
      ? COLORS.neutralBg
      : tone
      ? COLORS[tone + 'Bg']
      : r % 2 === 0
      ? COLORS.zebraEven
      : COLORS.zebraOdd;

    for (let c = 0; c < headers.length; c++) {
      const cell = row.getCell(c);
      cell.setBackgroundColor(bg);
      cell.setPaddingTop(6);
      cell.setPaddingBottom(6);
      cell.setPaddingLeft(10);
      cell.setPaddingRight(10);
      const t = cell.getChild(0).asParagraph().editAsText();
      t.setFontSize(9.5).setForegroundColor(COLORS.primary);
      if (boldLast) t.setBold(true);
    }
  }
}
