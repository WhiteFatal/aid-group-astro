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
| **About Us** | ✅ **Built, except Founders & Team (postponed).** Page intro + Company Overview (with team photo) → Why AID Group Was Created → Key Advantages & Differentiation (8-item icon grid) → Standards & Regulatory Frameworks (9-item checklist). Founders & Team copy is ready in Appendix A but not yet on the page — postponed on client instruction, no founder names/titles available yet. See "About — As Built" below.                                                                                          |
| **Services** | ✅ **Built and visually refined (CSS pass complete; final QA pass pending).** Header + intro → **Our End-to-End Process** (moved up, directly under the header; dark navy blueprint band, 10 glass step cards) → **Services and Scope + 7 Service Clusters** (merged into one light-blue section: laboratory photo beside the intro, bento grid of cluster cards below) → Facility Types We Support (one card, 8-item checklist) → **Areas of Engagement** (renamed from "Who We Serve"; 6 audience cards over an aerial campus photo). See "Services — As Built" below. |
| **Projects** | ✅ **Built.** Header + intro → `[All Projects] [Completed] [Ongoing]` filter (JS, no framework; "All Projects" is the default view on load) → full-width stacked cards from `src/data/projects.json`. One real project live: the Kutaisi GMP secondary packaging facility (completed, 2026). See "Projects — As Built" below.                                                                                                                                                              |
| **Contact**  | ✅ **Built and visually refined (CSS pass complete; final QA pass pending).** Header intro → three cards (Email / Phone / Address; Email and Phone cards are fully clickable) on a light-green band → WhatsApp/Facebook buttons → **Find Us**: lazy-loaded Google Maps embed on a light-blue band, with an "Open in Google Maps" button. Buttons use the `.btn-secondary` style, centered. See "Contact — As Built" below. |

**All five pages are now built** (About minus one postponed section). **SEO infrastructure — ✅ fully built and live:** `site` URL and `@astrojs/sitemap` integration configured in `astro.config.mjs` (sitemap excludes the bare `/` redirect); `public/robots.txt` referencing the sitemap; canonical URLs and Open Graph/Twitter meta tags added to `BaseLayout.astro` (default share image: `public/og-image.jpg`); `ProfessionalService` JSON-LD added to `BaseLayout.astro` (see below); sitemap submitted to and accepted by Google Search Console. **Still postponed:** hreflang alternates only — needs `/ka/` pages to exist first, deliberately left until the Georgian translation work begins.

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

  **Shadow system — new, not in the original spec:** two shadow tokens, `--shadow-bar` (soft, navy-tinted, used on light backgrounds — header, hero, Areas of Engagement/Partners) and `--shadow-bar-strong` (higher-contrast, plain black, used on colored/dark backgrounds — At a Glance/Positioning, Expertise, Why AID Group). Every Home section casts one of these under itself, creating a consistent "each section separates from the next" rhythm down the page. This should be applied to About/Services/Projects/Contact as they're built, for consistency. **Update:** About now applies this via a reusable `.section-shadow` / `.section-shadow--strong` class pair in `global.css`; the strong variant is chosen by what the section's shadow falls *onto* (a photo or dark section), see "About — As Built".

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
  4. **About Us** and **Services** placement photos (team/office image; laboratory image) — ✅ now used: the team photo in About's Company Overview, the laboratory photo in Services' Services and Scope section.
  5. **Services — Areas of Engagement background** — an aerial photograph of a modern pharmaceutical campus (AI-generated from a prompt written for the purpose; supplied as a 1400×600 PNG, converted to JPG, `areas-aerial-bg.jpg`), used full-bleed and kept clear behind that section. See "Services — As Built".

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
  - **Services** _(superseded — see "Services — As Built")_**:** Page intro → Service Clusters (7 grouped cards w/ sub-items — desktop: static, all visible · mobile: accordion) → End-to-End Process (10-step stepper, vertical on mobile) → Facility Types (icon/tag grid) → Who We Serve (detailed, service-tied cards)
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

## Contact — As Built

