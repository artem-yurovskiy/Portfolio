---
name: Artem Yurovskiy Portfolio
description: A conventional, high-craft personal portfolio — a single dark canvas with a two-accent blue/amber system encoding technical vs. business content.
colors:
  bg: "#0f1419"
  surface: "#1a222c"
  surface-strong: "#212b38"
  text: "#e4e9ef"
  text-muted: "#93a0b3"
  accent: "#3b82f6"
  accent-strong: "#2563eb"
  secondary: "#f59e0b"
  secondary-strong: "#d97706"
  border: "rgba(59, 130, 246, 0.16)"
  border-strong: "rgba(59, 130, 246, 0.36)"
  portrait-border: "rgba(59, 130, 246, 0.35)"
  portrait-glow: "rgba(59, 130, 246, 0.3)"
  selection-bg: "rgba(59, 130, 246, 0.35)"
  selection-fg: "#ffffff"
typography:
  eyebrow:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: "normal"
    letterSpacing: "0.28em"
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 5.4vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.3vw + 0.6rem, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  nav:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: "normal"
    letterSpacing: "normal"
rounded:
  sm: "12px"
  md: "16px"
  lg: "18px"
  xl: "20px"
  full: "9999px"
spacing:
  nav-height: "4.5rem"
  bio-top: "2.25rem"
  section-padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)"
  content-gap: "clamp(2.5rem, 6vw, 5rem)"
components:
  hero-portrait-frame:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    rounded: "50%"
    width: "clamp(280px, 30vw, 460px)"
  card-technical:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "1.75rem"
  card-business:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "1.75rem"
---

# Design System: Artem Yurovskiy Portfolio

## Overview

**Creative North Star: "The Restrained Introduction"**

This is a conventional, category-standard portfolio executed at high craft rather than a themed or bespoke visual world — PRODUCT.md records this as a standing brand commitment (a distinctive "career fair badge" motif was explicitly rejected in favor of this restrained register). That restraint is unchanged by this redesign. What changed is the palette and material system: the site now runs on a single user-pinned dark canvas (`#0F1419`) rather than three stacked navy shades, and carries a deliberate two-accent system — blue for technical content, amber for business content — that gives PRODUCT.md's "dual-signal credibility" principle a literal visual encoding instead of relying on copy alone.

The whole page is one continuous canvas: `body` alone carries the background (a solid fill plus a single non-repeating, fixed radial gradient anchored near the top), and every section element is transparent. This replaced a prior defect where each section had its own background shade and its own independent overlay, producing a visible seam at every section boundary. Cards now float above that canvas on real, tinted, offset+blur shadows rather than the ambient-glow-only treatment the previous system used.

**Key Characteristics:**
- Single solid page background (`#0f1419`) plus exactly one fixed, non-repeating radial gradient — no per-section background colors or overlays
- Two-accent system: blue (`#3b82f6`) marks technical content, amber (`#f59e0b`) marks business/entrepreneurial content, applied consistently across every section
- A single small-caps eyebrow ("Hi, I'm") with a short fading hairline rule introduces the name, at the user's explicit request
- One signature shape: the circular portrait frame with ambient glow and hairline border
- One motion signature: a staggered rise-and-fade entrance, reused per element with increasing delay
- Real, tinted offset+blur card shadows (resting and hover) replace the former glow-only elevation model

## Colors

A single dark neutral ground with one warm text tone and a deliberate two-accent split; every hairline border is blue-tinted rather than neutral gray, so structural lines carry the accent even where no accent color is otherwise present.

### Primary
- **Canvas Blue** (`#3b82f6`, `--color-accent`): the system's primary interactive and semantic color. Used for links, the active nav-link state, focus outlines, icons, and every technical-content marker — Education's Technical Coursework panel, Skills' Languages/Frameworks/Tools/Concepts categories, Experience highlights and section labels, Technical Projects entries, Leadership's accent rule, and Contact's icon chips.

### Secondary
- **Signal Amber** (`#f59e0b`, `--color-secondary`): marks business/entrepreneurial content exclusively — Education's Business & Entrepreneurship coursework panel, Skills' Business & Product card, and Projects' Business Projects entries. Never used for a technical-content element.

