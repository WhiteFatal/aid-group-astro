# AID Group — Website Project Plan

**Project:** Multi-page corporate website for AID Group (Pharmaceutical Consulting & Engineering)
**Type:** Static site, no backend, no e-commerce, no contact form
**Hosting:** GitHub → Netlify/Vercel
**Language:** Bilingual site (English + Georgian, `/en/` `/ka/` URL structure). English built and finalized first; Georgian translation added afterward, manually corrected by client — not a dedicated translation workstream in this plan.
**SEO Geographic Target:** Caucasus & wider region
**Approach:** Sequential phases, each approved before the next begins

---

## Sitemap (Finalized)

| Page         | Content                                                                                                                                                                                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Home**     | Hero, short positioning statement, service highlights (icons, links to Services), Why AID Group (top highlights), Who We Serve (short hook — self-identification labels), **Partners — full bento grid (not a teaser)**, Featured Projects teaser (2–3 cards, links to Projects), closing CTA |
| **About Us** | Company Overview, Why AID Group Was Created, Key Advantages & Differentiation, Founders & Team, Standards & Regulatory Frameworks                                                                                                                                                             |
| **Services** | Service clusters (grouped from full service list), End-to-End Process/Lifecycle, Facility Types supported, Who We Serve (detailed, tied to relevant services)                                                                                                                                 |
| **Projects** | Split into Completed / Ongoing, rendered from a data array (JS/JSON) for easy future additions. Layout: full-width (100%) cards, stacked vertically one after another — not a multi-column grid                                                                                               |
| **Contact**  | Email, phone, address only — no form, no backend                                                                                                                                                                                                                                              |

**Navigation:** `Home · About · Services · Projects · Contact` (shared header/footer across all pages)

**Note on Partners:** originally planned as its own page, then briefly considered merged with Projects or placed on Contact — settled on a full section on Home instead. Rationale: Partners content (a logo grid, minimal text) is too thin to justify a standalone indexable URL on its own (risk of being flagged as low-value/thin content for SEO), and a "trusted by" logo section is standard, high-impact placement on a homepage. Revisit as a standalone page only if partner content grows to include per-partner descriptions, case studies, or quotes.

**Content balancing rationale:** "Who We Work With" is split — a short hook on Home (self-identification) and the fuller, service-tied version on Services — to keep About (credibility-focused, 5 content blocks) and Services (capability-focused) evenly weighted rather than one page being overloaded and another sparse.

---

## Phase 1 — Content Strategy & SEO Foundations

- **1.1 Information architecture** — ✅ Finalized (see Sitemap above)
- **1.2 SEO & keyword strategy** — ✅ Drafted (English). Per-page primary/secondary keyword targets defined based on services + audience + Caucasus/regional focus. Georgian keyword localization deferred to the translation pass.
- **1.3 Copywriting per section** — ✅ Drafted (English) and passed through a professional content-QA edit pass (grammar, clarity, flow). All content has been thoroughly reviewed for completeness (all 18 service items, 8 key advantages, 9 standards/frameworks, 8 facility types, 10 process steps, 6 audience items, hero message, and positioning statement all present where used). Note: after the content-QA pass, a small amount of copy is polished rather than strictly original wording (minor wording/flow fixes, e.g. the Home "At a Glance" restructure), and two short page-intro lines (About, Services) are new orientation copy — meaning fully preserved throughout, nothing substantive summarized or cut. **Appendix A is the authoritative final text**, not this summary.

  **Content exclusions (client-confirmed):**
  - **"End-to-End Process" content** — originally opened with "Yes.," an artifact answering an implied question, not public copy. Excluded; all substantive content (intro sentence + all 10 numbered process steps) is included in full on the Services page.
  - **"Target Audience" content** — originally opened with an internal instruction to the developer, not customer-facing text. Excluded; the actual audience list (6 items) is real content and is fully included on the Services page.