```
HEADER (shared)
├ Contact head — kicker "CONTACT" + H1 "Contact Us" + intro line. Same gradient as About's/Services' head, with the full
│  logo lockup (logo-watermark.png) as a faint 20% watermark on the right edge
├ Contact cards + social buttons — ONE light-GREEN band (glow blobs, fine white mesh)
│  ├ Three cards: Email (mailto:) · Phone (tel:) · Address (two-line, static)
│  └ WhatsApp + Facebook buttons, centered, .btn-secondary style
└ Find Us — light-BLUE band (glow blobs, dotted corner)
   ├ Google Maps iframe, injected via IntersectionObserver on scroll (nothing loads from Google until the visitor
   │  scrolls near it) — UNCHANGED by the refinement pass
   └ "Open in Google Maps" button, centered, links out to Maps directly
FOOTER (shared)
```

**Copy note — resolved:** the page intro reads *"Planning a facility, a GMP upgrade, or a qualification and validation project? Get in touch and we will get back to you."* It was written during build, before the Appendix A copy was supplied, but the client reviewed it and confirmed it is acceptable. The Appendix A line ("Let's discuss your project.") is historical only. The refinement pass did not touch the copy.

**Design decisions:**

- Buttons use `.btn-secondary` (navy outline, blue fill on hover), not `.btn-primary` (the solid teal used on Home's CTAs) — confirmed with the client after an initial pass used primary buttons. The refinement pass keeps this and only adds a soft white fill (60%) at rest so the outline buttons read as buttons on the coloured bands; hover is unchanged.

**Visual refinement pass (CSS, done one step at a time with client approval after each):**

- **Header:** matches About and Services — white-to-`--bg` gradient, logo watermark, 72px padding (48px on mobile), soft shadow.
- **Contact cards band (light green, `#e9f5ee` → `#d7ebdf`):** teal glow top-left, blue glow bottom-right, fine white mesh (7px cells, 50% white lines, fading at the top and bottom edges). It was first built in light blue, then changed to green on request so it alternates with the blue map band below.
  - **Cards:** translucent white (55%, hover 90%) with a thin blue border; a faded blue dotted decoration fading from the top-right corner (11.5px dot grid); a faded 76px icon watermark bottom-right matching the 48px teal icon chip; on hover (hover-capable devices only) a 2px lift, a teal edge bar growing on the left, a tilting icon chip and a stronger watermark. Grid: 3 columns, 18px gap, 1 column at 899px and below.
  - **Whole cards clickable:** the Email and Phone cards use a stretched link, so the entire card opens `mailto:` / `tel:`, with a card-sized keyboard focus ring. The Address card has no link and stays static.
  - **Buttons:** 48px of space above (was 24px), centered, wrapping on narrow screens.
- **Find Us band (light blue, `#e9f2f8` → `#d8e7f2`):** teal glow top-right, blue glow bottom-left, a faded blue dotted corner at the top-left; the heading has the standard hover underline; the map frame has an offset teal backing shape (35% opacity, offset 14px) like the site's photos, with a 14px right margin on phones so the shape stays inside the viewport; the "Open in Google Maps" button has 48px above it and the same soft white fill as the social buttons.
- **The map itself was deliberately not changed** — client confirmed it works and needs no changes. Its size, teal bottom border, lazy-load script and `data-map-src` attribute are exactly as before.
- **Not built, by choice:** an address card overlapping a corner of the map (with the Maps button inside it). It was in the proposed plan, then dropped when the client said the map should stay as it was. It can be added later if wanted.
- **Shadow rule applied** (strong when the *next* section is dark or a photo, otherwise soft), stacking set by `--section-z`:

  | Section | Stacking order | Next section | Shadow |
  | --- | --- | --- | --- |
  | Header | 6 | Contact cards (light) | soft |
  | Contact cards | 5 | Find Us (light) | soft |
  | Find Us | 4 | Footer (dark) | strong |

- **Touch and motion:** hover effects run only under `@media (hover: hover)`; with `prefers-reduced-motion` the card movement and transitions are switched off.
- **Files changed for this pass:** `src/pages/en/contact.astro` only (all markup and styles are in this file). No new assets (the logo watermark is reused) and no new dependencies.
- **Tested:** built successfully after every step; screenshots checked at 1440 and 390px with no horizontal overflow; shadows and stacking order confirmed in the browser. The Google Maps embed cannot be previewed in the build sandbox (Google is blocked there), so the live map is confirmed by the client on the deployed site. **Not yet done:** the formal final pass (320 / 390 / 768 / 1024 / 1440px, keyboard and reduced-motion checks).

**Original build (superseded by the above):** Contact was first built as a plain page — flat white header, three plain white cards with a teal bottom border, a bare grey map rectangle, all on one flat grey background.

---

## About — As Built

```
HEADER (shared)
├ About head — kicker "ABOUT" + H1 "About Us" + page intro. Same gradient as the Home hero, with the full logo lockup
│  (logo-watermark.png, trimmed from the client's Photoroom PNG) as a faint 20% watermark on the right edge
├ Company Overview — light-blue gradient band + teal/blue glow blobs. Two paragraphs on faint translucent cards
│  (teal edge bar grows on hover); team/office photo with an offset teal backing shape and slow hover zoom
├ Why AID Group Was Created — full-bleed cleanroom photo (about-why-bg.jpg, 1400x600, kept fully clear). One white-fog card (75%),
│  top teal line draws in on hover; first paragraph as a pull-quote with a teal bar, three key phrases bold teal with highlighter
├ Key Advantages and Differentiation — light-green gradient band, glow blobs + dotted decoration. 8 white cards, each with a faded
│  01-08 numeral behind the text, the card's own icon as a faint corner watermark, icon tilt + card lift on hover
├ [Founders and Team Experience — NOT BUILT, postponed on client instruction; copy ready below]
└ Standards and Regulatory Frameworks — documents photo (about-standards-bg.jpg, cropped to 1536x800, kept fully clear).
   ONE card (1000px, right-aligned, Company Overview gradient at 85%): heading + intro + 9-item list with empty square
   checkboxes (tick redraws on hover) + divider + bold italic closing note. A green edge sweeps down the card's right side on hover.
FOOTER (shared)
```

**Design decisions (visual refinement pass):**
- **Photo rule:** on About, background photos are kept fully clear. Readability comes from a fog on the *card only*, never a veil over the photo. Mobile uses the same cards.
- **Shared pieces:** every About section uses `.section-shadow` (global.css) and every heading uses `.h-underline` (underline draws in on hover; sizes in tokens `--underline-color/-height/-speed`). Both are reusable on other pages.
- **Shadow rule applied:** the darker `.section-shadow--strong` is used when the *next* section is dark or a photo. On About: Overview (next = photo), Advantages (next = photo), Standards (next = dark footer) use strong; header and Why use the soft `--shadow-bar`. Section stacking is set with `--section-z` (header 6, Overview 5, Why 4, Advantages 3, Standards 2) so each shadow falls on the section below.
- **Touch and motion:** hover effects only run under `@media (hover: hover)`; with `prefers-reduced-motion` all movement and keyframe animation is switched off (global.css handles transitions/animations, the page adds explicit transform resets).
- **Alt text:** the Standards photo has descriptive alt text on request; the Why photo and the header watermark are decorative (empty alt).
- **Tested** at 320, 390, 768, 1024 and 1440 px: no horizontal overflow.

---

## Services — As Built

```
HEADER (shared)
├ Services head — kicker "SERVICES" + H1 "Services" + page intro. Same gradient as About's head, with the full logo
│  lockup (logo-watermark.png) as a faint 20% watermark on the right edge
├ Our End-to-End Process — MOVED UP to sit directly under the header. Dark navy blueprint band (same recipe as Home's
│  Expertise section). All 10 steps visible, no scrolling: two rows of five on desktop (>=1100px), vertical timeline below
├ Services and Scope  +  7 Service Clusters   (ONE merged section — light-blue band, white mesh, glow blobs)
│  ├ Top block: heading + intro card + first cluster card (GMP/GDP) on the left; laboratory photo on the right,
│  │            stretched to the full height of the left column, so the cards appear to wrap around it
│  └ Below: 6 more cluster cards as a 12-column bento grid of different widths, equal height within each row
├ Facility Types We Support — light-green band; ONE card: heading + intro + 8-item checklist + divider + closing note
└ Areas of Engagement — aerial campus photo background, kept clear; heading right-aligned on a frosted plate;
   6 audience cards (frosted glass, each with a faded icon watermark)
FOOTER (shared)
```

**Design decisions (visual refinement pass, done one section at a time with client approval after each):**

- **Header:** matches About's header (gradient + logo watermark, 72px padding, 48px on mobile).
- **Process (moved to the top):**
  - Dark navy base, teal glow top-left, blue glow bottom-right, faint 48px blueprint grid fading toward the edges; white heading and soft-white intro.
  - Each step is a glass card (6% white, 14% border; hover 11%) with a faded large numeral behind the text, a glowing teal-ringed number, and a mint connector line threaded behind the cards from circle to circle.
  - Hover (hover-capable devices only): card lifts 3px, brightens, a teal edge bar grows on the left, the numeral takes a mint tint, the circle scales up and its glow intensifies. Step text is 15px.
  - Layout: 5 columns (16px gap) from 1100px up; below 1100px a single-column vertical timeline (max 640px wide) with a continuous line from step 1 to 10. The old sideways scroll track, scrollbar, edge fade and "Scroll to see all 10 steps" hint were removed — they hid half the steps even on desktop.
  - 1100px (not 1000px) is the breakpoint because the longest step name ("Construction/installation coordination") no longer fits cleanly in five columns below that.
- **Services and Scope + Service Clusters (merged):**
  - Light-blue gradient band, teal/blue glow blobs, and a **fine white mesh** (7px cells, 1px lines at 50% white, fading out at the top and bottom edges). Two earlier decoration attempts were tried and dropped: a diagonal dashed-line field (rejected as unattractive) and a coarser 24px mesh (made finer on request).
  - The intro sentence sits on a translucent card; the photo has an offset teal backing shape, a soft shadow and a slow hover zoom.
  - Bento spans (12 columns): Facility & Engineering Design 5 / Utilities & Critical Systems 7; Equipment & Procurement 4 / Implementation & Commissioning 3 / Qualification & Validation 5; Facility Modernization as a full-width banner (one item). Gap between cards 18px.
  - Cards: translucent white 55% (hover 90%), thin blue border, a faded blue dotted decoration fading from the top-right corner (11.5px dot grid), a teal edge bar and a 2px lift on hover. Fonts in this section are one step smaller than the global scale (heading −4px, card titles −3px, text −1px, all relative to the tokens).
  - Responsive: at 899px and below the photo moves above the heading and the cards become two columns; at 767px and below they become one column.
  - **This section is finished and approved — do not change its card styling again.**
- **Facility Types We Support:** light-green gradient band with glow blobs; one translucent card (72% white) with the same blue dot decoration; a teal edge sweeps down the card's right side on hover; the 8-item checklist uses empty square checkboxes whose tick redraws on hover (same pattern as About's Standards); divider with a short teal lead-in and a bold italic closing note.
- **Areas of Engagement:**
  - Full-bleed aerial photo (`areas-aerial-bg.jpg`) kept **clear — no veil over the photo** (same rule as About), with a mild contrast/saturation boost (12%) to cut the image's own haze. Decorative: empty alt text, lazy-loaded.
  - Because the photo is clear, readability comes from the **elements on top of it**: each list card is frosted glass (75% white, 2px blur, soft light text halo; hover 90%; on phones 82%), and the heading sits on its own frosted plate (55% white; 68% on phones).
  - The heading is **right-aligned**, its right edge matching the card grid's right edge.
  - Six cards (2 columns desktop, 1 column at 899px and below), each with a faded Lucide line icon in the bottom-right corner that strengthens and tilts on hover: factory, rocket, globe, handshake, landmark, wrench. Teal edge bar and 2px lift on hover.
  - The photo is only 1400px wide, so it is enlarged about 1.4× on 1920px-wide screens and looks slightly soft there. If sharper results on large monitors are wanted, supply a ~2800px upscaled version under the same filename.
