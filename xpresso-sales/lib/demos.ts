import type { Demo } from "./types";

export const DEMOS: Demo[] = [
  {
    slug: "als/profile",
    layer: "ALS",
    num: 1,
    title: "Cognitive Profile Builder",
    wow: "A 3-minute interactive snapshot that produces the student's twin — clients finally see how we 'know' the learner.",
    steps: [
      "Student starts a brief on-ramp: 4 micro-activities for processing speed, working-memory span, attention, and modality preference.",
      "Each activity is short (30–60 seconds) and feels like a game — not a test.",
      "Live side panel fills in the cognitive profile in real time as each activity completes.",
      "Final screen: the resulting twin with confidence bars per trait and an explanation of what each trait means for the learning path.",
      "Hand-off: 'Open today's lesson →' which jumps straight into the Adaptive Path demo.",
    ],
    milestone: 5,
    status: "planned",
  },
  {
    slug: "als/adaptive-path",
    layer: "ALS",
    num: 2,
    title: "Adaptive Path + Multi-modal Twin",
    wow: "The system explains every decision it makes — modality, sequence, retest, everything.",
    steps: [
      "Open today's lesson. Watch the twin walk the knowledge graph live, checking prereqs one by one.",
      "Twin picks video for calc.derivative.geometric. Side panel shows why: attention 78, load 22, modality fit for geometric.",
      "Student attempts mcq-1, gets it wrong. Mastery dial dips. A misconception flag appears.",
      "Twin re-routes: serves a shorter 3D variant, then re-tests. Mastery climbs.",
      "Path replanned for tomorrow — next concept already queued with a chosen modality.",
    ],
    milestone: 2,
    status: "planned",
  },
  {
    slug: "als/ai-tutor",
    layer: "ALS",
    num: 3,
    title: "AI Tutor that actually knows the student",
    wow: "Grounded in your curriculum and this student's twin. Routes to shaky prereqs instead of hallucinating.",
    steps: [
      "Student types 'I don't get the chain rule.'",
      "Tutor reads the graph, identifies a shaky prereq (function_composition) from the twin's mastery vector.",
      "Routes the student back one node and explains in their preferred modality.",
      "Asks a checking question. Student answers. Mastery updates live.",
      "When student returns to chain_rule, tutor recaps explicitly from the prereq it just patched.",
    ],
    milestone: 7,
    status: "planned",
  },
  {
    slug: "als/effort-fair-assessment",
    layer: "ALS",
    num: 4,
    title: "Effort-fair, AI-aware Assessment",
    wow: "Solves the 'students use ChatGPT' panic for deans without policing or webcam surveillance.",
    steps: [
      "Student starts an internal assessment. Each item has an adaptive follow-up.",
      "Student pastes a long, polished answer in under 4 seconds. Interaction trail flags 'no thinking time'.",
      "System asks a probing follow-up: 'in your own words, what would change if y = sin(x²)?'",
      "Student now must reason live. Latency, edits, and confidence map to a 'fluency' score, not just a correctness score.",
      "Final dashboard shows correctness + fluency separately. Honest students benefit; pasted answers are surfaced for review, not punished automatically.",
    ],
    milestone: 9,
    status: "planned",
  },
  {
    slug: "ems/atom-authoring",
    layer: "EMS",
    num: 5,
    title: "Atom Authoring + Multi-modal Generation Factory",
    wow: "One atom in, four modalities out — PDF, audio, video, 3D — in minutes.",
    steps: [
      "Faculty pastes a concept into a blank atom shell.",
      "Sets prereqs, outcomes, difficulty, and misconceptions targeted.",
      "Clicks Generate variants. Animated pipeline produces: PDF preview, audio script, video storyboard, 3D scene preview.",
      "Faculty edits the video transcript inline; approves.",
      "Atom v1 appears as a node in the knowledge graph and is now servable in ALS.",
    ],
    milestone: 3,
    status: "planned",
  },
  {
    slug: "ems/knowledge-graph",
    layer: "EMS",
    num: 6,
    title: "Knowledge Graph Explorer (with OBE / CO–PO live)",
    wow: "The institution's curriculum as a navigable graph — and CO–PO (Course Outcomes → Program Outcomes) attainment falls out of it for free.",
    steps: [
      "Open the institution's knowledge graph. Filter by department, course, or program.",
      "Click a concept node: see its atoms, prereqs, leads-to chain, and which courses use it.",
      "Toggle Outcomes view: nodes recolor by CO → PO mapping; the panel shows live attainment % from real student data.",
      "Toggle Research view: nodes show which faculty papers or theses cite or extend this concept.",
      "Click Export NBA mapping — instant CO–PO attainment table for the selected program.",
    ],
    milestone: 6,
    status: "planned",
  },
  {
    slug: "ems/faculty-copilot",
    layer: "EMS",
    num: 7,
    title: "Faculty AI Co-Pilot",
    wow: "Cuts prep time 60–70% so EMS actually gets adopted instead of becoming a parked Google Drive.",
    steps: [
      "Faculty opens an existing atom. Co-pilot panel suggests: 'last cohort struggled with average vs instantaneous rate — emphasize this'.",
      "One click: Generate 5 question variants with predicted difficulty 2/5–4/5.",
      "One click: Draft a rubric from the atom's outcomes.",
      "Co-pilot flags a new paper imported to the institutional repository: 'this changes Section 5 of CS502 — review proposed updates'.",
      "Faculty accepts edits; new atom version flows to ALS for the next student.",
    ],
    milestone: 8,
    status: "planned",
  },
  {
    slug: "ems/heatmap-loop",
    layer: "EMS",
    num: 8,
    title: "Live Mastery Heatmap → Atom Rewrite Loop",
    wow: "Faculty find confusion the same day — not at semester end — and one click fixes the atom for the next cohort.",
    steps: [
      "Open the faculty dashboard for a course.",
      "Watch the heatmap light up as a simulated cohort answers an internal assessment.",
      "One cell turns red. Click it. 14 students share the misconception 'confuses_average_rate_with_instantaneous_rate'.",
      "Click View atom → opens the EMS authoring page with the misconception pre-loaded.",
      "Faculty publishes v2; banner: 'next 286 students will see the new version'.",
    ],
    milestone: 10,
    status: "planned",
  },
  {
    slug: "odp/career-recommender",
    layer: "ODP",
    num: 9,
    title: "Career-driven ODP Recommender + 1-click Enrollment",
    wow: "ODPs you actually need — based on your twin, your placement target, and your real skill gaps. Real institutional credit, not external certificates.",
    steps: [
      "Student picks a target role — e.g. 'Data Analyst — Banking sector'.",
      "Career simulator reads the cognitive twin + current mastery vector + IMS placement data for that role → produces a skill-gap radar.",
      "System recommends 2–4 ODPs ranked by closing-the-gap leverage. Each shows: predicted completion likelihood, projected mastery delta, credit value, time per week, NEP credit mapping.",
      "Student clicks 1-click enroll. The system runs semester clash detection, confirms fees/scholarship eligibility, and adds the ODP to the dashboard.",
      "On completion, credit hits the transcript + Academic Bank of Credits (ABC), and placement eligibility filters update automatically.",
    ],
    milestone: 11,
    status: "planned",
  },
  {
    slug: "als/in-class-capture",
    layer: "ALS",
    num: 10,
    title: "In-Class Capture → Daily Class Updates",
    wow: "Every lecture auto-transcribed and pushed to the course feed — students who miss class still see what was covered, and faculty get a free record of what they actually taught.",
    steps: [
      "Faculty starts the lecture — in-room mic streams audio (or join a virtual class). On-screen indicator: 'Capturing for CS101 · Lecture 14 · Faculty: Dr. Rao'.",
      "Live transcription panel shows the running transcript with speaker labels. Faculty + students see captions in real time.",
      "Lecture ends. System cleans the transcript (filler words removed, formulas / proper nouns flagged for review) and produces a structured summary: topics covered, examples, references to atoms.",
      "Faculty reviews the draft in a 'before publish' editor — fix any name / formula / typo. Approve.",
      "Approved transcript lands in the course feed as a 'Daily class update', searchable per course; absent students get a notification; IQAC sees the new evidence pinned to NAAC Criterion 2.",
    ],
    milestone: 1,
    status: "planned",
  },
  {
    slug: "als/placement-1-click-apply",
    layer: "ALS",
    num: 11,
    title: "Career Hub — 1-click apply with twin-aware prep",
    wow: "Student goes from 'I saw a drive on WhatsApp' to 'applied + interview prep auto-scheduled by my twin' in 90 seconds — replaces the Google Forms era forever.",
    steps: [
      "Student opens Career Hub. Live drives feed shows 5 active drives — already filtered by the eligibility engine (only ones the student qualifies for, with a 'Why these?' tooltip).",
      "Student clicks the Goldman Sachs drive. Side panel shows the JD, recruiter profile, eligibility breakdown ('You meet 4/4 criteria · CGPA 8.4 ≥ 7.5 · Backlogs 0 ≤ 0 · Branch CSE ✓ · ODP Finance 101 ✓'), key dates, and a one-line 'twin readiness' estimate.",
      "Student clicks Apply. Profile auto-fills from IMS (CGPA, projects, internships) + EMS (ODP completions, research) into a recruiter-ready resume. Student reviews + edits one project blurb in place. Submits.",
      "Confirmation screen: 'Applied · 14 days until written test'. The cognitive twin proposes a 4-session prep plan — aptitude (Mon), DSA round 1 (Wed), behavioral mock (Fri), HR mock (Sun) — fitted between existing classes and ODP commitments. One-click 'Add to my path'.",
      "10 days later, dashboard shows: '3/4 prep sessions complete · readiness score 78%. Written test passed · shortlisted for interview round'. Status tracking now lives in the same place as classes, fees, attendance — no Google Sheets needed.",
    ],
    milestone: 4,
    status: "planned",
  },
];

export function odpDemos() {
  return DEMOS.filter((d) => d.layer === "ODP").sort((a, b) => a.num - b.num);
}

export function getDemo(slug: string) {
  return DEMOS.find((d) => d.slug === slug);
}

export function alsDemos() {
  return DEMOS.filter((d) => d.layer === "ALS").sort((a, b) => a.num - b.num);
}

export function emsDemos() {
  return DEMOS.filter((d) => d.layer === "EMS").sort((a, b) => a.num - b.num);
}
