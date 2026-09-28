# AID Group — Website Project Plan

**Project:** Multi-page corporate website for AID Group (Pharmaceutical Consulting & Engineering)
**Type:** Static site (Astro), no backend, no e-commerce, no contact form
**Hosting:** GitHub → Netlify/Vercel
**Domain:** **[gxp.ge](https://gxp.ge)** — ✅ acquired and confirmed
**Language:** Bilingual site (English + Georgian, `/en/` `/ka/` URL structure). English built first; Georgian translation added afterward, manually corrected by client — not a dedicated translation workstream in this plan.
**SEO Geographic Target:** Caucasus & wider region
**Approach:** Sequential phases, each approved before the next begins — in practice, the Home page has been built and refined through many small, individually-approved steps rather than one single sign-off, per the client's preferred step-by-step working method.

> **Revision note:** This plan was updated after the Home page build to reflect what was actually approved and shipped, which diverges from the original wireframe and design-system spec in a number of places (stack, section order/content, imagery, decoration). Nothing below is aspirational — it describes the live Home page plus the still-outstanding pages. Where the original plan's decision was superseded, the original line is kept and struck through in spirit by an inline **"Superseded"** note rather than deleted, so the project history stays visible.

---

## Sitemap (Updated)

| Page         | Content                                                                                                                                                                                                                                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Home**     | ✅ **Built.** Hero → **Areas of Engagement + Partners** (merged, side-by-side) → **AID Group Expertise** (service highlights, redesigned) → Why AID Group → **At a Glance / Our Positioning + Closing CTA** (merged). Featured Projects section dropped entirely. See "Home — As Built" below for the full detail.                             |
| **About Us** | ⏳ Not started. Company Overview, Why AID Group Was Created, Key Advantages & Differentiation, Founders & Team, Standards & Regulatory Frameworks — content unchanged, see Appendix A.                                                                                                                                                          |
| **Services** | ⏳ Not started. Service clusters (grouped from full service list), End-to-End Process/Lifecycle, Facility Types supported, Who We Serve (detailed, tied to relevant services) — content unchanged, see Appendix A.                                                                                                                              |
| **Projects** | ⏳ Not started. Split into Completed / Ongoing, rendered from a data array (JSON) for easy future additions. Layout: full-width (100%) cards, stacked vertically one after another — not a multi-column grid.                                                                                                                                   |
| **Contact**  | ⏳ Not started. Email, phone, address only — no form, no backend.                                                                                                                                                                                                                                                                                |

**Navigation:** `Home · About · Services · Projects · Contact` (shared header/footer across all pages) — ✅ built as planned, styling updated (see Phase 2).

**Note on Partners:** the plan to place Partners as a Home section (rather than a standalone page) held — but it did **not** end up as its own independent full-width section. It's now paired side-by-side with a renamed/re-scoped "Areas of Engagement" section (see below), sharing one background and a vertical divider. Rationale for pairing: both are relatively short, complementary "who we work with / who we work for" content, and pairing them let the CTA banner take over the closing section instead.

**Note on Featured Projects:** originally planned as a 2–3 card teaser on Home linking to the Projects page. **Cut entirely** on client instruction — no Projects teaser appears on Home. The Projects page itself is unaffected and still planned as originally scoped.

**Content balancing rationale:** unchanged from original plan for the pages not yet built (About/Services split of "Who We Work With"). On Home, the short-hook version of "Who We Serve" was itself replaced (see below), so this balancing logic now applies only to About/Services.

---

## Home — As Built

The approved build differs substantially from the Phase 2.4 wireframe. Actual section order, top to bottom:

```
HEADER (white, centered nav, sticky, shadow)
├ Hero — kicker + H1 (40px, reduced from planned 48px) + subline + CTA button
│  + hero photo + large translucent brand-mark decoration bleeding in from the left
├ Areas of Engagement  +  Partners   (ONE merged section, two columns, thick vertical divider)
│  ├ Left: "Areas of Engagement" (renamed from "Who We Serve"; content fully replaced —
│  │        see "Areas of Engagement" under Appendix A) — 3 right-aligned cards,
│  │        left-to-right transparency gradient, teal accent on the right edge
│  └ Right: "Partners" — real logos (Tofflon, TRUKING, IMA, Syntegon), transparent/
│           borderless tiles, non-clickable (no links live yet)
│  Full-bleed 21:9 cleanroom/piping photo background, symmetric fade
│  (visible at both edges, obscured behind the content in the middle)
├ AID Group Expertise   (renamed from "Service Highlights"; dark navy blueprint-grid
│    bento section, 4 uneven glass cards, hover spotlight + icon rotation, links to Services)
├ Why AID Group   (green gradient section; photo of two engineers + title on the left,
│    2×2 card grid on the right — numbered 01–04, spread-apart hover animation)
├ At a Glance / Our Positioning  +  Closing CTA   (ONE merged section)
│  ├ Two info cards (teal-tinted "At a Glance", blue-tinted "Our Positioning"),
│  │   corner glows, hover-scale-together animation
│  ├ Guide line + bobbing chevron connecting the cards to the CTA below
│  └ CTA text + "Contact Us" button, on a light-to-blue gradient with glow blobs
│      and a blueprint grid fading in from the middle of the cards downward
FOOTER (navy, two-line address, borderless icon-box social links, "Built by
   Radiance" credit linking to radiance.ge)
```

**Featured Projects section:** removed, does not appear anywhere on Home.

**"Who We Serve" (6-label hook):** removed. Replaced by "Areas of Engagement," which uses entirely different, more specific copy (3 audience-segment cards rather than 6 single-word labels). See Appendix A for exact wording.

**Decorative system added (not in the original Phase 2 spec at all):**
- A shared drop-shadow token pair (`--shadow-bar`, `--shadow-bar-strong`) applied under every section, so each section visibly separates from the one below it as you scroll. This is a new, page-wide convention that should be carried into About/Services/Projects/Contact for visual consistency.
- Faint "blueprint" grid-line textures (AID Group Expertise; the CTA band in the closing section).
- Soft radial glow blobs (AID Group Expertise; the closing At a Glance/CTA section).
- Corner watermark icons on the At a Glance, Our Positioning, and Why AID Group cards.
- A full-bleed photographic background (steel piping / cleanroom corridor, cropped to 21:9) behind Areas of Engagement / Partners, with a gradient overlay.
- Small hover animations throughout: card-group scaling, spotlight-follows-cursor on the Expertise cards, spread-apart Why-AID-Group cards, bobbing arrow between the At a Glance cards and the CTA.

---

## Phase 1 — Content Strategy & SEO Foundations

- **1.1 Information architecture** — ✅ Finalized at the time, **superseded for Home** by the section changes above. About/Services/Projects/Contact architecture unchanged and still pending build.
- **1.2 SEO & keyword strategy** — ✅ Drafted (English), unchanged. Georgian keyword localization still deferred to the translation pass.
- **1.3 Copywriting per section** — ✅ Drafted and QA'd for the pages as originally scoped. **Home copy has since diverged**: the "Who We Serve" hook was dropped in favor of new "Areas of Engagement" copy (see Appendix A), and the Service Highlights / Why AID Group sections kept their original text but gained new visual treatment. About/Services/Projects/Contact copy is unchanged from the original QA pass and still awaiting build.
- **1.4 Metadata plan** — ✅ Finalized and **implemented for all 5 pages** — every page currently live (as a stub or as the full Home build) uses the exact `<title>` and meta description from the table below via a shared layout component. OG/Twitter card tags and JSON-LD structured data are **drafted here but not yet added to the code** — see the new "SEO infrastructure" note under Phase 4.

  **Per-page metadata** _(implemented, unchanged from original plan):_

  | Page     | Title Tag                                                    | Meta Description                                                                                                                                           |
  | -------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Home     | AID Group \| Pharmaceutical Engineering & GMP Consulting     | Pharmaceutical consulting & engineering across the Caucasus region — GMP/GDP compliance, facility design, equipment selection, qualification & validation. |
  | About    | About Us \| AID Group Pharmaceutical Engineering             | Owner-led pharmaceutical engineering consultancy bridging GMP compliance and technical execution — from design through qualification and validation.       |
  | Services | Services \| Pharmaceutical Facility Engineering & Validation | GMP consulting, facility & utility engineering, equipment selection, and qualification/validation (DQ/IQ/OQ/PQ) for pharmaceutical manufacturers.          |
  | Projects | Projects \| AID Group Pharmaceutical Engineering             | Completed and ongoing pharmaceutical facility engineering, qualification and validation projects delivered by AID Group.                                   |
  | Contact  | Contact Us \| AID Group Pharmaceutical Engineering           | Get in touch with AID Group for pharmaceutical facility engineering, GMP consulting, and qualification & validation support.                               |

  **Base social description** (company-level fallback, reused as the footer blurb — unchanged, live in the footer today):

  > "AID Group is a pharmaceutical consulting and engineering company providing GMP/GDP consulting, facility and utility engineering support, equipment selection, project coordination, qualification and validation services."

  _(Note: the footer currently uses the first sentence only, not the two-sentence version originally drafted. The second sentence — "We support clients from initial concept... through design, implementation, commissioning and compliant operation." — can be added back if a longer footer blurb is preferred.)_

**Output:** ✅ Phase 1 substantially complete; Home content has evolved since, per above.

### Outstanding inputs — updated status

1. **Domain name** — ✅ **Resolved.** [gxp.ge](https://gxp.ge) is confirmed and owned. This unblocks Phase 4.2 and 4.3 (SSL, canonical URLs, sitemap, OG/hreflang absolute URLs) — see Phase 4.
2. **Vector logo file (SVG/AI)** — ⏳ **Still pending.** The client instead supplied **raster PNG logo files** (a full lockup with tagline, and an icon-only mark) plus a complete favicon PNG set (16/32/48/180/512px), all of which are live in production today. The full lockup file (`logo-full.png`) has a small rendering glitch in the tagline text ("ENGINEERING") that should be fixed at the source before that file is used anywhere client-facing beyond the current header/footer icon mark. A true vector file would still be preferable for crisp rendering at all sizes and is worth requesting again.
3. **Real contact details** — ✅ Provided and live:
   - Address (now shown on the site as two lines): 166 Otar Chiladze Str. / Tbilisi 0160, Georgia.
   - Phone: +995 571 13 03 35
   - Email: aidgcec@gmail.com
4. **Facebook URL** — ✅ Provided and live: `https://www.facebook.com/profile.php?id=61593867286368`

---

## Phase 2 — Visual Design System

- **2.1 Color palette** — ✅ Finalized, **extended during build.** All original tokens kept as specified. Two additional tokens were introduced to solve real contrast problems that came up once actual dark/photo backgrounds were built:

  | Role                        | Hex       | Usage                                                                                          |
  | --------------------------- | --------- | ----------------------------------------------------------------------------------------------- |
  | *(all original roles unchanged — see below)* |
  | **New: Navy (deep)**         | `#071f33` | Text on top of the light teal-green accent (e.g. button hover state) — `#0c385d` alone measured only ~4.1:1 there, below AA; `#071f33` gives ~5.7:1. |
  | **New: Teal (tint)**         | `#9bd5c2` | Accent text/icons placed directly on dark navy surfaces, where the standard light teal-green measured under 4.5:1 — this lighter tint gives ~8:1 on navy. |

  Original palette (all still in use, unchanged):

  | Role                                | Hex       | Usage                                                                                                                                       |
  | ----------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
  | Primary (Navy)                      | `#0c385d` | Footer, headings, primary text on light backgrounds                                                                                        |
  | Secondary (Blue)                    | `#11669f` | Links, nav hover states, one half of the At a Glance/Positioning gradient background                                                        |
  | Primary Accent (Dark Teal-Green)    | `#1f6362` | CTA buttons (default state), active states                                                                                                  |
  | Secondary Accent (Light Teal-Green) | `#4fa68d` | Icon backgrounds, hover glows, **and** — superseding the original "never as text background" rule — now also the CTA button's **hover** fill, paired with the new deep-navy text token above to stay AA-compliant |
  | Background (base)                   | `#eeefed` | Page background                                                                                                                             |
  | Background (contrast)               | `#FFFFFF` | Cards, content panels                                                                                                                       |
  | Text — Heading                      | `#0c385d` | All headings                                                                                                                                |
  | Text — Body                         | `#37414a` | Paragraph text                                                                                                                              |
  | Border/Divider                      | `#DBDDD9` | Card borders, table lines — **superseded on Partner tiles**, which had their border and background removed entirely per client request, sitting borderless directly on the section's photo/gradient background |

  **Button hover — superseded:** original spec was primary CTA hover → navy `#0c385d`. **Built and approved instead:** hover → light teal-green `#4fa68d` with the new deep-navy text `#071f33` for contrast. This applies to every `.btn-primary` site-wide, including the header/hero CTA and the closing CTA.

  **Shadow system — new, not in the original spec:** two shadow tokens, `--shadow-bar` (soft, navy-tinted, used on light backgrounds — header, hero, Areas of Engagement/Partners) and `--shadow-bar-strong` (higher-contrast, plain black, used on colored/dark backgrounds — At a Glance/Positioning, Expertise, Why AID Group). Every Home section casts one of these under itself, creating a consistent "each section separates from the next" rhythm down the page. This should be applied to About/Services/Projects/Contact as they're built, for consistency.

- **2.2 Typography** — ✅ Finalized, **one deviation on sourcing, one on scale.**

  **Font sourcing — superseded:** the original plan called for loading all fonts from `fonts.googleapis.com`. **Built instead:** Space Grotesk and IBM Plex Sans are **self-hosted** via `@fontsource` npm packages (no Google Fonts network request at all). This was a deliberate performance/privacy improvement made during the stack decision (see Phase 3.1) — it removes an external DNS lookup and works identically otherwise, including `font-display: swap` behavior. Georgian (Noto Sans Georgian) is not yet loaded, since `/ka/` has no content yet; the same self-hosting approach should be used for it when that work starts.

  **H1 size — superseded:** reduced from 48px to **40px** on desktop (mobile unchanged at 32px), applied as a global token change (not a Home-only override), so this now applies to every page's H1 once built.

  Everything else (font choices, H2/H3/body/small sizes, weight pairing) unchanged from the original spec:

  **English:**
  - Heading: **Space Grotesk**
  - Body: **IBM Plex Sans**

  **Georgian:** Noto Sans Georgian (700 headings / 400 body) — planned, not yet implemented.

  **Type scale (desktop → mobile), as built:**

  | Element  | Desktop     | Mobile      |
  | -------- | ----------- | ----------- |
  | H1       | **40px** / 1.15 | 32px / 1.2  |
  | H2       | 34px / 1.2  | 26px / 1.25 |
  | H3       | 22px / 1.3  | 19px / 1.3  |
  | Body     | 17px / 1.6  | 16px / 1.6  |
  | Small/UI | 14px / 1.4  | 14px / 1.4  |

- **2.3 Style & iconography** — ✅ Finalized, mostly as spec'd, with additions.

  **Spacing:** 8px base grid, unchanged (`xs` 8 · `sm` 16 · `md` 24 · `lg` 48 · `xl` 96 · `2xl` 128). Max container width 1200px — unchanged.

  **Corner radius:** Cards/images 8px · Buttons 6px · Badges/tags 4px — unchanged, and now also applied to the Partners logo tiles' corners before the border was removed from them.

  **Elevation — superseded:** the original "flat-leaning, borders over shadows" approach was replaced during Home build by the shadow system described in 2.1 above. Shadows are now a primary, deliberate visual device (every section has one), not a subtle hover-only accent.

  **Iconography:** Lucide Icons, unchanged — now used extensively for card icons, watermark decorations, the mobile menu, and the guide-connector arrow, in addition to the originally-planned nav/service icons.

  **Buttons — superseded**, see the hover color change under 2.1. Secondary button style as originally spec'd, not yet used anywhere on the built Home page.

  **Logo — see Outstanding Inputs #2 above.** Client supplied raster PNG files, not vector. The icon-only mark is in production use in the header (dark version) and footer (a generated light/white version for the navy background).

  **Tagline usage:** unchanged — "For a Healthier Tomorrow" as the hero kicker line, in the dark teal-green accent color.

  **Imagery approach — superseded, no longer placeholder.** The client supplied **five real photographs**, all live in production (converted to responsive WebP at build time):
  1. **Home hero** — meeting room with a wall-mounted screen showing facility drawings (matches the originally-planned prompt closely).
  2. **Why AID Group** — two pharmaceutical engineers in cleanroom garments reviewing a tablet beside a filling machine. _(Not one of the three originally-planned placements — this is a new image used in a section that didn't have a photo in the original wireframe.)_
  3. **Areas of Engagement / Partners background** — a wide (21:9) cleanroom corridor with steel piping and glass-walled rooms, used full-bleed behind that entire merged section. _(Also new — not in the original three-image plan.)_
  4. **About Us** and **Services** placement photos were supplied (team/office image; laboratory image) but **not yet used**, since those pages aren't built.

  The three original AI-generation prompts (Home hero, About, Services) are kept below for reference/reuse, though the actual supplied photos may not be AI-generated:
  1. _"Modern clean office meeting room, large wall-mounted TV monitor displaying facility design drawings and technical blueprints, minimalist interior design, natural light, navy blue and teal-green accent tones, professional editorial photography style, wide shot"_
  2. _"Team of engineering and quality consultants collaborating around a table with blueprints and a laptop in a modern office, natural light, warm professional atmosphere, muted navy and teal accent tones, editorial photography style"_
  3. _"Modern pharmaceutical quality control laboratory, clean white and glass surfaces, laboratory glassware and analytical equipment, soft cool lighting, teal and navy accent tones, minimalist professional photography style, no metallic or industrial machinery elements"_

  **Partner logos — superseded in several ways.** Four real logos are live (Tofflon, TRUKING, IMA, Syntegon — two SVG, two PNG, all full-color, all supplied by the client with transparent backgrounds). Compared to the original spec:
  - **Not currently a "bento grid"** in the sense of a fixed equal-size grid — tiles sit in a wrapping flex layout that reflows naturally as more logos are added.
  - **No card background, no border** — the client removed both after seeing the tiles with a white card background; logos now sit borderless, directly on the section's photo/gradient background.
  - **No hover lift/shadow/border-glow** — removed along with the background/border, since a hover effect on a non-interactive element was judged misleading.
  - **Not clickable.** The data structure supports a `url` per partner for future linking, but none are wired to render as links yet, per client instruction ("skip company links for now").
  - Entries without a supplied logo still render as a dashed-border placeholder tile with a generic icon and the company name — this part of the original design is unchanged and still in use as the "coming soon" state.

- **2.4 Skeleton/wireframe** — ✅ Finalized at the time, **substantially superseded for Home** — see "Home — As Built" above for the actual structure. The Header/Footer wireframe below is accurate to what's live; the About/Services/Projects/Contact wireframes are unchanged and still pending.

  **Shared Header (as built):** Logo (icon mark) · Home · About · Services · Projects · Contact, **centered** (not left-aligned as implied by the original left-to-right list) · language switch "EN | GE" · nav text is uppercase with letter-spacing, active/hover state is bold + underlined in blue · white background (not navy, corrected for contrast — see 2.1) · sticky, with a permanent soft shadow that deepens slightly on scroll. Mobile: logo + hamburger → slide-down menu, same styling carried through. Language toggle still intentionally non-functional (no `/ka/` content yet).

  **Shared Footer (as built):** Logo (white variant) + tagline + blurb · Quick Links · Contact info (address now two lines) · Follow Us (Facebook + WhatsApp only, as planned — Instagram/YouTube still pending) · bottom bar: `© AID Group [year]` + **"Built by Radiance"** (shortened from "Website built by Radiance," now hyperlinked to `radiance.ge`) + language switch. Social icons are borderless rounded-square boxes (not circles), using the same hover colors as the primary button (light teal-green fill, deep-navy icon), with no lift/animation. Mobile: columns stack vertically, as planned.

  **Home:** see "Home — As Built" above — no longer matches the original ASCII wireframe in this section; that block is superseded in full.

  **About Us / Services / Projects / Contact:** unchanged from the original plan, not yet built. Repeated here for continuity:
  - **About Us:** Page intro → Company Overview → Why Created → Key Advantages (2-col icon list) → Founders & Team (+ image) → Standards & Regulatory Frameworks (2-col checklist)
  - **Services:** Page intro → Service Clusters (7 grouped cards w/ sub-items — desktop: static, all visible · mobile: accordion) → End-to-End Process (10-step stepper, vertical on mobile) → Facility Types (icon/tag grid) → Who We Serve (detailed, service-tied cards)
  - **Projects:** Page intro → Toggle/Tabs [Completed | Ongoing] → data-driven, full-width stacked cards, one per row (name, status badge, description, photo)
  - **Contact:** Page intro → Contact details block (icon-labeled) → live Google Maps embed

  **Mobile (all pages):** sections stack single-column — confirmed working as built on Home; same approach to be carried through the remaining pages.

**Output:** ✅ Phase 2 complete for Home, in an evolved form; unchanged/pending for the other four pages.

### Additional outstanding inputs

4. **Social media URLs** — ✅ Facebook live. Instagram, YouTube: ⏳ still not available.
5. **WhatsApp number** — ✅ Provided and live: `wa.me/995571130335`

---

## Phase 3 — Technical & Architecture Decisions

- **3.1 Stack — superseded.** Original decision was plain static HTML/CSS/JS with no framework and no build tooling. **Built instead with [Astro](https://astro.build)**, a static-site framework, for these reasons (agreed with the client at the start of the build): a component-based structure avoids copy-pasting the header/footer across every page and across `/en/` and `/ka/`; Partners/Projects JSON data renders to real static HTML at build time (fully indexable, no client-side rendering); built-in image optimization (automatic WebP conversion, responsive `srcset`) with no extra tooling; and it still deploys as plain static files to Netlify/Vercel exactly as originally planned — the hosting story in Phase 4 is unaffected. The page ships effectively zero JavaScript by default; the handful of small interactive touches (mobile menu, scroll shadow, card hover effects) are small vanilla-JS snippets, not a client-side framework runtime.

  i18n routing is configured (`/en/` as the default locale, `/ka/` registered for later), matching the original bilingual URL-structure requirement.

- **3.2 Contact mechanism** — ✅ Unchanged: plain contact information only, no form.
- **3.3 Analytics** — ✅ Unchanged: not required.
- **3.4 Data-driven content** — ✅ **Partners implemented** as a JSON file (`src/data/partners.json`); adding a partner is a one-entry addition, exactly as planned. Real data (four partners) has already replaced the original placeholder entry. **Projects JSON not yet created** — pending the Projects page build.
- **3.5 Accessibility target** — ✅ Baseline WCAG AA maintained throughout the Home build; every new color combination introduced during build (button hover, teal-tint-on-navy, etc.) was checked and adjusted where it failed, per the new tokens described in Phase 2.1.

---

## Phase 4 — Hosting & Publishing

- **4.1 Hosting** — ✅ Unchanged: GitHub → Netlify or Vercel.
- **4.2 Domain/SSL** — ✅ **Unblocked.** Domain is confirmed: **gxp.ge**. Connecting it to Netlify/Vercel and provisioning SSL is a same-day, automatic step on either platform — not yet actioned, but no longer blocked on any missing input. Recommended as the next infrastructure step whenever the client is ready to go live, even before every page is finished (a "coming soon" or partial site can go live on the real domain early if useful).
- **4.3 SEO infrastructure** — ✅ **Unblocked**, ⏳ **not yet implemented in code.** Now that the domain is known, the following can be finalized:
  - `sitemap.xml` — the `@astrojs/sitemap` integration is already installed as a project dependency but not yet wired into `astro.config.mjs` (it's waiting on the `site: 'https://gxp.ge'` config value, intentionally deferred until the domain was confirmed — now unblocked).
  - `robots.txt` — not yet created.
  - Canonical URLs, OG tags, and hreflang alternates — not yet added to the shared layout; straightforward now that `https://gxp.ge` is the confirmed base URL.
  - `Organization`/`ProfessionalService` JSON-LD structured data — drafted in intent (Phase 1.4) but not yet added to the code.

  None of this is difficult at this point — it was correctly sequenced to wait for the domain, and the domain is now the only thing that was missing.

---

## Phase 5 — Build

**In progress.** The Home page has been built and iteratively refined (well beyond the original single-pass wireframe — see "Home — As Built"). About, Services, Projects, and Contact exist only as routed stub pages with correct metadata and a placeholder heading; none has real content or layout yet.

---

## Phase 6 — QA Pass

Not yet started as a formal pass. Informally, each Home section was visually checked (desktop + mobile) as it was built, including a no-horizontal-overflow check at each step. Still outstanding once all pages are built:
- Cross-device / responsive check, all pages
- Navigation and internal linking check (currently only Home has real content to link to/from)
- SEO technical check: heading hierarchy, alt text, meta tags per page, structured data
- Accessibility check (WCAG AA) — ongoing throughout Home build, needs a final full-page pass
- Performance/load check
- Content proofing, broken-link check

---

## Phase 7 — Deploy & Post-Launch

- **Push repository to GitHub — ✅ Done.**
- **Connect and deploy via Vercel — ✅ Done.** Site is live at `aid-group-astro.vercel.app`, auto-detected as an Astro static build (no adapter needed), redeploying automatically on every push to `main`.
- **Root redirect fix — ✅ Done (not in the original plan).** Because `prefixDefaultLocale: true` leaves no page at `/`, `src/pages/index.astro` uses `Astro.redirect('/en/')`. On a static build this can only render as a client-side meta-refresh fallback page, which briefly flashed visible "Redirecting from `/` to `/en/`" text. Fixed with a `vercel.json` edge redirect (`/` → `/en/`), so the redirect now happens instantly at Vercel's edge before any HTML loads — this applies to every domain on the project, including the custom domain once connected.
- **Connect custom domain — ✅ Done.** `gxp.ge` is live on Vercel (nameservers switched at domenebi.ge to `ns1.vercel-dns.com` / `ns2.vercel-dns.com`), SSL auto-provisioned, and the `/` → `/en/` redirect confirmed working on the live domain.
- Submit sitemap to Google Search Console, verify indexing — pending Phase 4.3 sitemap implementation
- Confirm handoff plan for future content updates — Partners already proven out as a low-friction JSON edit; the same pattern will apply to Projects once built

---

## Appendix A — Final English Website Copy

Original copy for About, Services, Projects, and Contact is **unchanged** from the previous version of this document — not reproduced again here in full to avoid duplication; refer to those sections as they stood, since none of that content has been built or altered yet.

**Home page copy has changed** in two places, detailed below. Everything else in the original Home copy (Hero, At a Glance, Our Positioning, Service Highlights labels, Why AID Group labels, Partners intro line, Closing CTA) was built exactly as originally drafted and is still current.

### Shared Header — unchanged

Logo · Home · About · Services · Projects · Contact · language switch **"EN | GE"**

### Shared Footer — updated

> AID Group is a pharmaceutical consulting and engineering company providing GMP/GDP consulting, facility and utility engineering support, equipment selection, project coordination, qualification and validation services.

Quick Links (nav repeated) · Contact (Email / Phone / **two-line address**) · Follow Us (Facebook, WhatsApp)
Bottom line: `© AID Group [year]` · **"Built by Radiance"** (now a link to `radiance.ge`, shortened from "Website built by Radiance") · `EN | GE`

Address, as now shown on two lines:
> 166 Otar Chiladze Str.
> Tbilisi 0160, Georgia.

---

### HOME — updated sections only

**"Who We Serve" is removed.** In its place, paired side-by-side with Partners:

**Areas of Engagement** _(new heading and new content, replacing the six-label "Who We Serve" hook)_

- **Turnkey Factory Setup** — For start-ups, foreign investors, and facility developers looking to build or expand compliant manufacturing facilities in Georgia.
- **GMP & Engineering Localization** — For international pharma brands and global engineering firms needing an on-the-ground partner to execute local projects.
- **Line Upgrades & Modernization** — For existing local manufacturers optimizing infrastructure to meet international regulatory standards.

**Partners** _(intro line unchanged; grid content updated)_

> We work alongside manufacturers, equipment vendors and engineering partners across the region.

Live partners, in order: **Tofflon · TRUKING · IMA · Syntegon** (all real logos, full color, no links yet).

**Closing CTA** — unchanged copy, now positioned as a banner underneath the At a Glance / Our Positioning cards (same section) rather than as its own standalone section at the very end:

> Planning a new facility or upgrading an existing one? Let's talk. `[Contact Us]`

---

**Georgian version:** unchanged status — not yet drafted, deferred until English is fully built.

---

## Working Method

Each numbered sub-step is completed and presented for approval before moving to the next. On the Home page specifically, this happened at a finer grain than originally scoped — most sections went through several rounds of small, individually-approved visual refinements (spacing, color, decoration, imagery) rather than one approval per section.

**Phase 1–2 substantially complete for Home; Phase 3–4 decisions made and (for domain) now unblocked; Phase 5 (Build) is in progress — Home done, About/Services/Projects/Contact not started; Phase 7 (Deploy) is underway — GitHub push and Vercel deploy done, custom domain connection next.** Next step: connect gxp.ge to the Vercel project, then continue Phase 5 with one of the remaining four pages, or complete the Phase 4.3 SEO infrastructure items now that the domain is confirmed.