- **Shadow rule applied** (strong when the *next* section is dark or a photo, otherwise soft), with stacking set by `--section-z`:

  | Section | Stacking order | Next section | Shadow |
  | --- | --- | --- | --- |
  | Header | 6 | Process (dark) | strong |
  | Process | 5 | Services and Scope (light) | soft |
  | Services and Scope + Clusters | 4 | Facility Types (light) | soft |
  | Facility Types | 3 | Areas of Engagement (photo) | strong |
  | Areas of Engagement | 2 | Footer (dark) | strong |

  This was audited twice: moving Process to the top, and later adding the photo to Areas, each changed which shadow was correct for a neighbouring section.
- **Touch and motion:** hover effects run only under `@media (hover: hover)`; with `prefers-reduced-motion` the movement and transitions are switched off.
- **Files changed for this pass:** `src/pages/en/services.astro` (all markup and styles are in this one file) and one new asset, `src/assets/images/areas-aerial-bg.jpg`. Lucide icons (`factory`, `rocket`, `globe`, `handshake`, `landmark`, `wrench`) come from the existing `lucide-static` package, no new dependencies.
- **Tested:** built successfully after every step; screenshots checked at 1440, 1100, 820 and 390px with no horizontal overflow. **Not yet done:** the formal final pass (320 / 390 / 768 / 1024 / 1440px, keyboard and reduced-motion checks) — see "Working Method".

