export type ResourceCategory = "blog" | "guide" | "compliance-update";

export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  readTimeMinutes: number;
  tags: string[];
  excerpt: string;
  body: string;
  isSeed: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
};

const complianceBody = `## What this update is

This is the standard post-federal-budget compliance update. When the finance minister delivers the federal budget, the Flexi compliance desk publishes what changed, when it applies, what Flexi has rolled out across customer tenants, and what action — if any — HR and payroll teams need to take.

For the current fiscal cycle, the specific numbers below are pending the budget announcement and the first of the post-budget customer rollouts.

## Structure of every compliance update

Every update in this series follows the same shape — so HR and payroll leaders know exactly where to look.

### 1. What changed

A precise summary of every rule that moves — WHT slabs, EOBI rates, PESSI thresholds, minimum wage by province, statutory leave entitlements.

### 2. When it applies

Effective dates matter. Some changes apply from 1 July. Some apply retrospectively to 1 July of the prior year. Some apply from the date of the Finance Act being passed. Flexi calls this out unambiguously.

### 3. What Flexi has rolled out

The updates the platform team has applied across all customer tenants — WHT slab tables updated, rate tables refreshed, payslip templates adjusted.

### 4. What HR and payroll teams need to do

Typically nothing. Occasionally a setting to confirm on Flexi HQ, or a disclosure to send to employees.

## The next update

**TODO — fill in with the actual post-budget update content** once the federal budget for the current fiscal year is delivered. Keep the structure above.

At minimum cover:

- WHT slab table with new slabs, floors, and marginal rates
- Any changes to tax credits or rebates
- EOBI rate changes (if announced)
- PESSI / provincial social security rate changes
- Minimum wage changes by province
- Any new statutory filings or return formats
- Any changes to payslip disclosure requirements from FBR`;

const whyComplianceBody = `## The shortest possible version of this post

Every HRMS in Pakistan says it is Pakistan-compliant. The claim is cheap. Ask ten vendors what "Pakistan-compliant" means and you will get ten different answers, most of them narrower than the real compliance surface.

This post is the full surface. Bookmark it for your next vendor conversation.

## WHT is not a slab table

Most HRMS products implement WHT as a lookup table. The table is correct. The implementation is not.

Pakistan's WHT on salary income uses **monthly averaging** — the expected annual tax divided over twelve months, with reconciliation at year-end and on separation. When a new slab comes into force mid-year, every employee's running WHT needs to recalculate based on what has already been deducted. When an employee leaves mid-year, the final payslip has to settle the tax position for the fiscal year so far.

Ask a vendor: "if WHT slabs change on 1 January, how does the January payroll handle employees who have already paid WHT under the old slabs?" If the answer is vague, the implementation is vague.

## EOBI is not just a rate

EOBI contributions are calculated on an **insurable wage** that is not the same as gross salary — there is a statutory floor and ceiling. Contributions track per employee from their registration. Employees without CNIC validation, or with invalid registrations, are audit exposure waiting to happen.

Ask a vendor: "how does your system prevent an employee being run through payroll without a valid EOBI registration?"

## PESSI is not a single thing

There is no national PESSI. There are four:

- **PESSI** — Punjab Employees' Social Security Institution
- **SESSI** — Sindh Employees' Social Security Institution
- **ESSI** — KP Employees' Social Security Institution
- Balochistan ESSI — where applicable

Each has its own rate, its own wage threshold, and its own filing format. The contribution goes to the province where the employee **works**, not where the company is registered.

A Punjab-based company with a plant in Sindh pays SESSI for the plant workforce and PESSI for the head office. Few HRMS products handle that correctly.

## WPS is not a feature — it is twenty features

Every bank has its own WPS bank file format. HBL's format is not UBL's. Meezan's is different again. MCB's changes occasionally.

A mid-size Pakistani enterprise typically pays employees through three or four banks. A payroll run has to generate three or four correctly-formatted files, not one.

Bank format changes happen without warning. HRMS products that hardcode format logic break. Flexi maintains connectors centrally — when HBL changes its format, your next payroll cycle uses the new format without you raising a ticket.

## FBR payslip content is easy to miss

FBR expects specific content on every payslip — components, deductions, tax paid, employer and employee contributions. HRMS products that let HR admins design "branded" payslips often let them accidentally remove required disclosure. That's an audit finding at the worst possible time.

Ask a vendor: "can your payslip designer remove FBR-required disclosure? what prevents that?"

## Provincial labour law actually varies

The Industrial and Commercial Employment (Standing Orders) Ordinance, the Factories Act, the Shops and Establishments Act, and the Minimum Wages Ordinance all have provincial variants with meaningful differences — overtime multipliers, leave entitlements, working-hour caps, minimum wages by category.

An HRMS that applies Sindh's overtime rules to a Punjab plant is generating wrong numbers — not obviously, not catastrophically, but wrong enough to become a finding during a labour department inspection.

## Retention

SBP expects ten years. FBR expects six. EOBI expects contribution records for as long as the pension obligation exists. Labour departments have their own expectations.

Any HRMS without immutable audit trail and enforced retention policy is pushing that problem onto the customer's IT team — and creating exposure where none should exist.

## The meta-point

"Pakistan compliance" is not a feature to check off. It is a surface area — dynamic, multi-layered, updated with every federal budget, every provincial notification, every bank format change.

The question to ask during vendor selection is not "are you Pakistan-compliant?"

It is "walk me through how you handle WHT slab mid-year changes. Walk me through how you handle a Punjab company paying a Sindh-based employee. Show me your last payslip template and what prevented an admin from removing FBR-required content. Show me how you retained the 2021 payroll records a ten-year SBP audit would ask for."

The answers to those questions separate the vendors.`;

