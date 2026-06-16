---
title: "Accessible Dark UI: Getting Contrast Right Without Killing Your Design"
date: "2026-06-16"
description: "How to maintain WCAG-compliant colour contrast in a dark design system — without flattening your visual hierarchy or making everything look the same."
tags: ["Accessibility", "UI Design", "CSS", "Tailwind CSS"]
---

## The Problem with Dark Design and Accessibility

Dark UI design has a reputation for being hard to get right accessibility-wise. Too often the conversation goes one of two ways: either designers ignore contrast requirements entirely ("it looks cool"), or developers overcorrect and make everything the same washed-out grey.

Neither is right. WCAG AA compliance and a considered dark aesthetic are not in conflict — you just need to understand the rules clearly.

## What WCAG AA Actually Requires

The contrast requirement is 4.5:1 for normal text (under 18pt or 14pt bold) and 3:1 for large text. That's it. The algorithm compares the relative luminance of foreground and background.

The dark background of this portfolio (`#080A0F`) has a luminance of about 0.003 — close to absolute black. That means even mid-range greys can achieve strong contrast ratios against it:

- `#9BA7B7` (body text) → approximately **8.2:1** ✅
- `#7B8CA0` (muted labels) → approximately **5.75:1** ✅  
- `#64748B` (slate-500) → approximately **4.2:1** ❌ — just under the threshold

The gap between 4.2:1 and 5.75:1 looks subtle in a hex value but is the difference between failing and passing — and visually, the two colours are close enough that the hierarchy still reads.

## Building a Contrast-Compliant Hierarchy

A good dark design system needs at least four legible text levels. Here's the token set used in this portfolio:

```css
--text-primary:   #F4F7FB;  /* ~175:1 — headings, key content */
--text-secondary: #D8E0EA;  /* ~60:1  — supporting headings, labels */
--text-body:      #9BA7B7;  /* ~8.2:1 — body copy, descriptions */
--text-muted:     #7B8CA0;  /* ~5.75:1 — dates, tags, eyebrow labels */
```

Each level passes WCAG AA with room to spare. And because the ratios are all well above the minimum, the visual differentiation between levels is real — your eye can tell the difference without having to count pixels.

## The Hierarchy Trap

The mistake most dark UI designers make is conflating "accessible" with "high contrast everywhere." That produces a flat, undifferentiated UI where everything shouts.

The solution is to maintain strong relative contrast _between text levels_ even when absolute luminance is low. You don't need your muted labels to be bright — you need them to be consistently dimmer than your body text, with both remaining above the WCAG floor.

In Tailwind terms:

```tsx
{/* Primary — for headings */}
<h2 className="text-[#F4F7FB]">Selected Work</h2>

{/* Body — for descriptions */}
<p className="text-[#9BA7B7]">...</p>

{/* Muted — for dates, labels, metadata */}
<span className="text-[#7B8CA0] text-xs uppercase tracking-widest">
  16 June 2026
</span>
```

## Decorative Elements Don't Need to Pass

WCAG 1.4.3 specifically exempts text that is "purely decorative" or "part of a logo or brand name." Icon-only UI chrome, dividers, and background gradients are not subject to the 4.5:1 rule.

This gives you freedom in your design:

```tsx
{/* Glow — decorative, no accessibility requirements */}
<div aria-hidden className="absolute blur-[80px] bg-sky-500/10 ..." />

{/* Separator dot — decorative */}
<span aria-hidden className="text-sky-400/40">·</span>
```

The `aria-hidden` attribute tells screen readers to skip these elements entirely — both the accessibility tooling and the visual contrast checker will ignore them.

## Focus Styles on Dark Backgrounds

Focus indicators are often worse on dark UIs than light ones because the default browser outline (`2px solid` in most browsers) can disappear against dark backgrounds.

The solution is a `focus-visible` ring in a colour that contrasts with both light and dark surfaces. Sky blue works well:

```css
*:focus-visible {
  outline: 2px solid #38BDF8;
  outline-offset: 3px;
}
```

`focus-visible` (not `focus`) only shows for keyboard navigation, keeping the UI clean for mouse users.

## Testing Your Contrast

Three tools worth having in your workflow:

1. **Chrome DevTools** — the colour picker in the Elements panel shows contrast ratios live as you hover
2. **axe DevTools** (browser extension) — automated accessibility scan, flags contrast failures alongside structural issues
3. **WebAIM Contrast Checker** — paste two hex values and get the ratio instantly

The most important habit is checking in your actual rendering context, not against a white background. A colour that passes on white may fail against your specific dark panel background.

## Practical Takeaways

- Treat your text colour scale as a design token system — define it once, use it everywhere
- Never go below 4.5:1 for small text, even if it looks fine to your eyes — different monitors and conditions affect perception
- Raise problem colours by the minimum needed, not to the maximum — over-brightening breaks your hierarchy as much as under-brightening
- Use `aria-hidden` freely on decorative elements — it's not cheating, it's correct semantics
- Test with keyboard navigation, not just a mouse — focus visibility is often the last thing checked and the first to break

Getting this right isn't about accessibility versus aesthetics. It's about building a visual system with enough rigour that it works for everyone, including people on cheaper screens, in bright light, or with visual processing differences.