**Original build (superseded by the above):** Services was first built as a plain page — flat white/grey sections, a horizontally scrolling 10-step track with a scroll hint, and Services and Scope and the Service Clusters as two separate sections.

---

## Projects — As Built

```
HEADER (shared)
├ Projects head — kicker "PROJECTS" + H1 "Projects" + page intro
├ Filter — [All Projects] [Completed] [Ongoing] buttons, plain JS (no framework)
│  "All Projects" is the default active view on page load, showing every entry regardless of status
├ Project cards — full-width, stacked one per row (not a grid, per plan); each card:
│  image (left) + status badge, title, location, scope-item checklist, and Year as the last
│  item, set off with a thin divider line
└ Empty state — "No [status] projects to show right now — check back soon." when a filter
   matches zero cards
FOOTER (shared)
```

**Data structure:** project content lives in `src/data/projects.json` (plain JSON — status, title, location, scope array, year, an image *key*, and alt text), matching the pattern already used for `partners.json`. The image itself lives in `src/assets/images/project/`, one level deeper than other page images, and is imported directly in `projects.astro` with a small lookup table mapping each JSON `image` key to the actual imported file. This split — plain JSON for data, real imports for images — exists so project data can be added by editing only the JSON file, while images still get Astro's automatic build-time optimization (resize + WebP conversion), which a plain string path into `public/` would not get. To add a new project: drop the photo in `src/assets/images/project/`, add one `import` line and one map entry in `projects.astro`, then reference that key from `projects.json`.