### Neutral
- **Deep Canvas** (#0f1419, `--color-bg`): the single page background color, shared by every section — replaces the prior system's three distinct navy shades.
- **Panel Surface** (#1a222c, `--color-surface`): card/panel fill — coursework panels, project/cert/experience cards, contact chips, the nav's mobile dropdown.
- **Panel Surface Strong** (#212b38, `--color-surface-strong`): a stronger surface step used for emphasis states.
- **Ink** (#e4e9ef, `--color-text`): headings and primary text.
- **Muted Ink** (#93a0b3, `--color-text-muted`): body copy — derived, not in the user's pinned swatch, tuned for ~7:1+ contrast on both background and surface.
- **Blue Hairline** (rgba(59, 130, 246, 0.16) resting / 0.36 strong, `--color-border` / `--color-border-strong`): structural borders throughout — derived, blue-tinted rather than neutral gray so dividing lines still carry the accent.
- **Amber Hairline** (rgba(245, 158, 11, 0.18)): the border tint used specifically on business-accented cards (Education's business panel, Projects' Business Projects card), paralleling the blue hairline for technical cards.
- **Portrait Border** (rgba(59, 130, 246, 0.35)) / **Portrait Glow** (rgba(59, 130, 246, 0.3)): the hero portrait frame's hairline and ambient glow, now tinted to the accent blue rather than a neutral slate.
- **Selection Background** (rgba(59, 130, 246, 0.35)) / **Selection Foreground** (#ffffff): the scoped `::selection` colors.

### Named Rules
**The Dual-Accent Rule.** Blue (`--color-accent`) and amber (`--color-secondary`) are not decorative choices; they are a semantic map of the site's dual positioning. Blue marks technical content, amber marks business/entrepreneurial content, and the mapping is applied consistently everywhere both kinds of content appear (coursework, skills, projects). Never mix the two within one content category, and never introduce a third accent hue.

## Typography

**Display Font:** Inter (with system-ui, sans-serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)

**Character:** A single type family carries the whole site — weight and size do the differentiating work, not a font pairing. Bold and tight for the name and section titles, regular and relaxed for body copy, wide-tracked uppercase for labels.

### Hierarchy
- **Display** (700, clamp(2.75rem, 5.4vw, 5rem), line-height 1.05, letter-spacing -0.02em): the hero name, `Artem Yurovskiy` — the first and only large mark on the page, no label above it.
- **Body** (400, clamp(1.15rem, 1.3vw + 0.6rem, 1.5rem), line-height 1.6): the hero bio, capped at 600px max-width for a comfortable measure; muted-ink colored.
- **Label** (500, uppercase, letter-spacing 0.25–0.3em, accent-colored): section-internal category labels (e.g. "Technical Coursework," Experience's uppercase section headers) — always colored per the Dual-Accent Rule, blue for technical, amber for business.

### Hierarchy (eyebrow)
- **Eyebrow** (500, 0.8rem, letter-spacing 0.28em, uppercase, accent-blue color): "Hi, I'm" — introduces the hero name with a short hairline rule fading to transparent at its right; the sole label element in the system, kept deliberately quiet. Its color moved from the old system's muted slate to the new accent blue, but its restrained scale and single-instance use are unchanged.

### Hierarchy (nav)
- **Nav** (400, 0.95rem, normal tracking): the fixed nav's wordmark (600 weight) and link labels — a small, quiet UI-chrome size, used only in the nav bar.

### Named Rules
**The One-Voice Type Rule.** One family (Inter) covers the entire site; weight (700 for the name, 600 for the nav mark, 500 for labels/eyebrow, 400 for body) and size are the only levers used to build hierarchy.

## Layout

Two-column grid (`1.05fr 0.95fr`) vertically centered in the hero, max content width 1360px, centered with generous responsive gap (`clamp(2.5rem, 6vw, 5rem)`). Section padding is `clamp(3rem, 8vw, 6rem)` vertical and `clamp(1.5rem, 6vw, 5rem)` horizontal, all fluid rather than fixed-breakpoint. At ≤900px the hero grid collapses to a single centered column; content reflows above the portrait, which shrinks to `clamp(240px, 58vw, 380px)`.

A fixed nav bar (`--nav-height: 4.5rem`) overlays the top of every section; each anchorable section carries `scroll-margin-top: var(--nav-height)` so anchor-scroll and `scroll-behavior: smooth` land content just below the bar. Card grids (Skills, Education panels, Certifications, Projects) use responsive column spans rather than a fixed grid, and every section is a transparent element sitting on the shared body canvas — no section carries its own background.

### Named Rules
**The Seamless-Canvas Rule.** All page atmosphere (background color and gradient) lives on `body` alone. Individual section elements are transparent and carry no background of their own, so the page reads as one unbroken canvas from hero to footer rather than a stack of differently-shaded panels. This replaced a defect where three per-section navy shades plus repeating per-section overlays produced a visible seam at every section boundary.

## Elevation & Depth

The system now uses real, tinted, offset+blur card shadows, not ambient glow alone. Every card (coursework panels, skill categories, project cards, certification cards, experience cards, contact chips) rests on a subtle neutral shadow and lifts on hover into a larger, accent-tinted shadow — blue-tinted for technical cards, amber-tinted for business cards — reinforcing the Dual-Accent Rule through depth as well as color. The hero portrait frame keeps its glow-based ambient treatment (a signature, not a card), and the nav bar's translucency (`backdrop-filter: blur(14px)` over a semi-transparent fill) remains the system's other atmospheric device.

### Shadow Vocabulary
- **Card resting** (`box-shadow: 0 1px 2px rgba(0,0,0,0.4)`): the default state for every card/panel in the system — a quiet, near-invisible offset shadow that just lifts the card off the canvas.
- **Card hover — technical** (`box-shadow: 0 28px 56px -32px rgba(59,130,246,0.45)`): the hover-state shadow for blue/technical-accented cards (Skills categories, Education's Technical Coursework panel).
- **Card hover — business** (`box-shadow: 0 28px 56px -32px rgba(245,158,11,0.4)`): the hover-state shadow for amber/business-accented cards (Education's Business panel, Projects' Business Projects card).
- **Project/Experience card hover** (`box-shadow: 0 28px 56px -32px rgba(59,130,246,0.45)` to `0 32px 64px -34px rgba(59,130,246,0.4)`): a slightly larger variant for full-width Projects and Experience cards.
- **Modal shadow** (`box-shadow: 0 40px 100px -32px rgba(59,130,246,0.35)`): the large ambient shadow behind project/certification lightbox modals.
- **Portrait ambient glow** (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 40px 90px -28px var(--portrait-glow), 0 16px 40px -18px rgba(59,130,246,0.3)`): the hero portrait frame's signature glow, unchanged in structure from the prior system, retinted to the new accent blue.

### Named Rules
**The Tinted-Lift Rule.** Cards rest nearly flat (`0 1px 2px rgba(0,0,0,0.4)`) and lift on hover into a large, soft, accent-tinted shadow matched to their Dual-Accent category (blue or amber) plus a `-translate-y` nudge. This replaces the prior system's glow-only, no-card-shadow model; cards are now meant to read as objects floating above the canvas, not as flush panels.

## Shapes

Corner radii scale with component size: `12px` for small chips/contact rows, `14–16px` for compact cards (skill categories, certifications, nav mobile), `18px` for full-width cards (projects, experience), `20–22px` for large coursework panels and modals, and `9999px`/circle for pills and the portrait frame. The circular portrait frame (`border-radius: 50%`, aspect-ratio 1) remains the system's one signature silhouette. Borders throughout are 1px hairlines in the blue- or amber-tinted border colors rather than neutral gray, tying shape language back to the Dual-Accent Rule.

## Components

### Hero Portrait Frame (signature component)
- **Shape:** circle (`border-radius: 50%`, aspect-ratio 1), fluid width `clamp(280px, 30vw, 460px)`.
- **Background:** radial gradient from `#26364a` through `#1a222c` to `#0f1419` (fallback fill visible only during image load).
- **Border:** 1px solid Portrait Border (rgba(59,130,246,0.35)).
- **Glow:** blurred radial Portrait Glow halo behind the frame, plus the ambient box-shadow above.
- **Content:** holds Artem's real headshot (`/Headshot.jpg`), `object-fit: cover` filling the frame edge-to-edge, `overflow: hidden` clipping to the circle.

### Eyebrow + Name + Bio Block
- **Style:** left-aligned (center-aligned on mobile) stack. The eyebrow ("Hi, I'm" + fading hairline rule) sits above the name; name directly followed by bio with `2.25rem` top margin.
- **Motion:** eyebrow, name, bio, and portrait all animate in with the shared `hero-rise` keyframe (translateY 18px → 0, opacity 0 → 1) over `0.9-1s cubic-bezier(0.16, 1, 0.3, 1)`, staggered by delay (eyebrow at 0s, name at 0.08s, bio at 0.18s, portrait wrap at 0.28s). Respects `prefers-reduced-motion: reduce` by disabling all four animations.

### Named Rules
**The Staggered-Rise Rule.** Entrance motion is a single reused keyframe (rise + fade, `cubic-bezier(0.16, 1, 0.3, 1)`, ~0.9-1s) applied to each hero element with an increasing delay (0s, 0.08s, 0.18s, 0.28s) — never a distinct motion signature per element, and always disabled under reduced motion.

### Cards (Coursework Panels, Skill Categories, Project Cards, Certification Cards, Experience Cards)
- **Corner Style:** 14–22px radius depending on card size (see Shapes).
- **Background:** Panel Surface (`--color-surface`, #1a222c) in every case.
- **Border:** 1px hairline in blue (`--color-border`) or amber (`rgba(245,158,11,0.18)`) depending on the card's Dual-Accent category.
- **Shadow Strategy:** resting → hover per the Tinted-Lift Rule (see Elevation & Depth).
- **Internal Padding:** 1.75–2.5rem depending on card size.

### Nav Bar (signature component)
- **Structure:** `position: fixed` full-width bar, `--nav-height` (4.5rem) tall, wordmark left, link list right; collapses to a hamburger toggle + dropdown panel at ≤1024px.
- **Surface:** `rgba(15, 20, 25, 0.68)` fill with `backdrop-filter: blur(14px)` and a 1px blue-tinted hairline bottom border (`--color-border`) — translucent chrome over whatever section scrolls beneath it, never an opaque bar.
- **Active state:** the active link is colored `--color-accent` (blue) with a `rgba(59,130,246,0.14)` pill background — the nav's active state always uses the technical accent, never amber, regardless of which section is active.
- **Mobile dropdown:** `display: grid; grid-template-rows: 0fr → 1fr` transition (not `max-height`), link list in an `overflow: hidden` inner wrapper, surface at `rgba(15,20,25,0.96)`.
- **Icon:** the hamburger/close toggle is a CSS-drawn three-bar glyph (no icon library, no unicode/emoji), morphing into an X via `transform: rotate()` on its pseudo-elements.

## Do's and Don'ts

### Do:
- **Do** keep hierarchy to one type family (Inter) differentiated by weight and size, not by introducing a second font.
- **Do** apply the Dual-Accent Rule consistently: blue for technical content, amber for business/entrepreneurial content, never mixed within one category and never a third hue introduced.
- **Do** keep every card on the resting → tinted-hover shadow pattern (`0 1px 2px rgba(0,0,0,0.4)` at rest, large accent-tinted shadow on hover) rather than reintroducing the old glow-only, no-shadow model.
- **Do** keep all page background atmosphere on `body` alone (solid color + one fixed, non-repeating gradient); new sections must stay transparent rather than adding their own background.
- **Do** use the shared `hero-rise` keyframe and cubic-bezier for any new entrance motion on the hero surface, staggering delay rather than inventing a new easing curve.
- **Do** treat the circular frame as the system's one signature shape for imagery rather than introducing other silhouettes.
- **Do** keep the eyebrow to this one quiet instance (label + short fading rule, wide tracking) if it is ever reused — it was added at the user's explicit request, overriding the craft floor's default kicker ban, and should stay this restrained rather than growing into a heavier label system elsewhere.
- **Do** register every new section's anchor in `Nav.jsx`'s `LINKS` array and give that section `scroll-margin-top: var(--nav-height)`.

### Don't:
- **Don't** reintroduce per-section background colors or per-section repeating overlays — this is the specific seam defect the current build fixed.
- **Don't** use a zero-offset, colored-halo box-shadow as a stand-in for a real shadow — the current build replaced that pattern with real offset+blur shadows; don't regress toward it.
- **Don't** apply the amber secondary accent to technical content or the blue accent to business content — the split is semantic, not decorative.
- **Don't** treat the hero's single eyebrow instance as license to add kickers/eyebrows elsewhere in the system; it remains a one-off, explicitly user-approved exception to the craft floor's default kicker ban.
