# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring contacts evaluating Artem for two distinct paths: (1) software engineering internship/new-grad roles, and (2) startup/founder-adjacent opportunities (early-stage teams, PM, or entrepreneurial roles). A single visitor may be scanning quickly to decide whether to reach out or move on.

## Product Purpose

A personal portfolio site for Artem Yurovskiy, a senior CS student at Purdue University (minor in Management, certificate in Entrepreneurship and Innovation). The site exists to get him considered and contacted for technical roles and entrepreneurial/founder-track opportunities. Success is a visitor forming a credible impression of his technical and business capability and taking an action (contact, resume download, or follow-through on a project link).

## Positioning

Not a pure-engineering portfolio and not a pure-business one: the combination of CS depth with a management minor and an entrepreneurship certificate is the differentiator. The site should read as "builds things AND understands how to take them somewhere," a combination a single-track CS or single-track business student's portfolio could not truthfully claim.

## Operating Context

Built as a React + Vite single-page site (already scaffolded). No backend, CMS, or auth. Visitors arrive from a resume link, LinkedIn, GitHub profile, or direct share, mostly on desktop but should hold up on mobile.

## Capabilities and Constraints

- Real content now exists for Education and one Experience entry (see Evidence on Hand); resume and additional projects/experience are still placeholders. Do not fabricate specific project names, employers, GPA, testimonials, or metrics for anything not listed as evidence — use clearly generic/placeholder content until Artem supplies more.
- Stack is React + Vite (existing scaffold); no additional framework decision needed.
- The Experience entry is framed as real client work for an active business ("Full-Stack Developer," not "intern" — there was no formal internship structure). It's fine to mention it was built for a family member's startup if it comes up, but the copy itself doesn't need to specify the relationship. Do not mention the missing admin-authentication gap in site copy (a known issue, disclosable only if asked directly in an interview). AI-assisted development is now surfaced directly: the Experience highlights explicitly credit Claude Code for cutting development time (Artem's explicit call, resolving the prior open question) — keep that framing rather than reverting to omitting it.

## Evidence on Hand

- **Education:** B.S. in Computer Science, Minor in Management, Certificate in Entrepreneurship and Innovation, Purdue University, GPA 3.53, Dean's List and Semester Honors, plus a confirmed relevant-coursework list (CS and Business/Entrepreneurship tracks) — shipped in the Education section.
- **Experience:** Full-Stack Developer, [Verbs & Vibes](https://verbsandvibes.vercel.app/) (language & culture club, Manchester, NH), May 2026 – Present — a production full-stack app (public site, e-commerce/subscription payments via Stripe, booking system, internal admin dashboard). Scale facts on hand: ~14,000 LOC, 98 React components, 28 routes, 8 versioned DB migrations. Stack: Next.js 16, React 19, Supabase/PostgreSQL, Stripe, Tailwind CSS, Node.js, Server Actions. Shipped in the Experience section, which links out to the live site.
- No resume or additional project write-ups have been provided yet. Placeholder/sample content stands in elsewhere until real evidence is supplied — flag it as placeholder rather than presenting it as fact.

## Brand Commitments

Standing preference: a conventional, clean portfolio visual language, not a themed or bespoke visual world. When offered a distinctive rolled direction (a "career fair badge" motif) versus the category-standard portfolio hero, Artem chose the conventional path with no named reference sites — just executed at high craft (typography, spacing, polish). Future surfaces on this site should default to this same restrained, professional register rather than introducing a distinct thematic identity, unless Artem explicitly asks for one.

## Product Principles

- Dual-signal credibility: every major section should be readable as both "this person can build" and "this person understands product/business," without diluting either.
- Fast credibility scan: a recruiter skimming for 10-15 seconds should walk away knowing who Artem is, what he can do, and how to reach him.
- Evidence over adjectives: prefer showing concrete work (once available) over claiming traits like "hardworking" or "passionate."
- Placeholder honesty: until real projects/resume are added, structure the site so placeholder content is obviously swappable, not fabricated to look real.