**Real project live:** Pharmaceutical Secondary Packaging GMP Facility with Laboratory and Warehouse — Kutaisi, Georgia — Completed, 2026. Scope: zoning, floor movement plan, movement flows, interlock system, lighting and supply/exhaust, cleaning plan, room and ceiling configuration. Image is the facility's zoning/layout drawing; the title block's "Project Owner" field was blanked out by the client before upload, staff names (preparer/checker/approver) remain visible per client's confirmation.

---

## JSON-LD, Domain Fix and Search Console — As Built

**`ProfessionalService` JSON-LD** — added to `BaseLayout.astro`, so it renders identically on all five pages (`<script type="application/ld+json">` in the `<head>`). Fields used:
- `name`: AID Group
- `legalName`: `LLC "Engineering and Consulting Company AID Group"` (client-supplied legal name, formatted as the standard English rendering of a Georgian LLC filing — flagged to client as an assumption, not corrected)
- `taxID`: 405843084 (client-supplied legal ID)
- `address`, `telephone`, `email`: same as the footer (166 Otar Chiladze Str., Tbilisi 0160, Georgia · +995 571 13 03 35 · aidgcec@gmail.com)
- `sameAs`: the Facebook page
- `url`/`logo`/`image`: point to `gxp.ge/en/` and the existing `og-image.jpg`

Validated with Google's Rich Results Test — passes with "2 valid items" (Organization + Local business; `ProfessionalService` is a subtype of both, so this is expected, not a duplication issue). One non-critical note from Google on optional fields (e.g. hours, price range) not being set — left as-is, not required for validity.

**Domain/www conflict found and fixed.** Discovered while testing the JSON-LD: `gxp.ge` was redirecting to `www.gxp.ge` (the reverse of what the sitemap, canonical tags and JSON-LD all assumed). Fixed in Vercel's domain settings — `gxp.ge` is now the Production domain, and `www.gxp.ge` 301-redirects to it. Confirmed via Rich Results Test re-run that `gxp.ge` now resolves directly with no `www` hop.

**Search Console setup:**
- Property type: **Domain** (covers `gxp.ge`, `www.gxp.ge`, and both http/https under one property — appropriate since Vercel manages DNS for the domain).
- Verified via DNS TXT record (`google-site-verification=...`), added directly in Vercel's DNS Records panel for `gxp.ge`.
- Ownership was initially added under the wrong Google account; corrected by adding the intended account as an Owner in Search Console's Users & Permissions, rather than re-verifying from scratch.
- **Sitemap submitted successfully** using the full absolute URL (`https://gxp.ge/sitemap-index.xml`) — the relative path (`sitemap-index.xml`) that Search Console's own placeholder suggests returned an "Invalid sitemap address" error on this Domain-property setup; switching to the full URL resolved it immediately. Worth remembering if a sitemap ever needs re-submitting.

