/**
 * Xpresso — LMS vs IMS vs Xpresso Comparison Doc Renderer
 * =========================================================
 *
 * Generates a fully formatted Google Doc from the
 * "lms-ims-vs-xpresso" canvas content. Useful for sales
 * conversations, leave-behinds, investor materials, etc.
 *
 * How to use:
 *  1. Go to https://script.google.com and click "New project"
 *  2. Delete the default Code.gs content
 *  3. Paste this entire file into the editor
 *  4. Save (Cmd/Ctrl + S)
 *  5. From the dropdown, pick `renderXpressoComparison` and click Run
 *  6. First run will request Google Drive permissions — accept
 *  7. The generated doc appears in your Google Drive root
 *     (and the URL prints in the script logs)
 *
 * The script is self-contained — all content is embedded below.
 * Edit the CONTENT section at the bottom to customize what gets rendered.
 */

// =====================================================================
// COLOR PALETTE — flat, minimal, no gradients
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
function renderXpressoComparison() {
  const doc = DocumentApp.create(
    'Xpresso — Feature Comparison vs Traditional LMS & IMS'
  );
  const body = doc.getBody();
  body.clear();

  body.setMarginTop(54);
  body.setMarginBottom(54);
  body.setMarginLeft(54);
  body.setMarginRight(54);

  // Render all sections
  renderTitleSection(body);
  renderHeadlineStats(body);
  renderHowToReadCallout(body);
  renderTraditionalLMSSection(body);
  renderXpressoALSAdditions(body);
  renderTraditionalIMSSection(body);
  renderXpressoIMSAdditions(body);
  renderNetNewCapabilities(body);
  renderIntegrationPremium(body);
  renderSalesPositioning(body);
  renderBottomLine(body);

  // Log the URL so user can open the doc
  Logger.log('Document created: ' + doc.getUrl());

  // Try to also open it in the editor
  return doc.getUrl();
}

// =====================================================================
// SECTION RENDERERS — one per major section
// =====================================================================

function renderTitleSection(body) {
  appendH1(body, "What's table stakes vs what Xpresso adds");
  appendBodyText(
    body,
    'Side-by-side of features in traditional LMS products (Moodle, Canvas, Blackboard, Google Classroom, Edmingle) and Indian higher-ed IMS / ERP products (MasterSoft, Camu, Linways, Frontcore) — and exactly what Xpresso adds on top of each, plus the capabilities that don\'t exist in either category.',
    { tone: 'secondary' }
  );
  appendSpacer(body);
}

function renderHeadlineStats(body) {
  appendH2(body, 'The headline picture');
  appendStatsRow(body, [
    { value: '14', label: 'Features every LMS already has' },
    { value: '13', label: 'Features every IMS already has' },
    { value: '22', label: 'Net-new Xpresso capabilities', tone: 'success' },
    { value: '8', label: 'That don\'t exist in either category', tone: 'info' },
  ]);
  appendSpacer(body);
}

function renderHowToReadCallout(body) {
  appendCallout(
    body,
    'How to read this',
    'Xpresso doesn\'t replace what these categories do — it does all of it, then adds intelligence on top. The 22 net-new capabilities are split into three groups: (1) reimagined versions of table-stakes features (e.g., "course content" → "atomic knowledge units in a graph"), (2) adjacent features competitors miss (e.g., compliance autopilot), and (3) genuinely new categories that don\'t exist in either LMS or IMS today (e.g., cognitive twin, ODP).',
    'info'
  );
  appendSpacer(body);
}

