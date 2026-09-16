---
name: Artem Yurovskiy Portfolio
description: A conventional, high-craft personal portfolio hero — dark navy ground, one warm name, no bespoke motif.
colors:
  navy-deep: "#080d16"
  navy-mid: "#0d1420"
  navy-panel: "#151b26"
  name-warm-white: "#f5f6f8"
  body-slate: "#a6aebb"
  portrait-border: "rgba(148, 163, 184, 0.4)"
  portrait-glow: "rgba(74, 104, 168, 0.32)"
  portrait-icon: "rgba(198, 208, 224, 0.32)"
  selection-bg: "rgba(122, 162, 255, 0.35)"
  selection-fg: "#fff"
typography:
  eyebrow:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 300
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
spacing:
  nav-height: "4.5rem"
  bio-top: "2.25rem"
  section-padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)"
  content-gap: "clamp(2.5rem, 6vw, 5rem)"
components:
  hero-portrait-frame:
    backgroundColor: "{colors.navy-panel}"
    textColor: "{colors.body-slate}"
    rounded: "50%"
    width: "clamp(280px, 30vw, 460px)"
---

# Design System: Artem Yurovskiy Portfolio

## Overview

**Creative North Star: "The Restrained Introduction"**

This is a conventional, category-standard portfolio hero executed at high craft rather than a themed or bespoke visual world — PRODUCT.md records this as a standing brand commitment (a distinctive "career fair badge" motif was explicitly rejected in favor of this restrained register). The system's entire personality is carried by one unhurried gesture: the name is the first mark on the page, with no label, kicker, or eyebrow above it, set against a near-black navy-charcoal ground. There is one accent-free organic frame reserved for the portrait; everything else is text, spacing, and a single hairline-scale rhythm.

The palette is a single dark neutral family with no accent color, no gradient text, and no icon system beyond the one placeholder glyph inside the portrait frame. Depth comes from layered radial glows and gradient washes, not from cards or shadows-as-decoration.

**Key Characteristics:**
- Single dark navy ground built from three stacked gradient stops, no secondary/tertiary palette
- One warm off-white for the name, one muted slate for body copy — no accent color anywhere
- A single small-caps eyebrow ("Hi, I'm") with a short fading hairline rule introduces the name, at the user's explicit request
- One signature shape: the circular portrait frame with ambient glow and hairline border
- One motion signature: a staggered rise-and-fade entrance, reused per element with increasing delay

## Colors

A single dark neutral family stacked into a radial + linear wash, with one warm text color and one muted body color; there is no accent hue in the system.

### Primary
This system has no accent/primary color; the "primary" role is carried by contrast (warm white name against navy ground), not hue.