const configurabilityBody = `## The word that is doing too much work

The single most common word in Pakistani HRMS marketing is **configurable**. Every vendor uses it. Every buyer discounts it.

The problem is that configurability is three different things, and vendors are selling whichever one they have while the buyer is trying to evaluate whichever one they need. Let's separate them.

## Configurability type 1: Parameterisation

At the shallow end, configurability means "there are settings pages." You can toggle features, pick from a dropdown of pre-defined options, set a flag, fill in a free-text field somewhere.

Parameterisation is not bad. It's necessary. It's also not enough for an enterprise HRMS deployment, because the space of configurations a large Pakistani enterprise actually needs is larger than any product team can enumerate in settings pages.

If a vendor's configurability story is "yes, you can configure it — here are 200 settings pages," they are selling parameterisation and calling it something it is not.

## Configurability type 2: Customisation

One step deeper, some vendors offer customisation — their implementation team will write code or tenant-specific logic to handle the things the product doesn't handle natively. This is different from parameterisation because the customer gets exactly what they want.

It is also different because:

- The customisation forks off the product for that customer
- Product upgrades break customisations, or customisations block upgrades
- The next customer with a similar requirement gets another fork
- Maintenance accumulates in tenant-specific code the vendor cannot easily retire

Customisation is configurability the buyer pays for twice — once at implementation, once every upgrade cycle thereafter.

## Configurability type 3: Per-tenant modelling

Third is the type worth the word. Per-tenant modelling means the product is built around the assumption that **every tenant defines its own data model, its own workflows, and its own policies** within boundaries the platform enforces.

No forks. No per-tenant code. The same codebase runs a manufacturing customer with CBA-recognised unions and a retail customer with split-shift commission bands — because both of those realities are expressible in the platform's configuration language, and neither requires a vendor engineer to write new code.

This is what Flexi HQ + Flexi Meta actually do. It's also what the word "configurable" should mean — but usually doesn't.

## Why it matters in buying

An HR leader selecting an HRMS in 2026 is buying a tool they expect to run on for the next decade. Over that decade:

- Federal budget changes will rewrite payroll rules
- Labour law will evolve
- The business will open new units, acquire companies, divest, restructure
- Policy will change in response to every leadership transition

If the HRMS has configurability type 1, each of those events is an exception to be handled, a workaround to be tolerated.

If the HRMS has type 2, each event is a vendor engagement with cost and timeline.

Only type 3 absorbs those events as part of what the platform is for.

## The question to ask

Don't ask "is your product configurable?" The answer is always yes.

Ask:

> "Your existing customer X runs on your product with workflow Y. If I implement your product and I need a workflow Y' — similar to Y but not identical — what does that involve?"

The three levels of configurability produce three very different answers:

1. **Parameterisation:** "We'll add a setting in the next release."
2. **Customisation:** "Our implementation team will handle that. It's a quote-able engagement."
3. **Per-tenant modelling:** "Your HR admin can build that in an afternoon. Here's how."

If you're paying enterprise prices, only the third answer is worth the money.

## The Flexi answer

Flexi HRMS is the per-tenant modelling answer. Flexi Meta is the dictionary and engine. Flexi HQ is the control plane your HR admin actually uses.

The proof is not the marketing. The proof is the customer list — retail, manufacturing, telecom, banking, healthcare, utilities — all running on the same codebase, each configured for its own operational reality. If configurability type 3 weren't real, that list would not exist.`;

