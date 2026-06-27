/**
 * Xpresso — Tier Split & Competitor Differentiation Doc Renderer
 * ================================================================
 *
 * Generates a fully formatted Google Doc that mirrors the chat
 * response:
 *   Part 1 — What's in each tier, in plain English (Basic / Pro / Pro Plus,
 *            shown incrementally so each tier "adds on top of" the previous)
 *   Part 2 — What competitors don't have (8 net-new capabilities + a
 *            reimagined-vs-traditional comparison table)
 *
 * Useful as a leave-behind for buyers + procurement.
 *
 * How to use:
 *  1. Go to https://script.google.com and click "New project"
 *  2. Delete the default Code.gs content
 *  3. Paste this entire file into the editor
 *  4. Save (Cmd/Ctrl + S)
 *  5. From the dropdown, pick `renderXpressoTierDifferentiation` and click Run
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

  // Tier-specific accent backgrounds for the "what's in this tier" tables
  basicBg: '#f1f5f9',
  basicText: '#0f172a',

  proBg: '#eef2ff',
  proText: '#3730a3',

  proPlusBg: '#fdf4ff',
  proPlusText: '#86198f',
};

// =====================================================================
// MAIN ENTRY POINT
// =====================================================================
function renderXpressoTierDifferentiation() {
  const doc = DocumentApp.create(
    'Xpresso — Pricing Tiers & Competitor Differentiation'
  );
  const body = doc.getBody();
  body.clear();

  body.setMarginTop(54);
  body.setMarginBottom(54);
  body.setMarginLeft(54);
  body.setMarginRight(54);

  renderTitleSection(body);
  renderAtAGlanceTable(body);
  renderTierBasic(body);
  renderTierPro(body);
  renderTierProPlus(body);
  renderDifferentiationIntro(body);
  renderNetNewCapabilities(body);
  renderReimaginedTable(body);
  renderOneSentencePitches(body);
  renderHowToUseFooter(body);

  Logger.log('Document created: ' + doc.getUrl());
  return doc.getUrl();
}

// =====================================================================
// SECTION RENDERERS
// =====================================================================

function renderTitleSection(body) {
  appendH1(body, 'Xpresso — Tiers & Differentiation');
  appendBodyText(
    body,
    'Two parts: (1) what each tier includes, shown incrementally so Pro = Basic + extras and Pro Plus = Pro + extras; (2) what genuinely new capabilities Xpresso provides versus traditional LMS / IMS / agency offerings. Hand this to buyers as the procurement-friendly leave-behind.',
    { tone: 'secondary' }
  );
  appendSpacer(body);
}

function renderAtAGlanceTable(body) {
  appendH2(body, 'Part 1 — Tier comparison at a glance');
  appendBodyText(
    body,
    'For the front of the deck. Each row is a capability area, not a single feature — granular feature-by-feature is in the prototype catalog. ✓ = fully included · ◐ = basic / partial / MVP version · — = not in tier.',
    { tone: 'secondary' }
  );

  appendComparisonTable(
    body,
    ['Capability area', 'Basic', 'Pro', 'Pro Plus'],
    [
      ['Run institution operations (ERP replacement)', '✓', '✓', '✓'],
      ['Mandatory NAAC / NIRF / UGC / AICTE disclosures', '✓ live', '✓ live', '✓ live'],
      ['Auto-generated institution website', '◐ templated + live disclosures', '✓ premium (research feed + ODP catalog + admissions micro-sites)', '✓ premium'],
      ['Alumni surface', '◐ directory', '✓ full portal (LinkedIn auto-pull, mentorship, donations)', '✓ full portal'],
      ['Placement — TPO operations (CRM, JD intake, drive lifecycle, NIRF export)', '✓', '✓', '✓'],
      ['Career Hub — student-facing 1-click apply + twin-aware prep', '—', '✓', '✓'],
      ['Cognitive twin + adaptive learning path + AI tutor', '—', '✓', '✓'],
      ['Effort-fair AI-aware assessment', '—', '✓', '✓'],
      ['Multi-modal content factory (PDF / audio / video)', '—', '✓', '✓'],
      ['Multi-modal — 3D / AR / VR / interactive simulation', '—', '—', '✓'],
      ['In-class lecture transcripts', '—', '✓ MVP (transcript → course feed)', '✓ + atom generation + twin feed + confusion detection'],
      ['Knowledge graph + OBE / CO–PO (live attainment)', '—', '✓', '✓'],
      ['Faculty AI co-pilot + mastery heatmap → atom rewrite', '—', '✓', '✓'],
      ['Research module', '—', '◐ Publications + basic citations', '✓ Full (Scopus / WoS auto-pull, patents, grants, MoUs, incubation)'],
      ['ODP — On-Demand Programs', '—', 'Add-on (paid)', 'Bundled'],
      ['Compliance Autopilot — frameworks covered', 'AISHE / UGC / AICTE complete + NAAC operational', '+ NAAC complete + NBA partial + NIRF partial', '+ NBA complete + NIRF deep'],
      ['Live AQAR / SSR / SAR builders (replaces NAAC consultant)', '—', '◐ Partial (live builders, partial coverage)', '✓ Fully replaces consultant (saves ₹15–50 L / cycle)'],
      ['Multi-campus + white-label + custom integrations + data warehouse export', '—', '—', '✓'],
      ['Support', 'Dedicated CSM · 4-hr SLA', 'Dedicated CSM · 4-hr SLA', '24×7 TAM · executive sponsor · 1-hr SLA'],
    ]
  );

  appendBodyText(
    body,
    'How to read this: Basic covers operations + operational half of compliance + a baseline website + alumni directory. Pro adds the entire learning brain (ALS + EMS), the student-facing Career Hub, in-class transcripts, the full alumni portal, and the premium website. Pro Plus adds advanced compliance / content / research / enterprise capabilities on top of Pro.',
    { tone: 'tertiary' }
  );
  appendSpacer(body);
}

function renderTierBasic(body) {
  appendH2(body, 'Basic — "Run my institution"');
  appendCallout(
    body,
    'Who buys this',
    'Tier-3 colleges, autonomous colleges, institutions that already have an LMS or aren\'t ready for the learning brain. Replaces existing ERP (MasterSoft / Camu / Linways).',
    'info'
  );

  appendH3(body, 'Operations — the ERP replacement');
  appendBulletList(body, [
    'Admissions, enrollment, attendance, fees, exams, results, transcripts',
    'Faculty HR, payroll, performance management, FDP tracking',
    'Library, hostel, mess, campus operations',
    'Department records, calendars, timetables, committees, policies, circulars',
  ]);

  appendH3(body, 'Placement — admin / TPO side only');
  appendBulletList(body, [
    'Recruiter CRM (companies, contacts, history)',
    'Companies submit JDs through a portal — no more WhatsApp',
    'Drive lifecycle workflow (draft → published → shortlists → offers → closed)',
    'Eligibility rule builder, shortlist + interview scheduler',
    'Offer letter generator + 1-click NIRF data export',
  ]);

  appendH3(body, 'Public surfaces');
  appendBulletList(body, [
    'Templated institution website auto-populated from IMS (faculty list, programs, fees, news)',
    'Mandatory NAAC / NIRF / UGC / AICTE disclosures rendered live',
    'Basic alumni directory',
  ]);

  appendH3(body, 'Communication & dashboards');
  appendBulletList(body, [
    'WhatsApp + SMS + email + push parent comms',
    '8 stakeholder dashboards (Principal, Faculty, Student, Admin, Exam Cell, Research Cell, Parent, IQAC)',
  ]);

  appendH3(body, 'Compliance Autopilot — what\'s covered');
  appendComparisonTable(
    body,
    ['Framework', 'Status in Basic'],
    [
      ['AISHE', '✓ Complete'],
      ['UGC', '✓ Complete'],
      ['AICTE', '✓ Complete'],
      ['NAAC', '✓ Operational criteria only (1, 4, 5, 7)'],
      ['NAAC (full) / NBA / NIRF', '— Not in this tier'],
    ]
  );

  appendBodyText(body, 'Support: Dedicated CSM, 4-hour response SLA.', { tone: 'secondary' });
  appendSpacer(body);
}

function renderTierPro(body) {
  appendH2(body, 'Pro — "Run my institution + give every student a brain" — anchor tier');
  appendCallout(
    body,
    'Who buys this',
    'Tier-2 private universities, deemed universities, institutions serious about NAAC / NBA / NIRF outcomes. Target 60–70% of sales here.',
    'success'
  );

  appendBodyText(body, 'Everything in Basic, PLUS:', { bold: true });

  appendH3(body, 'The learning brain (EMS + ALS)');
  appendBulletList(body, [
    'Cognitive twin — every student has a persistent model of how they learn',
    'Adaptive learning path — content sequence picked for each student',
    'AI tutor — answers grounded in your curriculum, not the open web',
    'Effort-fair assessment — distinguishes real thinking from AI-pasted answers',
    'Multi-modal content (PDF / audio / video for the same atom)',
    'Knowledge graph with live OBE / CO–PO attainment (not spreadsheet)',
    'Faculty AI co-pilot for generating quizzes, rubrics, atoms',
    'Live mastery heatmap — faculty see confusion the same day, not at semester end',
    'Early alerts (4–6 weeks before failure)',
  ]);

  appendH3(body, 'Career Hub — student-facing placements');
  appendBulletList(body, [
    'Live drives feed filtered by eligibility automatically',
    '1-click apply — no Google Forms, eligibility pre-checked',
    'Auto-built resume from IMS + EMS records',
    'Application status tracking',
    'Twin schedules interview prep before each drive',
    'Mock interview studio with fluency scoring',
    'Offer manager (compare → accept)',
  ]);

  appendH3(body, 'In-class lecture capture (MVP)');
  appendBulletList(body, [
    'Every lecture auto-transcribed',
    'Transcripts pushed into the course feed as "daily class updates"',
    'Faculty edit-before-publish; archive is searchable per course',
  ]);

  appendH3(body, 'Premium institution website');
  appendBulletList(body, [
    'Adds live EMS research feed (papers / patents / grants)',
    'Faculty profile pages with publications',
    'Public ODP catalog + admissions micro-sites',
    'Alumni stories newsroom',
  ]);

  appendH3(body, 'Full alumni portal');
  appendBulletList(body, [
    'LinkedIn auto-pull keeps records current',
    'Mentor–mentee matching',
    'Alumni → ODP contribution (alumni co-teach short programs)',
    'Donations & giving (campaigns, receipts, donor wall)',
    'Events & reunions',
  ]);

  appendH3(body, 'ODP — On-Demand Programs (available as paid add-on)');
  appendBulletList(body, [
    'Short, credit-linked programs (2 – 6 weeks)',
    'Career-driven recommender ranks ODPs that close placement gaps',
    'Credits flow into transcript + Academic Bank of Credits',
  ]);

  appendH3(body, 'Compliance Autopilot — expanded');
  appendComparisonTable(
    body,
    ['Framework', 'Status in Pro'],
    [
      ['Everything in Basic', '✓'],
      ['NAAC', '✓ Complete (all criteria)'],
      ['NBA', '◐ Partial'],
      ['NIRF', '◐ Partial'],
      ['AQAR / SSR / SAR builders', '✓ Live'],
      ['DVV anomaly inbox', '✓ Live'],
    ]
  );
  appendSpacer(body);
}

function renderTierProPlus(body) {
  appendH2(body, 'Pro Plus — "Replace consultants. Run multi-campus. Win NAAC bands." — future tier');
  appendCallout(
    body,
    'Who buys this',
    'Tier-1 private universities, deemed universities, multi-campus systems, institutions competing on NAAC band uplift or NIRF top-100. Not on the price book today — document it; introduce when 2+ customers explicitly ask, or a single ₹2 Cr+ deal needs the framing.',
    'warning'
  );

  appendBodyText(body, 'Everything in Pro, PLUS:', { bold: true });

  appendH3(body, 'Advanced compliance');
  appendBulletList(body, [
    'NBA — complete with full audit trails',
    'NIRF — deep (research + learning outcomes)',
    'Full live AQAR / SSR / SAR builders that replace your NAAC consultant entirely (saves ₹15 – 50 L per cycle)',
  ]);

  appendH3(body, 'Advanced content & learning intelligence');
  appendBulletList(body, [
    '3D / AR / VR / interactive simulation modalities',
    'Real-time engagement detection — modality switches mid-session',
    'Advanced in-class intelligence (R&D track): transcripts → auto-generated atoms · cognitive twin fed by in-class confusion signals · real-time confusion detection during lectures · post-class personalized study plans',
  ]);

  appendH3(body, 'Full research module');
  appendBulletList(body, [
    'Scopus / WoS auto-pull',
    'Patent pipeline (filed → examination → granted)',
    'Grants management (active, pipeline, agency)',
    'Consultancy projects tracker',
    'MoUs registry',
    'Innovation + incubation + startup tracking',
  ]);

  appendH3(body, 'Enterprise capabilities');
  appendBulletList(body, [
    'Multi-campus support (centralized + per-campus, aggregated reporting)',
    'Custom integrations / APIs',
    'Data warehouse export for BI',
    'White-label / custom branding',
    'ODP bundled (vs paid add-on in Pro)',
  ]);

  appendH3(body, 'Premium support');
  appendBulletList(body, [
    '24×7 dedicated TAM',
    'Executive sponsor',
    '1-hour response SLA',
    'Weekly business reviews',
    'White-glove onboarding with transformation team',
  ]);
  appendSpacer(body);
}

function renderDifferentiationIntro(body) {
  appendH2(body, "Part 2 — What competitors don't have");
  appendBodyText(
    body,
    'When buyers ask "why not just buy a cheap ERP + Moodle and stitch them together?", this is your answer. Two buckets: capabilities that don\'t exist anywhere (the premium-pricing justifiers), and capabilities others have but Xpresso reimagines (the "your current tool has a weak version of this" stories).',
    { tone: 'secondary' }
  );
  appendSpacer(body);
}

function renderNetNewCapabilities(body) {
  appendH3(body, "Net-new — doesn't exist in any LMS or IMS today");
  appendBodyText(
    body,
    'These eight capabilities are why Xpresso commands premium pricing. Lead with these in every Pro / Pro Plus pitch.',
    { tone: 'secondary' }
  );

  appendCardGrid(
    body,
    [
      {
        pill: 'Net-new #1',
        pillTone: 'success',
        header: 'Cognitive Twin',
        body: 'Per-student persistent model of HOW they learn (processing speed, working memory, attention, modality preference) + real-time state (attention level, working-memory load right now). Drives the adaptive path, AI tutor, modality selection, interview prep. Nothing in any LMS or ERP does this.',
      },
      {
        pill: 'Net-new #2',
        pillTone: 'success',
        header: 'Knowledge Graph + Atomic Content',
        body: 'Your institution\'s entire curriculum as a network of "atoms" with prerequisites, leads-to, and outcome links. LMSs treat content as monolithic PDFs. Only Xpresso has the graph as a first-class object.',
      },
      {
        pill: 'Net-new #3',
        pillTone: 'success',
        header: 'Compliance Autopilot',
        body: 'Live, continuous compliance for NAAC / NIRF / NBA / AISHE / UGC / AICTE. Evidence assembled from operational data, not generated as a one-off PDF at audit time. Replaces NAAC consultants (₹15 – 50 L per cycle).',
      },
      {
        pill: 'Net-new #4',
        pillTone: 'success',
        header: 'ODP — On-Demand Programs',
        body: 'Modular, credit-linked short programs (2 – 6 weeks) plugged into the official credit system. Bridges the 3-year curriculum-cycle problem. No LMS or IMS treats this as a first-class capability.',
      },
      {
        pill: 'Net-new #5',
        pillTone: 'success',
        header: 'Real-time ALS ↔ EMS data flow',
        body: 'Event bus connecting content changes to personalization, and student mastery signals back to content improvement. LMS + ERP integrations are batch jobs at best. Xpresso is one product with one spine.',
      },
      {
        pill: 'Net-new #6',
        pillTone: 'success',
        header: 'Adaptive Learning Path Generation',
        body: 'Per-student sequence picked from twin state + mastery history + prerequisites. Not "recommended next video" — this is path generation, not item ranking.',
      },
      {
        pill: 'Net-new #7',
        pillTone: 'success',
        header: 'AI Tutor grounded in YOUR atoms',
        body: '24×7 chatbot that answers from your institution\'s curriculum — knows what\'s been taught, what\'s in scope, what comes next. Generic chatbots can\'t do this; they don\'t have your atoms.',
      },
      {
        pill: 'Net-new #8',
        pillTone: 'success',
        header: 'Multi-modal Content Factory',
        body: 'Faculty authors an atom once; AI generates the same atom as PDF, audio podcast, narrated video, 3D animation. The twin picks the modality per student based on current state.',
      },
    ],
    2
  );
  appendSpacer(body);
}

function renderReimaginedTable(body) {
  appendH3(body, 'Reimagined — others ship a sad version; Xpresso ships the real one');
  appendBodyText(
    body,
    'The "your current tool has a weak version of this; here\'s what good looks like" stories — useful when buyers say "but we already have an LMS / website / placement portal."',
    { tone: 'secondary' }
  );

  appendComparisonTable(
    body,
    ['Capability', 'Traditional LMS / IMS / agency', 'Xpresso'],
    [
      [
        'Placement applications',
        'Google Forms + WhatsApp groups',
        'Career Hub — live drives feed, 1-click apply, eligibility pre-check, twin-aware interview prep, mock interview studio',
      ],
      [
        'Lecture archive',
        'Lost forever, or a Google Drive folder no one opens',
        'Auto-transcribed daily class updates in the course feed, searchable per course',
      ],
      [
        'Institution website',
        'Agency builds it, data goes stale in 3 weeks',
        'Auto-generated from live IMS / EMS data; mandatory disclosures always current',
      ],
      [
        'Alumni records',
        'Excel + a WhatsApp group',
        'Full alumni portal: LinkedIn auto-pull, mentorship matching, ODP contribution, donations',
      ],
      [
        'Compliance reports',
        'Static PDFs generated once a year',
        'Live criterion coverage + one-click AQAR / SSR / SAR builders + DVV anomaly inbox',
      ],
      [
        'NAAC / NBA consulting',
        '₹15 – 50 L per cycle to external consultants',
        'Compliance Autopilot does it · Pro Plus replaces consultants entirely',
      ],
      [
        'Assessment',
        '"Did they get the right answer?"',
        'Effort-fair AI-aware assessment — distinguishes real thinking from AI-pasted answers via interaction trail + adaptive follow-ups',
      ],
      [
        'Parent communication',
        'SMS-only, no acknowledgement tracking',
        'WhatsApp + SMS + email + push with delivery + read tracking',
      ],
      [
        'OBE / CO–PO mapping',
        'Faculty fills spreadsheets at semester end',
        'Live attainment computed continuously from real student data',
      ],
      [
        'Faculty content prep',
        'Manual; uneven adoption across faculty',
        'Faculty AI co-pilot generates quizzes, rubrics, atoms, curriculum updates',
      ],
      [
        'Stakeholder views',
        'Single admin login; everyone sees everything',
        '8 role-specific dashboards (Principal / Faculty / Student / Admin / Exam Cell / Research Cell / Parent / IQAC)',
      ],
      [
        'Research records',
        'Offline; manual updates',
        'Live module with Scopus / WoS auto-pull (Pro Plus)',
      ],
    ]
  );
  appendSpacer(body);
}

function renderOneSentencePitches(body) {
  appendH2(body, 'One-sentence pitch per tier — for the front of the deck');

  appendCardGrid(
    body,
    [
      {
        header: 'Basic',
        body: '"Replace your ERP with one modern product that runs operations end-to-end, files AISHE / NIRF data with one click, and ships your institution website + alumni directory as part of the package."',
      },
      {
        header: 'Pro',
        body: '"Everything in Basic + give every student a cognitive twin, an AI tutor, 1-click placement applications with twin-scheduled prep, and live NAAC compliance. Replaces your ERP + LMS + AI tutor + NAAC consultant + website agency in one product."',
      },
      {
        header: 'Pro Plus',
        body: '"Everything in Pro + replaces NAAC / NBA consultants entirely, ships advanced learning intelligence (3D / AR / VR + real-time engagement detection), and runs multi-campus operations with white-label branding."',
      },
    ],
    3
  );
  appendSpacer(body);
}

function renderHowToUseFooter(body) {
  appendCallout(
    body,
    'How to use this doc in sales',
    'Lead with the "At a glance" table (Part 1) so procurement sees feature coverage instantly. Use the per-tier sections (Basic / Pro / Pro Plus) when buyers want to understand what they get for the price. Use Part 2 (Net-new + Reimagined) when buyers push back with "but we already have X" — those two sections are your differentiation playbook.',
    'info'
  );
}

// =====================================================================
// PRIMITIVE BUILDERS — typography, lists, callouts, tables, cards
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
    .setFontSize(15)
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
    .setFontSize(12)
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
  // small gap after the list
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
  titleP
    .editAsText()
    .setFontSize(11)
    .setBold(true)
    .setForegroundColor(fg);

  const bodyCell = table.getCell(1, 0);
  bodyCell.setBackgroundColor(bg);
  bodyCell.setPaddingTop(2);
  bodyCell.setPaddingBottom(10);
  bodyCell.setPaddingLeft(12);
  bodyCell.setPaddingRight(12);
  const bodyP = bodyCell.getChild(0).asParagraph();
  bodyP.setText(text);
  bodyP.setLineSpacing(1.4);
  bodyP
    .editAsText()
    .setFontSize(10)
    .setForegroundColor(COLORS.primary);
}

function appendComparisonTable(body, headers, rows, opts) {
  opts = opts || {};
  const allRows = [headers].concat(rows);
  const table = body.appendTable(allRows);
  table.setBorderColor(COLORS.border);
  table.setBorderWidth(1);

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

  for (let r = 0; r < rows.length; r++) {
    const row = table.getRow(r + 1);
    const tone = opts.rowTones ? opts.rowTones[r] : null;
    const bg = tone
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

      // Subtle accent for tier columns (Basic / Pro / Pro Plus) when this is the at-a-glance table
      if (headers.length === 4 && c >= 1) {
        const value = rows[r][c];
        if (typeof value === 'string') {
          if (value === '—') {
            t.setForegroundColor(COLORS.tertiary);
          } else if (value.indexOf('✓') === 0) {
            t.setBold(true).setForegroundColor(COLORS.successText);
          } else if (value.indexOf('◐') === 0) {
            t.setForegroundColor(COLORS.warningText);
          }
        }
      }

      // Status cells in single per-tier tables (Framework + Status)
      if (headers.length === 2 && c === 1 && typeof rows[r][c] === 'string') {
        const value = rows[r][c];
        if (value.indexOf('✓') === 0) {
          t.setBold(true).setForegroundColor(COLORS.successText);
        } else if (value.indexOf('◐') === 0) {
          t.setForegroundColor(COLORS.warningText);
        } else if (value.indexOf('—') === 0) {
          t.setForegroundColor(COLORS.tertiary);
        }
      }
    }
  }
}

function appendCardGrid(body, cards, columns) {
  const matrix = [];
  for (let i = 0; i < cards.length; i += columns) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push('');
    }
    matrix.push(row);
  }
  if (matrix.length === 0) return;

  const table = body.appendTable(matrix);
  table.setBorderColor(COLORS.border);
  table.setBorderWidth(1);

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < columns; c++) {
      const idx = r * columns + c;
      const card = cards[idx];
      const cell = table.getCell(r, c);
      cell.setBackgroundColor(COLORS.cardBg);
      cell.setPaddingTop(10);
      cell.setPaddingBottom(10);
      cell.setPaddingLeft(12);
      cell.setPaddingRight(12);

      if (!card) {
        cell.getChild(0).asParagraph().setText('');
        continue;
      }

      cell.clear();

      if (card.pill) {
        const pillBg = card.pillTone ? COLORS[card.pillTone + 'Bg'] : COLORS.neutralBg;
        const pillFg = card.pillTone ? COLORS[card.pillTone + 'Text'] : COLORS.neutralText;
        const pillP = cell.appendParagraph(card.pill);
        pillP
          .editAsText()
          .setFontSize(8)
          .setBold(true)
          .setForegroundColor(pillFg)
          .setBackgroundColor(pillBg);
        pillP.setSpacingAfter(4);
      }

      const headerP = cell.appendParagraph(card.header);
      headerP
        .editAsText()
        .setFontSize(11.5)
        .setBold(true)
        .setForegroundColor(COLORS.primary);
      headerP.setSpacingAfter(4);

      const bodyP = cell.appendParagraph(card.body);
      bodyP.setLineSpacing(1.4);
      bodyP
        .editAsText()
        .setFontSize(9.5)
        .setForegroundColor(COLORS.primary);
    }
  }
}