function renderTraditionalLMSSection(body) {
  appendH2(body, 'Traditional LMS — what every product already has');
  appendBodyText(
    body,
    'Moodle (open source), Canvas, Blackboard, Google Classroom, edmingle, Skill Lake, and most Indian college LMS products all ship the same baseline.',
    { tone: 'secondary' }
  );
  appendComparisonTable(
    body,
    ['Feature', 'What it does', 'Quality bar today'],
    [
      ['Course management', 'Create courses, organize into modules/sections', 'Universal'],
      ['Content upload (PDF, video, links)', 'Faculty uploads static files; students download', 'Universal'],
      ['Assignment workflow', 'Create, distribute, collect, grade assignments', 'Universal'],
      ['Quiz engine', 'MCQ / true-false / short-answer / fill-in-the-blank', 'Universal'],
      ['Gradebook', 'Manual + auto-graded scores per course per student', 'Universal'],
      ['Discussion forums', 'Threaded discussions per course or topic', 'Universal'],
      ['Announcements', 'Faculty broadcasts to course roster', 'Universal'],
      ['Calendar / due dates', 'Course events + deadlines', 'Universal'],
      ['Roster management', 'Enrollment in courses, sections, batches', 'Universal'],
      ['Basic analytics', 'Completion %, last login, time on page', 'Universal but shallow'],
      ['Notifications + email', 'Email digests + in-app alerts', 'Universal'],
      ['Mobile app', 'Read-only or basic interaction', 'Most'],
      ['SIS integration', 'Roster sync with student information system', 'Most'],
      ['Plagiarism check integration', 'Turnitin / similar', 'Some'],
    ]
  );
  appendSpacer(body);
}

function renderXpressoALSAdditions(body) {
  appendH2(body, 'What Xpresso ALS adds — same job, radically different execution');
  appendBodyText(
    body,
    'The features below either reimagine what a traditional LMS does or add capabilities that don\'t exist in the LMS category at all.',
    { tone: 'secondary' }
  );

  const rows = [
    ['Course content as monolithic PDFs / videos', 'Atomic knowledge units with prerequisites, leads-to, and outcome tags', 'Reimagined'],
    ['Quiz engine measures right/wrong', 'Effort-fair, AI-aware assessment grounded in misconception graph', 'Reimagined'],
    ['Gradebook shows scores', 'Real-time mastery + CO–PO attainment tracking', 'Reimagined'],
    ['Basic analytics (completion %, time)', 'Cognitive twin — per-student persistent model of learning traits + state', 'Net-new'],
    ['(Some) generic chatbot', 'AI tutor grounded in YOUR institution\'s atoms, not the open web', 'Reimagined'],
    ['One content format per topic', 'Multi-modal content factory — same atom auto-generated as PDF / video / audio / 3D', 'Net-new'],
    ['Linear course sequence', 'Adaptive learning path generation per student', 'Net-new'],
    ['No cognitive profiling', 'Initial cognitive assessments → working memory, processing speed, attention, learning style', 'Net-new'],
    ['No misconception tracking', 'Misconception graph — common errors mapped per concept, surfaced to faculty', 'Net-new'],
    ['Faculty creates everything manually', 'Faculty AI co-pilot — generates atoms, drafts assessments, suggests improvements', 'Net-new'],
    ['No real-time engagement signal', 'Real-time engagement detection feeds back into modality selection', 'Net-new'],
  ];
  const tones = rows.map((r) =>
    r[2] === 'Net-new' ? 'success' : 'info'
  );
  appendComparisonTable(
    body,
    ['Traditional LMS approach', 'Xpresso approach', 'Category'],
    rows,
    { rowTones: tones }
  );
  appendSpacer(body);
}