- **1.4 Metadata plan** — ✅ Finalized, updated for 5-page structure. Per-page `<title>` and meta description drafted for Home, About, Services, Projects, Contact. (The standalone "Our Partners" title/description drafted earlier is dropped — Partners is now a Home page section, not a separate URL.) OG/Twitter card pattern set (`og:locale = en`, `og:locale:alternate = ka_GE` — technical locale code stays `ka`, matching correct Georgian language tagging; only the visible UI language-switch label reads "GE," not "KA"). `Organization`/`ProfessionalService` JSON-LD structured data planned for Home page.

  **Per-page metadata** _(agreed earlier in-chat, now saved to file — Partners row dropped since it's a Home section, not a URL):_

  | Page     | Title Tag                                                    | Meta Description                                                                                                                                           |
  | -------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Home     | AID Group \| Pharmaceutical Engineering & GMP Consulting     | Pharmaceutical consulting & engineering across the Caucasus region — GMP/GDP compliance, facility design, equipment selection, qualification & validation. |
  | About    | About Us \| AID Group Pharmaceutical Engineering             | Owner-led pharmaceutical engineering consultancy bridging GMP compliance and technical execution — from design through qualification and validation.       |
  | Services | Services \| Pharmaceutical Facility Engineering & Validation | GMP consulting, facility & utility engineering, equipment selection, and qualification/validation (DQ/IQ/OQ/PQ) for pharmaceutical manufacturers.          |
  | Projects | Projects \| AID Group Pharmaceutical Engineering             | Completed and ongoing pharmaceutical facility engineering, qualification and validation projects delivered by AID Group.                                   |
  | Contact  | Contact Us \| AID Group Pharmaceutical Engineering           | Get in touch with AID Group for pharmaceutical facility engineering, GMP consulting, and qualification & validation support.                               |

  **Base social description** (used as company-level fallback, and reused as the footer blurb — see Appendix A) — full two-sentence version:

  > "AID Group is a pharmaceutical consulting and engineering company providing GMP/GDP consulting, facility and utility engineering support, equipment selection, project coordination, qualification and validation services. We support clients from initial concept and URS development through design, implementation, commissioning and compliant operation."

**Output:** Approved sections, copy, and metadata per page — signed off before visual work starts. ✅ Phase 1 complete.

### Outstanding inputs needed before full build

1. **Domain name** — ⏳ deferred by client (will be provided later). Not blocking: site builds and deploys to a temporary Netlify/Vercel subdomain using relative internal links; canonical URLs, `sitemap.xml`, `robots.txt`, and OG/hreflang absolute URLs get finalized once a domain is connected.
2. **Vector logo file (SVG/AI)** — ⏳ pending, client confirmed it will be provided
3. **Real contact details** — ✅ Provided:
   - Address: Otar Chiladze St. #166, Tbilisi, Georgia, 0160
   - Phone: +995 571 13 03 35
   - Email: aidgcec@gmail.com

---

## Phase 2 — Visual Design System

- **2.1 Color palette** — ✅ Finalized

  | Role                                | Hex       | Usage                                                                                                                                       |
  | ----------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
  | Primary (Navy)                      | `#0c385d` | Headers, nav bar, footer, primary headings                                                                                                  |
  | Secondary (Blue)                    | `#11669f` | Links, secondary UI, nav hover states                                                                                                       |
  | Primary Accent (Dark Teal-Green)    | `#1f6362` | CTA buttons, key highlights, active states                                                                                                  |
  | Secondary Accent (Light Teal-Green) | `#4fa68d` | Icon backgrounds, subtle highlights, hover glows — **not** used as a solid fill with text on top (fails WCAG AA in that use; see fix below) |
  | Background (base)                   | `#eeefed` | Page background                                                                                                                             |
  | Background (contrast)               | `#FFFFFF` | Cards, content panels                                                                                                                       |
  | Text — Heading                      | `#0c385d` | All headings                                                                                                                                |
  | Text — Body                         | `#37414a` | Paragraph text                                                                                                                              |
  | Border/Divider                      | `#DBDDD9` | Card borders, table lines                                                                                                                   |

  **Status colors (Projects page):** Completed → `#1f6362` (text `#FFFFFF`, 6.95:1 — corrected from `#4fa68d`/navy, which measured 4.13:1 and failed normal-text AA) · Ongoing → `#11669f` (text `#FFFFFF`, 6.13:1)

  **Notes:** No dark theme required. Client-specified colors: `#1f6362`, `#4fa68d`, `#0c385d`, `#11669f`, `#eeefed`, `#37414a`. Only pure white (`#FFFFFF`) and a soft border gray (`#DBDDD9`) were added, to cover card-surface and divider roles not otherwise specified.

  **Accessibility correction:** contrast ratios were recalculated (not just asserted) during final review. Text/heading/body pairings all pass comfortably (9–12:1). One real failure was found and fixed: `#4fa68d` used as a solid fill with text on top failed WCAG AA in three spots (white text: 2.93:1; navy text: 4.13:1 — both below the 4.5:1 requirement). Fixed by moving those three uses to darker palette colors (`#0c385d` navy or `#1f6362` dark teal-green) — see Status colors above and Buttons below. `#4fa68d` remains in use for icon backgrounds and hover glows, where no text sits directly on top.

- **2.2 Typography** — ✅ Finalized. Since the site is subdirectory-split (`/en/` `/ka/`), English and Georgian typography are independent choices — no page ever mixes both scripts, so no shared-family constraint is needed. Each language page loads only its own fonts (performance benefit).

  **English:**
  - Heading: **Space Grotesk** (geometric, technical/architectural character)
  - Body: **IBM Plex Sans** (corporate/technical, excellent readability, pairs well with Space Grotesk)

  **Georgian:**
  - Heading & Body: **Noto Sans Georgian** (weight-differentiated: 700 headings / 400 body) — chosen for reliable, mature web rendering over less common Georgian serif/display options

  **Type scale (both languages, desktop → mobile):**

  | Element  | Desktop     | Mobile      |
  | -------- | ----------- | ----------- |
  | H1       | 48px / 1.15 | 32px / 1.2  |
  | H2       | 34px / 1.2  | 26px / 1.25 |
  | H3       | 22px / 1.3  | 19px / 1.3  |
  | Body     | 17px / 1.6  | 16px / 1.6  |
  | Small/UI | 14px / 1.4  | 14px / 1.4  |

  All fonts loaded from `fonts.googleapis.com` with `font-display: swap`.

- **2.3 Style & iconography** — ✅ Finalized

  **Spacing:** 8px base grid (`xs` 8 · `sm` 16 · `md` 24 · `lg` 48 · `xl` 96 · `2xl` 128). Max container width 1200px, 24px mobile side padding.

  **Corner radius:** Cards/images 8px · Buttons 6px · Badges/tags 4px.

  **Elevation:** Flat-leaning; borders (`#DBDDD9`) over shadows by default; subtle shadow only on hover/interactive states and scrolled sticky nav.

  **Iconography:** Line icons, Lucide Icons set (MIT-licensed), 1.5–2px consistent stroke. Default color navy/body text; teal accent reserved for hover/CTA-linked icons.

  **Buttons:** Primary CTA — solid `#1f6362`, white text, hover → `#0c385d` (navy; corrected from `#4fa68d`, which failed contrast with white text). Secondary — outline `#0c385d`, hover fill `#11669f` (medium blue) with white text, 6.13:1 contrast — kept visually distinct from the primary CTA's navy hover so the two button styles remain distinguishable on interaction. Nav links — text, `#11669f` on hover/active.

  **Logo:** Confirmed — wordmark/monogram version (AID peak mark + "GROUP" + tagline "For a Healthier Tomorrow"). Colors kept as supplied for now (harmonization to exact palette hex values deferred to build phase). Icon-only monogram usable standalone for favicon/compact nav logo. Vector (SVG/AI) file to be supplied before build.

  **Tagline usage:** "For a Healthier Tomorrow" used as a small uppercase kicker line above the Home H1 hero headline (teal-green `#1f6362`), distinct from the functional H1 — emotional/values line paired with the technical headline, echoing the logo lockup.

  **Imagery approach:** No real photography yet; no AI-generated images produced during planning. Three placements planned, each with an AI-generation-ready prompt (also used as `alt` text) for the client to generate later; styled placeholder blocks (correct aspect ratio, no fake stock imagery) used in the interim build:
  1. **Home hero:** _"Modern clean office meeting room, large wall-mounted TV monitor displaying facility design drawings and technical blueprints, minimalist interior design, natural light, navy blue and teal-green accent tones, professional editorial photography style, wide shot"_
  2. **About Us:** _"Team of engineering and quality consultants collaborating around a table with blueprints and a laptop in a modern office, natural light, warm professional atmosphere, muted navy and teal accent tones, editorial photography style"_
  3. **Services:** _"Modern pharmaceutical quality control laboratory, clean white and glass surfaces, laboratory glassware and analytical equipment, soft cool lighting, teal and navy accent tones, minimalist professional photography style, no metallic or industrial machinery elements"_

  **Partner logos:** Full color (not grayscale), displayed in a **bento grid** — all tiles equal size, evenly arranged, no featured/emphasized partners. Hover: subtle lift + shadow + thin teal border glow.

- **2.4 Skeleton/wireframe** — ✅ Finalized (5-page structure)

  **Shared Header (all pages):** Logo · Home · About · Services · Projects · Contact · language switch labeled **"EN | GE"** (UI label only — underlying `lang`/`hreflang` attributes correctly stay `ka` for Georgian). Mobile: logo + hamburger → slide-down menu with same links + language toggle. **Confirmed: the toggle is built now but is intentionally non-functional (no `/ka/` pages exist yet) until Georgian content is ready — no further build decision needed on this.**

  **Shared Footer (all pages):** Logo + tagline + short blurb · Quick Links · Contact info · **Follow Us** (Facebook, Instagram, YouTube, WhatsApp icons — icon links only, no embedded feeds) · bottom line: `© AID Group [year]` + **"Website built by Radiance"** credit + language switch. Mobile: columns stack vertically.

  **Home:**

  ```
  HEADER
  ├ Hero (kicker "For a Healthier Tomorrow" + H1 + subline + CTA + image)
  ├ At a Glance + Positioning (2-col text)
  ├ Service Highlights (icon row, 4-up)
  ├ Why AID Group (highlight cards, 4-up)
  ├ Who We Serve (label row, 6-up)
  ├ PARTNERS — full bento grid, equal-size tiles, full-color logos
  ├ Featured Projects (teaser cards, 2–3, links to Projects page)
  ├ Closing CTA banner
  FOOTER
  ```

  **About Us:** Page intro → Company Overview → Why Created → Key Advantages (2-col icon list) → Founders & Team (+ image) → Standards & Regulatory Frameworks (2-col checklist)

  **Services:** Page intro → Service Clusters (**7** grouped cards w/ sub-items — corrected from an earlier miscount of 6; **desktop: all sub-items always visible, static cards** · **mobile: expandable accordion**, to save vertical space — this was previously only decided for mobile and is now finalized for both) → End-to-End Process (10-step horizontal stepper, vertical list on mobile) → Facility Types (icon/tag grid) → Who We Serve (detailed, service-tied cards)

  **Projects** _(standalone page, not merged with Partners)_: Page intro → Toggle/Tabs [Completed | Ongoing] → data-driven, full-width stacked cards, one per row, vertical layout — **not a multi-column grid** (name, status badge, description, photo)

  **Contact:** Page intro → Contact details block (Email/Phone/Address, icon-labeled) → ✅ live Google Maps embed (address confirmed: Otar Chiladze St. #166, Tbilisi, Georgia, 0160)

  **Mobile (all pages):** sections stack single-column; multi-column grids reduce to 1–2 columns; stepper/tab components adapt to vertical/stacked equivalents.

**Output:** Design spec + wireframes for all pages, approved before build. ✅ Phase 2 complete.

### Additional outstanding inputs (added this phase)

4. **Social media URLs** — ✅ Facebook provided (link on file). Instagram, YouTube: ⏳ not yet available — footer will show only Facebook + WhatsApp icons for now; Instagram/YouTube icons added later with no rebuild required once those pages exist.
5. **WhatsApp number** — ✅ Provided: +995 571 13 03 35 → footer link `wa.me/995571130335`

---

## Phase 3 — Technical & Architecture Decisions

- **3.1 Stack** — ✅ Decided: static HTML/CSS/JS, multiple pages sharing a common header/nav/footer. No framework, no build tooling required (Netlify/Vercel serve static files directly).
- **3.2 Contact mechanism** — ✅ Decided: plain contact information only (email, phone, address). No contact form, no backend.
- **3.3 Analytics** — ✅ Decided: not required.
- **3.4 Data-driven content** — ✅ Decided: Partners and Projects rendered from JS/JSON arrays, so adding a new partner or project means adding one entry to a data file, not editing page markup. Already the basis of the Home and Projects wireframes (2.4) and Appendix A. **One sample/placeholder entry will be included in each array (Partners, Projects) during the build stage**, purely to avoid an empty-looking section at launch — replaced with real data once supplied.
- **3.5 Accessibility target** — ✅ Decided: Baseline WCAG AA — contrast ratios, alt text, semantic HTML structure, keyboard navigation. Already actively applied: the Phase 2.1 color palette was explicitly verified against WCAG AA contrast requirements.

---

## Phase 4 — Hosting & Publishing

- **4.1 Hosting** — ✅ Decided: GitHub repository → deployed via Netlify or Vercel (final choice between the two, or another static host, TBD at deploy time — both work identically for this stack).
- **4.2 Domain/SSL** — ⏳ **Blocked on domain name** (see Outstanding Input #1) — not a pending decision, just literally not actionable yet. Once a domain is provided: pointing it at Netlify/Vercel and provisioning SSL is automatic on their end, no separate purchase or setup needed from us. To be completed in Phase 7.
- **4.3 SEO infrastructure** — ⏳ **Blocked on domain name**, same reason. `sitemap.xml`, `robots.txt`, and canonical/OG URLs all require real absolute URLs to generate correctly — they'll be built with placeholder-correct structure now, then finalized with the real domain in Phase 7, along with Google Search Console submission.

---

## Phase 5 — Build

Implement the approved wireframes, copy, design system, and data-driven Partners/Projects pages into working code, organized as a clean static site repo ready for GitHub.

---

## Phase 6 — QA Pass

- Cross-device / responsive check, all pages
- Navigation and internal linking check
- SEO technical check: heading hierarchy, alt text, meta tags per page, structured data (schema.org `Organization` / `ProfessionalService` markup)
- Accessibility check (WCAG AA)
- Performance/load check
- Content proofing, broken-link check

---

## Phase 7 — Deploy & Post-Launch

- Push repository to GitHub
- Connect and deploy via Netlify/Vercel
- Connect custom domain (if applicable)
- Submit sitemap to Google Search Console, verify indexing
- Confirm handoff plan: how content will be updated later (direct file edits vs. a more self-service setup), especially for adding new Partners/Projects entries

---

## Appendix A — Final English Website Copy

Single source of truth for all page content, incorporating the content-QA pass (wording polish, GMP/GDP terminology standardization, two new page intros). This is what gets built — not a summary of it.

### Shared Header

Logo · Home · About · Services · Projects · Contact · language switch **"EN | GE"**

### Shared Footer

> AID Group is a pharmaceutical consulting and engineering company providing GMP/GDP consulting, facility and utility engineering support, equipment selection, project coordination, qualification and validation services. _(same text as the base social/meta description, reused as the footer blurb)_

Quick Links (nav repeated) · Contact (Email/Phone/Address) · Follow Us (Facebook, WhatsApp icons now; Instagram/YouTube added later)
Bottom line: `© AID Group [year]` · Website built by Radiance · `EN | GE`

---

### HOME

**Hero**

- Kicker: _For a Healthier Tomorrow_
- H1: **Engineering Pharmaceutical Facilities for Compliance, Performance and Long-Term Reliability**
- Subline: AID Group combines pharmaceutical GMP expertise, engineering knowledge and project execution experience to support manufacturing facilities from concept and design through implementation, commissioning and qualification.
- CTA: `Discuss Your Project →`

**At a Glance** _(polished — restructured for parallel flow, same content)_

> AID Group provides integrated consulting, engineering and qualification services for pharmaceutical manufacturing facilities. We help clients turn operational needs and regulatory requirements into practical, compliant and efficient facilities — from early concept and user requirements, through design and equipment/utility selection, to implementation support, commissioning, qualification and validation.

**Our Positioning**

> AID Group bridges the gap between pharmaceutical quality requirements and engineering execution. Our goal is to ensure that every technical decision supports not only project delivery, but also GMP compliance, operational efficiency, maintainability and successful qualification.

**Service Highlights** _(icon row, links to Services — representative subset; all 7 clusters shown in full on Services)_

> GMP/GDP Consulting · Facility & Engineering Design · Equipment & Procurement · Qualification & Validation

**Why AID Group** _(top highlights, 4 of the 8 full Key Advantages — all 8 shown on About)_

> Pharmaceutical-sector specialization, not general construction · GMP/GDP and validation built into engineering decisions from day one · One team connecting Quality, Production, Engineering and vendors · Flexible engagement — full lifecycle or a targeted stage

**Who We Serve** _(short hook, 6 labels)_

> Local Manufacturers · Start-Ups & New Producers · Foreign Investors · International Pharma Companies · Facility Investors · Equipment & Engineering Partners

**Partners** _(full bento grid, full-color logos — no real partner logos supplied yet; one sample/placeholder entry included at build stage to avoid an empty section)_

> Intro line: "We work alongside manufacturers, equipment vendors and engineering partners across the region."

**Featured Projects** _(teaser, links to Projects — no real projects supplied yet)_

> Intro line: "A look at facilities we've helped design, build and qualify."

**Closing CTA**

> Planning a new facility or upgrading an existing one? Let's talk. `[Contact Us]`

---

### ABOUT US

**Page intro** _(new)_

> Who we are, why AID Group exists, and the standards that guide every project we take on.

**Company Overview** _(polished — minor word repetition fixed)_

> AID Group is a consulting and engineering company focused on the pharmaceutical and regulated life-science industries. The company supports clients in planning, designing, upgrading, qualifying and bringing pharmaceutical facilities and critical utility systems into compliant operation.
>
> Our approach combines pharmaceutical quality and regulatory knowledge with practical engineering and project execution experience. This allows AID Group to support clients not only with technical design, but also with the GMP logic behind that design, documentation, equipment selection, commissioning and qualification.

**Why AID Group Was Created**

> AID Group was created to address a common challenge in pharmaceutical projects: engineering, construction, equipment, quality assurance and validation are often handled separately, which can create design gaps, compliance risks, delays and costly rework.
>
> The company's main objective is to bring these disciplines together and provide clients with technically practical, GMP-oriented solutions from the earliest project stage. The focus is not simply on constructing a facility, but on helping create a facility that can operate reliably, efficiently and in compliance with applicable pharmaceutical requirements.

**Key Advantages and Differentiation** _(all 8, verbatim)_

> AID Group is not positioned as a conventional construction contractor. Its value comes from integrating pharmaceutical know-how with engineering and project implementation experience.

- Pharmaceutical-sector specialization rather than general construction
- GMP/GDP and validation considerations built into engineering decisions from the beginning
- Practical understanding of manufacturing processes, equipment and utility systems
- Ability to connect Quality, Production, Engineering and vendors within one project framework
- Support from concept and URS through design review, procurement, commissioning and qualification
- Independent technical evaluation of equipment and contractor proposals
- Focus on lifecycle cost, operability, maintainability and compliance — not only initial construction cost
- Flexible engagement: full lifecycle support or targeted consulting for a specific project stage

**Founders and Team Experience**

> The founders of AID Group bring complementary experience in pharmaceutical manufacturing projects, engineering, quality systems, GMP compliance, equipment and utility selection, procurement, project coordination, qualification and validation.
>
> Their background includes hands-on involvement in pharmaceutical facility upgrades, production and packaging equipment projects, HVAC and utility systems, purified water systems, cleanroom-related projects, vendor coordination, FAT/SAT activities and qualification/validation programs.
>
> This owner-led model allows AID Group to provide clients with direct access to experienced specialists throughout the project rather than relying only on general project-management resources.
>
> _(Flagged earlier: no individual founder names/titles in source — currently fully generic; adding real names/credentials would strengthen this section if available.)_

**Standards and Regulatory Frameworks** _(all 9, verbatim)_

> Projects are developed according to the applicable regulatory requirements and recognized industry standards relevant to each client, market and facility type. These may include:

- EU GMP principles and applicable Annexes
- PIC/S GMP guidance
- GDP requirements for pharmaceutical storage and distribution
- ICH quality risk-management principles
- ISO standards relevant to cleanrooms, HVAC, quality and engineering systems
- Good Engineering Practice (GEP)
- Risk-based qualification and validation principles
- Applicable pharmacopeial requirements for pharmaceutical water and utilities
- Local building, fire-safety, occupational-safety and engineering regulations
  > The exact regulatory basis is defined at project start according to the intended markets, product type and client quality system.

---

### SERVICES

**Page intro** _(new)_

> A closer look at how we support pharmaceutical facilities — from early concept and design through qualification and long-term compliance.

**Services and Scope** _(intro)_

> AID Group can support either the complete project lifecycle or selected individual stages, depending on the client's needs.

**7 Service Clusters** _(all 18 original service items, grouped)_

- **GMP/GDP Consulting & Compliance** — GMP/GDP consulting and compliance support · GMP readiness assessments, gap assessments and internal audits · SOP, protocol and technical/quality documentation development · Training for engineering, production and quality personnel
- **Facility & Engineering Design** — Pharmaceutical facility concept development and layout planning · Production, warehouse, laboratory and technical-area planning · User Requirement Specifications (URS) and technical requirement development · Engineering design coordination and design review
- **Utilities & Critical Systems** — HVAC and cleanroom concept review, zoning, pressure cascades and environmental requirements · Pharmaceutical water systems and other critical utility systems · Compressed air, clean gases and supporting utility systems
- **Equipment & Procurement** — Production and packaging equipment selection and technical evaluation · Vendor assessment, technical bid comparison and procurement support
- **Implementation & Commissioning** — FAT and SAT planning or supervision · Installation, commissioning and start-up support
- **Qualification & Validation** — Qualification and validation planning and execution support, including DQ, IQ, OQ and PQ · Risk assessments, traceability matrices and validation documentation
- **Facility Modernization** — Existing facility modernization, capacity expansion and compliance upgrades

**Facility Types We Support** _(all 8, verbatim)_

> AID Group is primarily oriented toward facilities where GMP compliance, controlled environments, specialized utilities and validated processes are required.

- Solid dosage manufacturing facilities — tablets, capsules and related processes
- Primary and secondary pharmaceutical packaging facilities
- Pharmaceutical warehouses and GDP-controlled storage areas
- Quality-control and support laboratories
- Cleanrooms and controlled manufacturing areas
- Pilot-scale and development areas
- Existing pharmaceutical plants requiring modernization or capacity expansion
- Greenfield pharmaceutical projects requiring concept-to-qualification support
  > Sterile, high-containment or other highly specialized facilities can be supported where the project team includes the appropriate verified specialist expertise for the specific technology and regulatory risk level.

**Our End-to-End Process** _(all 10 steps, "Yes." dropped per confirmed correction)_

> AID Group can provide end-to-end support from the earliest project definition through commissioning and qualification. Clients may also engage the company for only selected phases.

1. Project concept and feasibility
2. User requirements and scope definition
3. Facility and engineering concept
4. Design coordination and GMP design review
5. Equipment and contractor technical evaluation
6. Procurement support
7. Construction/installation coordination
8. FAT/SAT and commissioning support
9. Qualification and validation
10. GMP readiness and handover to routine operation

**Who We Serve** _(detailed, all 6 items — instruction sentence dropped per confirmed correction)_

- Existing local pharmaceutical manufacturers planning upgrades, expansions or new lines
- New pharmaceutical manufacturers and start-up production projects
- Foreign investors planning pharmaceutical manufacturing or packaging operations in Georgia or the region
- International pharmaceutical companies looking for a local engineering/GMP partner
- Investors developing pharmaceutical, laboratory, warehouse or regulated manufacturing facilities
- Equipment manufacturers and international engineering companies that need an experienced local project partner

---

### PROJECTS

**Page intro**

> A record of facilities we've helped design, build and qualify.

Toggle: `[Completed] [Ongoing]` — cards rendered from a data array, displayed as **full-width (100%) cards stacked vertically, one per row** (not a grid); no real project data supplied yet — one sample/placeholder entry included at build stage to avoid an empty page.

---

### CONTACT

**Page intro**

> Let's discuss your project.

**Details:** Email aidgcec@gmail.com · Phone +995 571 13 03 35 (also WhatsApp) · Address: Otar Chiladze St. #166, Tbilisi, Georgia, 0160
**Map:** live Google Maps embed of the above address

---

**Georgian version:** not yet drafted — deferred until English is fully built and approved, per earlier agreement. Client will manually correct the translation.

---

## Working Method

Each numbered sub-step is completed and presented for approval before moving to the next. No step is skipped or batched ahead without sign-off.

**Phases 1–4 are complete.** **Next step: Phase 5 — Build** (implementation begins, page by page, with approval at each step per the working method above).