### Neutral
- **Navy Deep** (#080d16): darkest stop of the background linear gradient, anchors the bottom-left of the hero wash.
- **Navy Mid** (#0d1420): middle stop of the background linear gradient.
- **Navy Panel** (#151b26): radial highlight stop and the base tone inside the portrait frame's gradient.
- **Warm White** (#f5f6f8): the name's color — the single warmest, lightest value in the system, reserved for the name only.
- **Slate Body** (#a6aebb): body paragraph text color; deliberately lower contrast than the name to keep the name the entry point.
- **Portrait Border** (rgba(148, 163, 184, 0.4)): thin hairline border around the portrait frame, muted blue-gray at 40% opacity.
- **Portrait Glow** (rgba(74, 104, 168, 0.32)): the ambient glow behind and around the portrait frame, reused in both the blurred backdrop glow and the frame's own box-shadow.
- **Portrait Icon** (rgba(198, 208, 224, 0.32)): the stroke color of the placeholder silhouette glyph inside the portrait frame.
- **Selection Background** (rgba(122, 162, 255, 0.35)) / **Selection Foreground** (#fff): the hero's scoped `::selection` colors, so highlighted text stays on-palette instead of falling back to the browser default.

### Named Rules
**The No-Accent Rule.** There is no accent color in this system. Contrast and hierarchy come from lightness steps within one navy-neutral family plus one warm-white text color, never from an introduced hue.

## Typography

**Display Font:** Inter (with system-ui, sans-serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)

**Character:** A single type family carries the whole hero — weight and size do the differentiating work, not a font pairing. Bold and tight for the name, regular and relaxed for the bio.

### Hierarchy
- **Display** (700, clamp(2.75rem, 5.4vw, 5rem), line-height 1.05, letter-spacing -0.02em): the name, `Artem Yurovskiy` — the first and only large mark on the page, no label above it.
- **Body** (400, clamp(1.15rem, 1.3vw + 0.6rem, 1.5rem), line-height 1.6): the one-paragraph bio, capped at 600px max-width for a comfortable measure.

### Hierarchy (eyebrow)
- **Eyebrow** (300, 0.8rem, letter-spacing 0.28em, uppercase, body-slate color): "Hi, I'm" — introduces the name with a short hairline rule fading to transparent at its right; the sole label element in the system, kept deliberately quiet.

### Hierarchy (nav)
- **Nav** (400, 0.95rem, normal tracking): the fixed nav's wordmark (600 weight) and link labels — a small, quiet UI-chrome size below the bio, used only in the nav bar.

### Named Rules
**The One-Voice Type Rule.** One family (Inter) covers the entire site; weight (700, 600 for the nav mark, 400, and a light 300 for the eyebrow) and size are the only levers used to build hierarchy.

## Layout

Two-column grid (`1.05fr 0.95fr`) vertically centered, max content width 1360px, centered with generous responsive gap (`clamp(2.5rem, 6vw, 5rem)`). Section padding is `clamp(3rem, 8vw, 6rem)` vertical and `clamp(1.5rem, 6vw, 5rem)` horizontal, all fluid rather than fixed-breakpoint. Left column: name then bio, left-aligned, flex column. Right column: the portrait, vertically centered but pulled up slightly (`margin-top: -3.5rem`) so it sits above the text block's true center, matching the direction contract's "slightly above center" instruction.

At ≤900px the grid collapses to a single centered column: content reflows to `order: 1`, portrait to `order: 2` below it, text becomes center-aligned, and the portrait shrinks to `clamp(240px, 58vw, 380px)`.

A fixed nav bar (`--nav-height: 4.5rem`) overlays the top of every section; each anchorable section carries `scroll-margin-top: var(--nav-height)` so anchor-scroll and `scroll-behavior: smooth` land content just below the bar rather than under it.

## Elevation & Depth

No card shadows or tonal surface layering. Depth is entirely atmospheric: a radial gradient wash on the hero background, a separate blurred radial glow layer (`.hero__glow`), and a soft blurred halo behind the portrait frame (`filter: blur(40px)` on a pseudo-element). The one literal `box-shadow` in the system is on the portrait frame itself, and it's used for glow, not for a hard drop shadow. The nav bar's translucency (`backdrop-filter: blur(14px)` over a semi-transparent navy fill) is the system's other atmospheric device, standing in for a surface without using a flat opaque fill.

### Shadow Vocabulary
- **Portrait ambient glow** (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 50px 110px -30px var(--portrait-glow), 0 0 90px -20px var(--portrait-glow)`): the only shadow in the system; wraps the portrait frame in a soft blue-toned glow, no hard offset.

### Named Rules
**The Ambient-Only Rule.** Shadows in this system are diffuse and glow-based (blurred, large-spread, low-opacity blue), never hard-offset or used to fake a card edge.

## Shapes

One signature silhouette: the circular portrait frame, a plain circle (`border-radius: 50%`, aspect-ratio 1) rather than a rounded rectangle. It carries a 1px hairline border in the muted portrait-border color. No other element in the hero uses a border, radius, or clipping; the rest of the layout is unbordered text on the gradient ground.

## Components

### Hero Portrait Frame (signature component)
- **Shape:** circle (`border-radius: 50%`, aspect-ratio 1), fluid width `clamp(280px, 30vw, 460px)`.
- **Background:** radial gradient from Navy Panel-adjacent (#24314a) through #141c29 to #0b111a.
- **Border:** 1px solid Portrait Border color.
- **Glow:** blurred radial Portrait Glow halo behind the frame, plus the ambient box-shadow above.
- **Content:** holds Artem's real headshot (`/Headshot.jpg`, `hero__portrait-img`), `object-fit: cover` filling the frame at 100% width/height with `overflow: hidden` clipping it to the circle — no scale transform on the image, so cover fills the circle edge-to-edge with no corner gaps. The frame's radial-gradient background remains as the fallback fill visible only during image load. The earlier outlined head-and-shoulders SVG placeholder has been fully replaced — do not reintroduce it or a similar icon-based placeholder elsewhere in the system.

### Eyebrow + Name + Bio Block
- **Style:** left-aligned (center-aligned on mobile) stack. The eyebrow ("Hi, I'm" + fading hairline rule) sits `1.5rem` above the name; name directly followed by bio with `2.25rem` top margin.
- **Motion:** eyebrow, name, bio, and portrait all animate in with the shared `hero-rise` keyframe (translateY 18px → 0, opacity 0 → 1) over `0.9-1s cubic-bezier(0.16, 1, 0.3, 1)`, staggered by delay (eyebrow at 0s, name at 0.08s, bio at 0.18s, portrait wrap at 0.28s). Respects `prefers-reduced-motion: reduce` by disabling all four animations.

### Named Rules
**The Staggered-Rise Rule.** Entrance motion is a single reused keyframe (rise + fade, `cubic-bezier(0.16, 1, 0.3, 1)`, ~0.9-1s) applied to each hero element with an increasing delay (0s, 0.08s, 0.18s, 0.28s) — never a distinct motion signature per element, and always disabled under reduced motion.

### Nav Bar (signature component)
- **Structure:** `position: fixed` full-width bar, `--nav-height` (4.5rem) tall, wordmark left (links to `#top`), link list right; collapses to a hamburger toggle + dropdown panel at ≤720px.
- **Surface:** `rgba(8, 13, 22, 0.6)` fill with `backdrop-filter: blur(14px)` and a 1px hairline bottom border (`rgba(148, 163, 184, 0.14)`) — translucent chrome over whatever section scrolls beneath it, never an opaque bar.
- **Links:** new anchors are added to the `LINKS` array in `Nav.jsx` as sections ship; each target section must declare `scroll-margin-top: var(--nav-height)` (or the Tailwind equivalent `scroll-mt-[var(--nav-height)]`) so the smooth-scroll landing isn't hidden under the bar.
- **Mobile dropdown:** uses `display: grid; grid-template-rows: 0fr → 1fr` (not `max-height`) so the open/close transition never animates a layout-triggering property; the link list sits in an `overflow: hidden` inner wrapper.
- **Icon:** the hamburger/close toggle is a CSS-drawn three-bar glyph (no icon library, no unicode/emoji), morphing into an X via `transform: rotate()` on its pseudo-elements.

## Do's and Don'ts

### Do:
- **Do** keep hierarchy to one type family (Inter) differentiated by weight and size, not by introducing a second font.
- **Do** reserve the warm-white name color exclusively for the name/primary heading; body copy and the eyebrow stay at the muted slate value.
- **Do** use the shared `hero-rise` keyframe and cubic-bezier for any new entrance motion on this surface, staggering delay rather than inventing a new easing curve.
- **Do** treat the circular frame as the system's one signature shape for imagery rather than introducing rounded rectangles or other silhouettes.
- **Do** keep the eyebrow to this one quiet instance (label + short fading rule, light weight, wide tracking) if it is ever reused on another surface — it was added at the user's explicit request, overriding the craft floor's default kicker ban, and should stay this restrained rather than growing into a heavier label system.
- **Do** register every new section's anchor in `Nav.jsx`'s `LINKS` array and give that section `scroll-margin-top: var(--nav-height)` — an anchorable section with neither is a broken nav link waiting to happen.

### Don't:
- **Don't** introduce an accent color. The system's whole contrast model is built on lightness steps within one navy-neutral family plus one warm-white; adding a hue would break the No-Accent Rule.
- **Don't** use hard-offset drop shadows or card-style elevation. Depth in this system is glow-based and diffuse only.
- **Don't** treat the current portrait placeholder glyph as a permanent icon-system pattern — it is a labeled, TODO-marked stand-in for a real photograph, not a reusable iconography choice.