const payrollChecklistBody = `## How to use this checklist

Print it. Keep it on the desk. Tick it off monthly, quarterly, annually, and after every federal budget.

Every item here is something a Pakistani enterprise payroll operation should do as a matter of routine. None of it is optional. All of it is auditable.

## Monthly payroll cycle

### 1. Attendance close

- All biometric data from all sites pulled into the HRMS
- Missed punches regularised and approved
- Overtime entries reviewed against policy caps
- Leave balance adjustments for the month processed

### 2. Inputs locked

- Joiners processed with correct pro-rated salary from the join date
- Leavers processed with final settlement, clearance, and gratuity where applicable
- Loan instalments confirmed against LoanHub
- Benefit elections confirmed against BenefitHub
- One-time payments (bonuses, commissions, reimbursements) reviewed

### 3. Calculation

- Payroll run with current WHT slab table
- EOBI contributions calculated per employee with insurable wage correctly applied
- PESSI / SESSI / ESSI calculated per employee's workplace province
- Provident fund contributions (employee + employer) calculated
- Any loan recoveries, advances, and adjustments applied

### 4. Variance review

- Gross-to-net variance vs. prior month reviewed
- Outlier employees (movements > threshold) investigated
- Finance sign-off obtained on the payroll register

### 5. Disbursement

- WPS bank files generated per partner bank in each bank's format
- Files transmitted, confirmations received, exceptions handled
- Payslips published to ESS and MobileEdge
- Tax certificates updated cumulatively

### 6. Archive

- Payroll register archived to DMS
- Audit trail for the cycle confirmed complete
- Accounting entries posted to finance system

## Quarterly statutory filings

- EOBI contribution returns filed (or monthly — check your establishment's obligation)
- PESSI / SESSI / ESSI returns filed per provincial authority
- Provident fund returns per fund trustee obligations
- Tax deducted at source returns (withholding statements) per FBR requirements
- Any provincial labour department returns (annual in some provinces, quarterly in others)

## Annual cycle

### April (near fiscal year-end)

- Annual appraisal outcomes finalised
- Salary revisions with effective dates loaded to PayEdge
- Arrears calculated and processed

### June (post-budget)

- WHT slab table updated for the new fiscal year
- EOBI, PESSI, and other statutory rate changes applied
- Minimum wage changes per province applied
- Tax credit and rebate logic refreshed

### July (first cycle of new fiscal year)

- First payroll run confirms new slabs applied correctly
- Variance analysis vs. June cycle — differences should be explained entirely by rate changes
- Annual tax certificates for the prior fiscal year generated and distributed

### Throughout the year

- Quarterly statutory filings (see above)
- Annual increments and promotion cycle per policy
- Annual leave encashment or carry-forward per policy

## Federal budget playbook

Every year in June, the federal budget lands. Here's the checklist the day after.

1. Confirm the finance minister's announcements against the printed Finance Bill
2. Map slab changes to your payroll configuration (WHT slabs, EOBI if changed, minimum wage, tax credits)
3. Verify with your HRMS vendor that updates are in train — for Flexi customers, this is already done
4. Communicate changes to employees via ESS announcement — especially if any change affects take-home
5. Run the first post-budget payroll with variance analysis flagging all differences
6. Reconcile at month-end against prior month — every variance should be explainable

## Audit preparedness — always

- Audit Trail retention confirmed per applicable retention period
- Evidence archive complete for every approval and every override
- Access review current — who can see and change salary data
- Vendor contracts, DPA, and SLA current
- Backup and disaster recovery tested within the last year

## If any of this is hard

Most of this checklist becomes frictionless on an HRMS that models it natively. Most of it becomes painful on an HRMS that doesn't.

If this checklist is painful every month, that is a signal worth acting on.`;