function renderTraditionalIMSSection(body) {
  appendH2(body, 'Traditional IMS / higher-ed ERP — what every product already has');
  appendBodyText(
    body,
    'MasterSoft, Camu, Linways, Frontcore, Eduvanz, and most legacy Indian college ERPs ship roughly the same baseline.',
    { tone: 'secondary' }
  );
  appendComparisonTable(
    body,
    ['Feature', 'What it does', 'Quality bar today'],
    [
      ['Student admissions + enrollment', 'Application, eligibility, offer, confirmation, semester enrollment', 'Universal'],
      ['Student / faculty profiles', 'Basic info, photo, contact, qualifications', 'Universal'],
      ['Attendance management', 'Manual + (sometimes) biometric, parent SMS', 'Universal'],
      ['Fee management', 'Fee structure, dues, receipts, gateway integration', 'Universal'],
      ['Examination management', 'Exam scheduling, hall ticket, marks entry', 'Universal'],
      ['Results processing', 'Marks → grades → CGPA → transcripts', 'Universal'],
      ['Library management', 'Books, journals, transactions, fines', 'Universal'],
      ['Hostel management', 'Blocks, rooms, occupancy, fees', 'Universal'],
      ['Placement records', 'Companies, offers, packages, drives', 'Universal'],
      ['Faculty HR', 'Profile, qualifications, workload, leaves', 'Universal'],
      ['Timetable', 'Course schedule, room allocation, faculty assignment', 'Universal'],
      ['Parent communication', 'SMS / email for attendance + marks', 'Universal but basic'],
      ['AISHE / basic statutory reports', 'Static reports for government filings', 'Most, but manual'],
    ]
  );
  appendSpacer(body);
}

function renderXpressoIMSAdditions(body) {
  appendH2(body, 'What Xpresso IMS adds — same job, modernized');

  const rows = [
    ['Modules in silos (attendance ≠ fees ≠ marks)', 'Unified data layer — every event flows across modules in real time', 'Reimagined'],
    ['Static compliance reports generated once a year', 'Compliance Autopilot — live coverage % per criterion, evidence assembled continuously', 'Net-new'],
    ['Approvals via email / paper', 'Approval workflows engine (procurement, leave, hiring, sabbatical)', 'Reimagined'],
    ['No audit trails on changes', 'Granular audit trails on every record — DVV anomaly resolution becomes trivial', 'Reimagined'],
    ['10–15 year old UX', 'Modern mobile-first interface with realtime updates', 'Reimagined'],
    ['Single admin login + everyone-sees-everything', '8 stakeholder dashboards (Principal, Faculty, Student, Admin, Exam Cell, Research Cell, parent, IQAC)', 'Reimagined'],
    ['OBE / CO–PO done in spreadsheets', 'Live CO–PO mapping wired into actual student performance data', 'Net-new'],
    ['Committee MoMs in Word docs', 'Committee + MoM workspace with action-item tracking', 'Reimagined'],
    ['Policy docs scattered across SharePoint', 'Policy document registry with acknowledgement tracking', 'Reimagined'],
    ['Single-channel parent comm (SMS only)', 'Multi-channel (WhatsApp + SMS + email + push) with delivery + acknowledgement tracking', 'Reimagined'],
    ['Research data is offline', 'Research module — publications, patents, citations auto-pulled from Scopus / WoS', 'Net-new'],
  ];
  const tones = rows.map((r) => (r[2] === 'Net-new' ? 'success' : 'info'));
  appendComparisonTable(
    body,
    ['Traditional IMS approach', 'Xpresso approach', 'Category'],
    rows,
    { rowTones: tones }
  );
  appendSpacer(body);
}