---

## Appendix A — Final English Website Copy

Single source of truth for all page content, restored in full below (previously trimmed to avoid duplication once About/Services/Projects/Contact were expected to be built soon; since those pages are still pending, the full copy is kept here again so nothing has to be re-requested from the client).

**Home page copy has changed** in the ways documented under "Home — As Built" and the updated-sections note further below — the Home copy in this appendix is the **original, pre-build draft** and is kept for history only. Do not use the Home copy below as a build reference; use "Home — As Built" instead. **Contact page copy below is implemented** — the one difference (the page intro) was reviewed and confirmed by the client; see "Contact — As Built" above.

### Shared Header

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

**Our End-to-End Process** _(all 10 steps)_

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

**Who We Serve** _(detailed, all 6 items)_

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

> **Build status vs. this copy:** implemented. The page intro differs from the line above, and the client confirmed the built version — see "Contact — As Built" above.

---

**Georgian version:** unchanged status — not yet drafted, deferred until English is fully built.

---

## Working Method

Each numbered sub-step is completed and presented for approval before moving to the next. On the Home page specifically, this happened at a finer grain than originally scoped — most sections went through several rounds of small, individually-approved visual refinements (spacing, color, decoration, imagery) rather than one approval per section.

**Phase 5 (Build) is essentially complete: all five pages are live — Home, About (minus Founders & Team), Services, Projects and Contact. Phase 4.3 SEO infrastructure (sitemap, robots.txt, canonical/OG/Twitter tags) is done and now covers real content on every page. Phase 7 (Deploy) is live — gxp.ge connected on Vercel, `/` → `/en/` redirect confirmed working.**

**Everything on the client's list is now closed out, except two items intentionally left for last:**
1. ~~Founders and Team Experience~~ — **postponed indefinitely** on client instruction (not "to be scheduled later" — a deliberate, open-ended hold). Copy remains ready in Appendix A if this is ever revisited.
2. ~~`ProfessionalService` JSON-LD~~ — ✅ done. See "JSON-LD, Domain Fix and Search Console — As Built" above.
3. ~~Contact page intro discrepancy~~ — **resolved, no change needed.** Client reviewed and confirmed the as-built intro is acceptable; the Appendix A line ("Let's discuss your project.") is no longer the target. Appendix A's Contact copy is now historical/reference only for this one line.
4. ~~Submit the sitemap to Google Search Console~~ — ✅ done. Along the way, also found and fixed a `www.gxp.ge` vs `gxp.ge` domain redirect conflict, verified domain ownership via DNS TXT record, and corrected the property to the right Google account. See "JSON-LD, Domain Fix and Search Console — As Built" above for the full detail, including a note on the exact sitemap URL format that worked.

**Remaining, by client's explicit choice — saved for last:**
5. **hreflang alternates** — blocked on `/ka/` pages not existing; will be done as part of the Georgian rollout, not before.
6. **Georgian (`/ka/`) translation** — not started. This is now the only major remaining body of work. English is fully built and live, all SEO infrastructure is in place and submitted, so this is a clean point to begin translation whenever the client is ready.

**Services page status (for reference):** Header ✅ · Our End-to-End Process (moved to the top) ✅ · Services and Scope + 7 Service Clusters (merged) ✅ · Facility Types We Support ✅ · Areas of Engagement (aerial photo background) ✅. **Visual refinement pass (CSS) on Services: ✅ all sections done, approved section by section.** **Still pending:** the formal final pass on Services — all five breakpoints (320 / 390 / 768 / 1024 / 1440px), keyboard and reduced-motion checks.

**Contact page status (for reference):** Header ✅ · Contact cards + social buttons (light-green band) ✅ · Find Us (light-blue band; map untouched) ✅. **Visual refinement pass (CSS) on Contact: ✅ all sections done, approved step by step.** **Still pending:** the formal final pass on Contact — all five breakpoints (320 / 390 / 768 / 1024 / 1440px), keyboard and reduced-motion checks. Projects is the only page not yet through the visual refinement pass.

**About page section status (for reference):** Page intro + Company Overview ✅ · Why AID Group Was Created ✅ · Key Advantages & Differentiation ✅ · Founders and Team Experience ⏸ postponed indefinitely · Standards & Regulatory Frameworks ✅. **Visual refinement pass (CSS) on About: ✅ complete** (all sections, final polish and mobile check done); Home was refined earlier.