export const resources: Resource[] = [
  {
    slug: "why-pakistani-hrms-compliance-is-different",
    title: "Why Pakistani HRMS compliance is different",
    description: "A walkthrough of the compliance surface area — WHT, EOBI, PESSI, WPS, FBR, provincial labour law — and what makes it structurally harder than global HRMS vendors admit.",
    category: "blog",
    author: "Flexi Product Team",
    publishedAt: "2026-04-10",
    readTimeMinutes: 7,
    tags: ["Compliance", "Payroll", "Pakistan"],
    excerpt:
      "Every HRMS vendor says 'Pakistan compliant.' Few explain what that actually requires. This post lays out the compliance surface area HR and finance leaders should interrogate during vendor selection — WHT with monthly averaging, EOBI with CNIC validation, PESSI at the workplace province, WPS across banks, FBR content in payslips, and provincial labour law variants that actually vary.",
    body: whyComplianceBody,
    isSeed: false,
    seoTitle: "Why Pakistani HRMS compliance is different — from a vendor that actually built for it",
    seoDescription: "WHT, EOBI, PESSI, WPS, FBR, labour law — the compliance surface area Pakistani HR teams need to evaluate during HRMS vendor selection.",
    seoKeywords: ["HRMS compliance Pakistan", "payroll compliance Pakistan", "EOBI software", "WHT HRMS", "FBR payslip"],
  },
  {
    slug: "configurability-is-a-product-decision-not-a-feature",
    title: "Configurability is a product decision, not a feature",
    description: "Most HRMS vendors market configurability as a feature. It is actually three different things sold under one word. Here's how to separate them.",
    category: "blog",
    author: "Flexi Product Team",
    publishedAt: "2026-04-03",
    readTimeMinutes: 9,
    tags: ["Product", "Configurability", "Architecture"],
    excerpt:
      "The buyer asks 'is your HRMS configurable?' and every vendor says yes. The word is doing too much work. This post separates three different things sold as configurability — parameterisation, customisation, and per-tenant modelling — and explains why only the last one actually solves the problem.",
    body: configurabilityBody,
    isSeed: false,
    seoTitle: "Configurability is a product decision, not a feature | Flexi HRMS",
    seoDescription: "Three things HRMS vendors sell as configurability — parameterisation, customisation, per-tenant modelling — and why only one of them actually works.",
    seoKeywords: ["configurable HRMS", "HR product architecture", "HRMS customisation", "multi-tenant HRMS"],
  },
  {
    slug: "pakistan-payroll-checklist-for-hr-leaders",
    title: "The Pakistan payroll checklist every HR leader should keep on their desk",
    description: "A one-page checklist of every payroll calculation, statutory filing, and audit step that matters for Pakistani enterprise payroll — monthly, quarterly, annual, and after every federal budget.",
    category: "guide",
    publishedAt: "2026-03-25",
    updatedAt: "2026-04-15",
    readTimeMinutes: 12,
    tags: ["Payroll", "Checklist", "Compliance"],
    excerpt:
      "If your HR team is running payroll today, this is the one-pager you want on the desk — what to calculate, what to file, what to audit, and what to reconcile. Structured by monthly cycle, by quarter, by fiscal year, and by federal-budget event.",
    body: payrollChecklistBody,
    isSeed: false,
    seoTitle: "Pakistan payroll checklist for HR leaders | Flexi HRMS guide",
    seoDescription: "Monthly, quarterly, annual, and post-budget Pakistan payroll checklist — what to calculate, file, audit, and reconcile.",
    seoKeywords: ["Pakistan payroll checklist", "HR compliance checklist", "payroll audit checklist", "EOBI filing checklist"],
  },
  {
    slug: "federal-budget-2026-payroll-changes",
    title: "Federal Budget compliance update — template",
    description: "Standard structure for post-federal-budget compliance updates. Content for the current cycle will be populated when the budget is delivered.",
    category: "compliance-update",
    author: "Flexi Compliance Desk",
    publishedAt: "2026-06-15",
    readTimeMinutes: 6,
    tags: ["Budget", "WHT", "EOBI", "Compliance"],
    excerpt:
      "Post-budget compliance update — what changed, when it takes effect, what Flexi has already applied across customer tenants, and what action (if any) HR and payroll teams need to take. This is the template; each fiscal year's actual update lands in the same format.",
    body: complianceBody,
    isSeed: true,
    seoTitle: "Federal Budget — payroll changes | Flexi HRMS",
    seoDescription: "The payroll changes from the federal budget that HR and finance leaders need to apply — and what Flexi has already rolled out across customer tenants.",
    seoKeywords: ["federal budget Pakistan payroll", "WHT slabs Pakistan", "EOBI rate Pakistan", "budget compliance update"],
  },
];

export const getResource = (slug: string): Resource | undefined =>
  resources.find((r) => r.slug === slug);

export const resourceSlugs = (): string[] => resources.map((r) => r.slug);

export const resourcesByCategory = (cat: ResourceCategory): Resource[] =>
  resources.filter((r) => r.category === cat).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const categoryMeta: Record<ResourceCategory, { label: string; href: string; description: string }> = {
  blog: {
    label: "Blog",
    href: "/resources/blog",
    description: "Product thinking, HR market commentary, and the occasional customer story.",
  },
  guide: {
    label: "Guides",
    href: "/resources/guides",
    description: "Practical, checklisted resources you can use. Pakistan payroll, compliance, implementation.",
  },
  "compliance-update": {
    label: "Compliance updates",
    href: "/resources/compliance-updates",
    description: "Federal budget reactions, EOBI rate changes, provincial labour law adjustments — as they happen.",
  },
};