function renderNetNewCapabilities(body) {
  appendH2(body, 'The capabilities that don\'t exist in either category');
  appendBodyText(
    body,
    'These are net-new — not present in any traditional LMS, not present in any traditional IMS, and not delivered as an integrated product anywhere in the Indian higher-ed market.',
    { tone: 'secondary' }
  );

  appendCardGrid(
    body,
    [
      {
        pill: 'Net-new #1',
        pillTone: 'success',
        header: 'Cognitive Twin',
        body: 'Per-student persistent model of learning traits (processing speed, working memory, attention patterns, learning style, cognitive load tolerance, metacognitive awareness) + real-time state (attention level, working-memory load right now). Nothing in either category does this.',
      },
      {
        pill: 'Net-new #2',
        pillTone: 'success',
        header: 'Knowledge Graph + Atomic Content',
        body: 'Knowledge as a network of atoms with prerequisite, leads-to, part-of, and assesses relationships. LMS treats content as monolithic; IMS doesn\'t touch content. Only Xpresso has the graph as a first-class object.',
      },
      {
        pill: 'Net-new #3',
        pillTone: 'success',
        header: 'Compliance Autopilot',
        body: 'Live, continuous compliance coverage for NAAC, NIRF, NBA, AISHE, UGC, AICTE — assembled from operational data, not generated as a one-off PDF. Replaces NAAC consultants (₹15 – 50 L cycle spend).',
      },
      {
        pill: 'Net-new #4',
        pillTone: 'success',
        header: 'ODP (On-Demand Programs)',
        body: 'Modular, credit-linked short programs (2–6 weeks) plugged into the university\'s credit system. Bridges the gap between slow curriculum cycles and fast industry demand. No LMS or IMS treats this as a first-class object.',
      },
      {
        pill: 'Net-new #5',
        pillTone: 'success',
        header: 'Real-time ALS ↔ EMS data flow',
        body: 'Event bus connecting content changes in EMS to ALS personalization, and student mastery signals from ALS back to EMS for content quality improvement. LMS + ERP integrations are batch jobs at best.',
      },
      {
        pill: 'Net-new #6',
        pillTone: 'success',
        header: 'Adaptive Learning Path Generation',
        body: 'Per-student learning sequence selected based on cognitive twin state, mastery history, and concept prerequisites. Not the same as "personalized recommendations" — this is path generation, not item ranking.',
      },
      {
        pill: 'Net-new #7',
        pillTone: 'success',
        header: 'AI Tutor grounded in institution content',
        body: '24×7 chatbot that answers from your atoms + curriculum, not the open web. Knows what\'s in scope, what\'s been taught, what comes next. Generic chatbots can\'t do this.',
      },
      {
        pill: 'Net-new #8',
        pillTone: 'success',
        header: 'Multi-modal Content Factory',
        body: 'Faculty creates an atom once; AI auto-generates the same atom as PDF, audio podcast, narrated video, 3D animation, interactive simulation. Selected and served per student based on cognitive twin state.',
      },
    ],
    2
  );
  appendSpacer(body);
}

function renderIntegrationPremium(body) {
  appendH2(body, 'The integration premium — what you get from a single product');
  appendBodyText(
    body,
    'Even if you pieced together best-of-breed LMS + best-of-breed ERP + best-of-breed AI tutor + best NAAC tool, you\'d still be missing what Xpresso has — because the data doesn\'t flow.',
    {}
  );
  appendComparisonTable(
    body,
    ['Capability', 'Why integration matters'],
    [
      [
        'Attendance dip → adaptive path adjustment',
        'ERP knows student missed 3 classes. ALS auto-prioritizes catch-up atoms. Stitching 2 tools requires custom integration; brittle.',
      ],
      [
        'Mastery signal → CO–PO attainment → AQAR draft',
        'Student masters concept in ALS → CO attainment updates in EMS → AQAR criterion auto-populates. Three systems, one data flow.',
      ],
      [
        'Cognitive load → exam difficulty calibration',
        'ALS sees rising cognitive load across cohort → flags exam cell to recalibrate. No LMS-ERP integration does this.',
      ],
      [
        'Compliance evidence repository',
        'Every operational event (attendance, marks, faculty FDP, research output) becomes evidence for criteria — automatically tagged by Compliance Autopilot.',
      ],
      [
        'Single sign-on, single roster, single source of truth',
        'No "why doesn\'t this student appear in this module" tickets. No reconciliation jobs. No data inconsistency between systems.',
      ],
    ]
  );
  appendSpacer(body);
}

function renderSalesPositioning(body) {
  appendH2(body, 'Sales positioning — three sentences to lead with');
  appendCardGrid(
    body,
    [
      {
        header: 'vs Traditional LMS',
        body: '"Your LMS treats every student the same and every piece of content as a static file. Xpresso has a cognitive twin per student and a knowledge graph of atoms — the same content adapts to who\'s learning it."',
      },
      {
        header: 'vs Traditional IMS / ERP',
        body: '"Your ERP generates a NAAC report once a year and the data is never accurate. Xpresso runs Compliance Autopilot continuously — every criterion, every framework, always live."',
      },
      {
        header: 'vs Both combined',
        body: '"Even if you bought a great LMS and a great ERP, the data wouldn\'t flow between them. Xpresso is one product — atoms, attendance, fees, research, compliance all share the same spine."',
      },
    ],
    3
  );
  appendSpacer(body);
}

function renderBottomLine(body) {
  appendH2(body, 'Bottom line');
  appendBodyText(
    body,
    'Traditional LMS gives you 14 baseline features for delivering courses. Traditional IMS gives you 13 baseline features for running operations. Xpresso ships all 27 of those — and adds 22 capabilities on top, including 8 that don\'t exist anywhere else in the market.',
    {}
  );
  appendBodyText(
    body,
    'When pitching, don\'t try to win on the 27 table-stakes features — those are checkboxes that procurement ticks. Win on the 8 net-new capabilities (cognitive twin, knowledge graph, compliance autopilot, ODP, adaptive path, grounded AI tutor, multi-modal factory, real-time ALS ↔ EMS flow). Those are what you can\'t get anywhere else, and that\'s why the integrated product commands premium pricing.',
    { tone: 'secondary' }
  );
}

// =====================================================================
// PRIMITIVE BUILDERS — typography, callouts, stats, tables, cards
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

  // Title cell
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

  // Body cell
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
    vp.editAsText().setFontSize(22).setBold(true).setForegroundColor(fg);

    const labelCell = table.getCell(1, i);
    labelCell.setBackgroundColor(bg);
    labelCell.setPaddingTop(2);
    labelCell.setPaddingBottom(12);
    labelCell.setPaddingLeft(8);
    labelCell.setPaddingRight(8);
    const lp = labelCell.getChild(0).asParagraph();
    lp.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    lp.editAsText()
      .setFontSize(9)
      .setForegroundColor(COLORS.secondary);
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
    cell.getChild(0)
      .asParagraph()
      .editAsText()
      .setFontSize(10)
      .setBold(true)
      .setForegroundColor(COLORS.headerText);
  }

  // Body rows
  for (let r = 0; r < rows.length; r++) {
    const row = table.getRow(r + 1);
    const tone = opts.rowTones ? opts.rowTones[r] : null;
    const bg = tone
      ? COLORS[tone + 'Bg']
      : r % 2 === 0
      ? COLORS.zebraEven
      : COLORS.zebraOdd;
    const fg = COLORS.primary;

    for (let c = 0; c < headers.length; c++) {
      const cell = row.getCell(c);
      cell.setBackgroundColor(bg);
      cell.setPaddingTop(6);
      cell.setPaddingBottom(6);
      cell.setPaddingLeft(10);
      cell.setPaddingRight(10);
      const t = cell.getChild(0).asParagraph().editAsText();
      t.setFontSize(9.5).setForegroundColor(fg);

      // Bold the "category" column when row is toned
      if (
        tone &&
        c === headers.length - 1 &&
        typeof rows[r][c] === 'string' &&
        (rows[r][c] === 'Net-new' || rows[r][c] === 'Reimagined')
      ) {
        t.setBold(true).setForegroundColor(COLORS[tone + 'Text']);
      }
    }
  }
}

function appendCardGrid(body, cards, columns) {
  // Build a rows-of-cells matrix
  const matrix = [];
  for (let i = 0; i < cards.length; i += columns) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(''); // placeholder, content set below
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

      // Clear default paragraph
      cell.clear();

      // Optional pill
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

      // Header
      const headerP = cell.appendParagraph(card.header);
      headerP
        .editAsText()
        .setFontSize(11.5)
        .setBold(true)
        .setForegroundColor(COLORS.primary);
      headerP.setSpacingAfter(4);

      // Body
      const bodyP = cell.appendParagraph(card.body);
      bodyP.setLineSpacing(1.4);
      bodyP
        .editAsText()
        .setFontSize(9.5)
        .setForegroundColor(COLORS.primary);
    }
  }
}
