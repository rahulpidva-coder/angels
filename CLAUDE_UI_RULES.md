# Angels Preschool — AI Design System

This document is the authoritative design reference for every AI-generated section, component, or page in this project. Read it in full before writing any JSX. It supersedes generic UI intuition.

---

## 1. Brand Identity & Aesthetic

**Brand archetype:** Warm Expert. Angels is not playful-chaotic (no cartoon aesthetics). It is soft, steady, and emotionally intelligent — the way a trusted elder speaks to a parent.

**Reference brands:** Eurokids Premium, Kangaroo Kids, The Shishuvan School. The aesthetic sits between a premium Montessori school brochure and a calm SaaS landing page.

**Three words that must describe every section:** Warm. Trustworthy. Calm.

**Three words that must never describe any section:** Flashy. Cluttered. Corporate.

**What this is not:**
- Not a daycare with balloon typography
- Not a corporate school with cold blues and grids
- Not a startup with aggressive CTAs and urgency language
- Not a portfolio site with heavy scroll animations

---

## 2. Color Psychology & Usage

### Primary Palette

| Role | Color | Tailwind | Hex |
|------|-------|----------|-----|
| Growth, nature, action | Lime | `lime-500` / `lime-600` | `#84cc16` / `#65a30d` |
| Trust, calm, visit | Sky | `sky-500` / `sky-600` | — |
| Warmth, celebration | Yellow | `yellow-300` | `#fde047` |
| Neutral body text | Gray | `gray-600` / `gray-700` | — |
| Headings | Gray | `gray-800` / `gray-900` | — |
| Error / validation | Rose | `rose-500` | — |

### Lime — The Brand Anchor
Lime is the only color with emotional authority on this site. It signals:
- Growth and new beginnings
- Primary action (Admission Enquiry)
- Section underlines
- Highlighted words in body copy

Use `lime-700` for text on white. Use `lime-500` for backgrounds and underlines. Use `lime-600` for darker actions (form submit buttons inside modals). Never use lime on dark backgrounds.

### Sky — The Visit Color
Sky is reserved exclusively for "Book a Visit" CTAs and related UI. Using sky elsewhere dilutes this signal. Do not use sky for decorative purposes.

### Accent Colors for Cards Only
Card icon backgrounds use pastel variants — `yellow-100`, `pink-100`, `sky-100`, `green-100`, `blue-100`, `orange-100`, `purple-100`, `rose-100`. These are accent pops, never dominant. Maximum one accent color per card.

### What Not to Do with Color
- Never use lime and sky together on the same button row without the lime button being primary
- Never use red except for form validation errors
- Never use pure black (`#000`) for text — always a gray scale
- Never use a saturated gradient as a card background (use `from-lime-50 to-white` not `from-lime-400 to-cyan-400`)
- Background blobs use `mix-blend-multiply` and `opacity-20/30` to stay subtle

### Section Background Rhythm
Sections alternate between white and soft tinted backgrounds to create visual breathing room:

```
white → lime-50 / amber-50 / slate-50 → white → gradient-to-br from-lime-50 to-cyan-50 → white
```

Never stack two identical tinted backgrounds. Never use a dark section except for the Annual Day gallery feature (which is intentionally cinematic).

---

## 3. Typography

### Font Stack
- **Headings:** `font-heading` → Quicksand (loaded via Google Fonts)
- **Body:** `font-body` → Nunito (loaded via Google Fonts, inherited by default)

### Heading Scale

| Context | Classes | Notes |
|---------|---------|-------|
| Page hero h1 | `text-4xl md:text-5xl font-heading font-bold text-gray-800` | Inner pages |
| Page hero h1 (Home) | `text-5xl lg:text-6xl font-heading font-bold text-gray-800` | Home only — larger |
| Section h2 (SectionHeader sm) | `text-3xl font-heading font-bold text-gray-800` | Non-responsive, Home/About/Programs |
| Section h2 (SectionHeader md) | `text-3xl md:text-4xl font-heading font-bold text-gray-800` | Default, most pages |
| Section h2 (SectionHeader lg) | `text-4xl md:text-5xl font-heading font-bold text-gray-800` | Page hero headers |
| Card h3 | `text-xl font-bold text-gray-800` or `text-lg font-bold text-gray-800` | No underline |
| Modal h3 | `text-lg font-heading font-bold text-gray-800` | — |
| Gradient / CTA heading | `text-3xl md:text-4xl font-heading font-bold text-gray-800` | No underline |

### Body Text Scale

| Context | Classes |
|---------|---------|
| Hero paragraph | `text-base text-gray-600 leading-relaxed` |
| Standard body | `text-gray-600 leading-relaxed` |
| Secondary / supporting | `text-sm text-gray-600 leading-relaxed` |
| Captions, hints, tags | `text-xs text-gray-500` |
| Label (form) | `text-sm font-semibold text-gray-700` |
| Subtle meta | `text-[11px] font-semibold` |

### Typography Rules

1. **Quicksand is for identity, Nunito is for readability.** Use `font-heading` only on h1–h3. Never on body paragraphs, captions, or labels.
2. **Never use font-black or font-extrabold.** `font-bold` is the maximum weight used in headings.
3. **Lime highlights in body copy:** Wrap key emotional words in `<span className="text-lime-700 font-semibold">`. Use sparingly — maximum 3 per paragraph.
4. **Leading:** Always `leading-relaxed` (1.625) for paragraphs. `leading-tight` or `leading-snug` for card headlines only.
5. **Never center-align body paragraphs** wider than `max-w-2xl`. Centered long text is hard to read.
6. **Do not set line-height or font-size via inline styles.** Use Tailwind utilities only.

---

## 4. Spacing Philosophy

### Page Structure
Every page uses `<div className="pb-20 space-y-20">` as its root. This creates consistent 80px (5rem) vertical rhythm between all major sections.

### Section Internal Spacing
- Section padding: `py-16` (inner-page sections) or `py-20` (hero sections)
- Content max-width containers: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Narrower content (forms, cards, text): `max-w-4xl` or `max-w-3xl`

### Component Spacing
- Between heading and content: `mb-12` (after SectionHeader with className)
- Between cards in a grid: `gap-6` or `gap-8`
- Between stacked paragraphs: `space-y-4` or `space-y-6`
- Card internal padding: `p-7` (md, default), `p-8` (lg), `p-5` (sm)

### What Never to Do
- Never use `mt-4` for section underlines (the underline uses `mt-3` — changing it breaks the visual lock between heading and bar)
- Never use `w-20` for underlines (always `w-16`)
- Never use `space-y-2` between major text blocks — minimum `space-y-4`
- Never add padding to the `<body>` or root `<div>` — layout is handled per-section

---

## 5. Section Composition Rules

### Standard Section Anatomy
Every section follows this sequence:
1. **Section label / badge** (optional) — small pill or tag above the heading
2. **SectionHeader** — h2 + lime underline + optional subtitle
3. **Content** — cards, text, images, timeline
4. **CTA or forward link** (required at the bottom of the last section on each page)

### The Section Underline
This is non-negotiable. Every `SectionHeader` component renders it automatically:
```
w-16 h-1 bg-lime-500 mt-3 rounded-full
```
**Never change these classes.** Never add a lime underline to:
- Card h3 elements
- CTA block headings (gradient backgrounds)
- Modal headings
- Any heading that is not a standalone page-section h2

### Content Width Hierarchy
```
Full bleed (bg sections)
  └── max-w-7xl (grid content)
       └── max-w-4xl (focused content, forms, timelines)
            └── max-w-2xl (subtitle text, narrow prose)
                 └── max-w-xl (hero body text on split layouts)
```

### Section Background Sequencing
- `bg-white` — default, no class needed
- `bg-lime-100` — page hero banners (h1 sections)
- `bg-lime-50` / `bg-amber-50` / `bg-slate-50` — alternate section tints
- `bg-gradient-to-br from-lime-50 to-cyan-50` — CTA blocks and feature sections
- Dark sections (black/gray-900) — Annual Day only, intentionally cinematic

### Grid Patterns
- 4-column highlights: `grid md:grid-cols-2 lg:grid-cols-4 gap-8`
- 2-column split (text + image): `grid md:grid-cols-2 gap-12 items-center`
- 3-column cards: `grid md:grid-cols-3 gap-6`
- 2-column form layout: `grid md:grid-cols-2 gap-4`

---

## 6. Card Styles

### Use the Card Component
```tsx
import { Card } from '../components/ui';
```

### Card Variants in Practice

| Usage | Props | Notes |
|-------|-------|-------|
| Standard info card | `<Card>` | Default: p-7, shadow-lg, rounded-3xl |
| Compact icon card | `<Card padding="sm">` | p-5 |
| Image card | `<Card padding="none" className="overflow-hidden">` | Image fills top |
| Form container | `<Card padding="none" className="p-8 md:p-10 shadow-xl">` | Shadow elevated |
| Hoverable static | `<Card hover>` | CSS translate + shadow on hover |
| Framer Motion card | `<Card hover={false} className="hover:shadow-xl">` | Let Framer handle lift |

### Card Rules
1. **Cards are always `bg-white`** — never tinted or dark
2. **Border:** `border border-gray-100` (built into component) — never change this to a colored border unless using program cards (which use `border-b-4 border-{color}-400`)
3. **Rounded:** Always `rounded-3xl` (1.5rem) — the component applies this. Never override with `rounded-xl` on a Card (use a raw div instead)
4. **Shadow:** Default `shadow-lg`. Elevated states use `shadow-xl`. Flat (for modals etc) use `flat` prop
5. **Do not stack two Cards inside each other**
6. **Vision/Mission cards** use custom colored shadows (`shadow-[0_10px_25px_rgba(...)]`) and colored borders — these are one-off and should not be templated

### Card Content Hierarchy
```
Icon (w-16 h-16 or similar, colored bg, rounded-2xl)
Heading (text-xl font-bold text-gray-800 — no underline)
Supporting label (text-sm text-lime-700 or text-gray-500)
Body text (text-sm text-gray-600 leading-relaxed)
Optional CTA link (text-xs font-semibold text-lime-600)
```

---

## 7. Button Usage Rules

### Import
```tsx
import { Button } from '../components/ui';
```

### CTA Color System — Non-Negotiable
| Action | Variant | When to use |
|--------|---------|-------------|
| Admission Enquiry | `primary` (lime-500) | Any enquiry / admission action |
| Book a Visit | `sky-outline` | Paired with primary as secondary CTA |
| Book a Visit (solo) | `sky` | Fee section, standalone visit CTAs |
| Outline enquiry | `secondary` | Rare — enquiry when lime fill would overpower |
| Form submit (modal) | Raw `<button>` with `bg-lime-600` or `bg-sky-600` | Intentionally darker inside modals |

### Button Sizes
- `size="sm"` — Navbar, inline FAQ, tight spaces (text-sm, px-4 py-2)
- `size="md"` — Default, most page CTAs (px-6 py-3)
- `size="lg"` — Hero page CTAs, paired with primary (px-8 py-4)

### Paired CTA Pattern (Hero / Section CTAs)
```tsx
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button onClick={openEnquiryModal}>
    <MessageCircle className="h-5 w-5" />
    Admission Enquiry
  </Button>
  <Button variant="sky-outline" size="lg" onClick={openVisitModal}>
    <Calendar className="h-5 w-5" />
    Book a Visit
  </Button>
</div>
```
This is the canonical pattern. Do not invent new pairings.

### Button Rules
- **Always include an icon** on primary and secondary CTAs. Icons are `size={18}` to `size={20}` from lucide-react
- **Never use lime and sky filled buttons side-by-side** — one must be outline
- **"Book a Visit" always opens the VisitModal** — never links to `/contact`
- **Never add WhatsApp buttons** to any page except if explicitly added by the human developer
- **Modal submit buttons are raw `<button>` elements** — not the Button component — because they need tighter padding (`py-3`, `rounded-xl`, `text-sm font-semibold`) that conflicts with Button's `rounded-full`
- **fullWidth** prop only for form submit buttons, never for page CTAs
- **active:scale-95** is built into the Button component — do not add it via className

---

## 8. Animation Philosophy

### Guiding Principle
Animations serve emotional tone, not technical showcase. Every animation should make the parent feel the site is **alive but calm** — not performant, not impressive.

### Approved Animation Patterns

**Framer Motion — scroll reveal (standard):**
```tsx
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

<motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
```

**Framer Motion — card lift on hover:**
```tsx
<motion.div whileHover={{ y: -5 }}>
  <Card hover={false} className="hover:shadow-xl">
```
Do not use Card's `hover` prop when wrapping with `motion.div whileHover` — CSS and Framer Motion transforms conflict.

**CSS keyframe animations (for passive, looping effects):**
- Gallery hero: `heroFade` crossfade with `kenBurns` subtle zoom
- Phone icon: `tring` shake animation on hover (Contact page)
- Gallery scroll cue: `motion.div animate={{ y: [0, 9, 0] }}`

These are defined inline with `<style>` tags inside the component — acceptable for these specific cases.

### Animation Rules
1. **No animations on first paint** — hero text, hero images, and above-the-fold content must render without animation delay. Speed and perceived performance are trust signals for parents
2. **`viewport={{ once: true }}`** — all scroll-triggered animations fire once. Repeating on scroll-up feels cheap
3. **Duration maximum 0.5s** for reveal animations. 0.22s for modal enter/exit
4. **No bounce or spring** on content animations. Use ease or ease-out only
5. **Hover animations: translate maximum `y: -5`** (5px lift). More than this feels toy-like
6. **Do not animate color** — color transitions are handled by Tailwind `transition` + `hover:` classes, not Framer
7. **AnimatePresence** is used only for modals (mount/unmount transitions). Do not use it for conditional content within pages
8. **Stagger children animations** only for icon grids or card grids where the effect is subtle (`staggerChildren: 0.07`)
9. **Image scale on hover:** `group-hover:scale-110 transition-transform duration-500` — standard for program card images and hero images

---

## 9. Mobile Responsiveness Rules

### Mobile-First Mindset
Most parents browse on their phone at pickup/dropoff time. Every layout must be designed for mobile first, then enhanced for desktop.

### Breakpoint Behavior

| Element | Mobile | Tablet (md) | Desktop (lg) |
|---------|--------|-------------|--------------|
| Hero grid | Stacked, text first | 2-col | 2-col |
| 4-card grid | 1-col | 2-col | 4-col |
| 3-card grid | 1-col | 3-col | 3-col |
| Button group | `flex-col` | `flex-row` | `flex-row` |
| Section padding | `px-4` | `px-6` | `px-8` |
| Page header h1 | `text-4xl` | `text-5xl` | — |
| SectionHeader sm | `text-3xl` | `text-3xl` | `text-3xl` |
| SectionHeader md | `text-3xl` | `text-4xl` | `text-4xl` |

### Tap Target Rules
- All interactive elements minimum `44px` touch target
- Button minimum height: `py-2` (sm) = ~36px+, `py-3` (md) = ~44px+
- Card hover effects are desktop-only CSS behaviors — do not add `active:` states that conflict with mobile tap

### Modal Responsiveness
- Modals use `max-w-lg` (EnquiryModal) and `max-w-md` (VisitModal) with `p-4` wrapper padding
- `max-h-[92vh] overflow-y-auto` on EnquiryModal to prevent overflow on small screens
- Modal body scrolls, header stays fixed

### Image Handling on Mobile
- Hero images: `object-cover` with fixed height containers
- Story images (rotate effect on desktop): `rotate-2 hover:rotate-0 transition-transform duration-500` — acceptable on mobile since touch doesn't trigger hover
- Gallery grid: `grid grid-cols-2 md:grid-cols-3` — 2 columns on mobile is the minimum for gallery aesthetics

---

## 10. Form & Input Rules

### Use the UI Components
```tsx
import { Input, Textarea } from '../components/ui';
```

### Input Component Behavior
- Label: `text-sm font-semibold text-gray-700`
- Required asterisk: `text-rose-500`
- Default focus ring: `focus:border-lime-400 focus:ring-4 focus:ring-lime-100`
- Error state focus ring: `focus:border-rose-400 focus:ring-4 focus:ring-rose-100`
- Error message: `text-xs text-rose-500`
- The VisitModal overrides focus to sky: pass `className="focus:border-sky-400 focus:ring-sky-100"`

### Form Rules
1. **Validation is inline** — errors appear below the relevant field, not in a toast
2. **Required fields use rose asterisk**, not "(required)" text
3. **Optional fields** label with `<span className="font-normal text-gray-400">(optional)</span>`
4. **Submit error** renders in a `rounded-xl bg-rose-50 border border-rose-100 px-3.5 py-2.5 text-xs text-rose-600` block above the submit button
5. **Success state** replaces the form entirely — not a banner above it
6. **No new enquiry forms** — the EnquiryModal and VisitModal are the only two capture points. Contact page has a separate detailed message form (existing). Do not add a fourth form anywhere
7. **Native `<select>`** is used for dropdowns — no custom select component exists. Style it with: `rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 outline-none focus:border-{color}-400 focus:ring-4 focus:ring-{color}-100 transition`
8. **Consent checkbox** in modals: `h-3.5 w-3.5 rounded border-gray-300 text-lime-600 focus:ring-lime-500`

---

## 11. Storytelling Approach

### The Parent's Emotional Journey
Every page must map to an emotional arc. Before writing any content, ask: **"What is the parent feeling when they land here, and what do they need to feel when they leave?"**

| Page | Arrives feeling | Should leave feeling |
|------|----------------|---------------------|
| Home | Curious, evaluating | Safe, excited, ready to enquire |
| About | Skeptical (who are these people?) | Trusting, emotionally connected |
| Programs | Practical (which class fits my child?) | Informed, confident in the fit |
| Activities | Wondering what happens all day | Reassured, delighted |
| Admissions | Anxious (process? fees? eligibility?) | Calm, clear-headed, ready to act |
| Gallery | Wanting to see real school life | Emotionally connected, wanting to visit |
| Contact | Needs help or has a question | Heard, confident they'll get a response |

### Narrative Rules
1. **Emotion before information.** Lead with a feeling or human story before stating facts
2. **Never feature-list.** Instead of "We offer dance, music, art" write "Children explore creativity through movement, music, and hands-on art every week"
3. **Benefit-narrate, not feature-state.** "Small batches" → "Your child will be known by name, not lost in a crowd"
4. **Use "your child" not "children."** The parent is reading about their specific child
5. **Legacy over age.** "Since 1998" beats "25+ years" because 1998 is concrete and verifiable
6. **Trust signals must be specific.** "Former students now return as parents" is a trust signal. "Parents love us" is not
7. **The founder story is the brand.** The origin (teenager helping 5 children) is emotionally powerful — reference it when building trust sections

### Tone Vocabulary
**Use:** gentle, nurturing, confident, steady, warm, joyful, safe, purposeful, known, cared for

**Avoid:** innovative, cutting-edge, world-class, best-in-class, top-ranked, holistic (overused), 360-degree

---

## 12. CTA Hierarchy

### Hierarchy Levels
1. **Primary CTA** — Lime button, Admission Enquiry. Maximum one per screen viewport
2. **Secondary CTA** — Sky outline button, Book a Visit. Always paired with primary
3. **Tertiary** — Text link with ChevronRight. "View All Programs →", "Learn more →"
4. **Passive trust links** — Page navigation links in cards (no button styling)

### CTA Rules
- Every page ends with a CTA block — either the paired `(Admission Enquiry + Book a Visit)` or a forward nav link to the next logical page
- CTA sections use `bg-gradient-to-br from-lime-50 to-cyan-50 py-16` as background
- CTA heading is `text-3xl md:text-4xl font-heading font-bold text-gray-800` — **no lime underline**
- CTA subtext is `text-lg text-gray-600`
- CTA container: `max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6`
- Never create urgency language ("Last few seats!", "Enrol now before it's too late") — trust is built through calm confidence, not scarcity pressure

---

## 13. Accessibility Rules

### Minimum Requirements
- **Contrast:** All text on white backgrounds uses `text-gray-600` minimum (4.5:1 contrast). Headings use `text-gray-800` or `text-gray-900`
- **Tap targets:** All buttons minimum 44×44px. Icons-only buttons (modal close, lightbox nav) use `w-8 h-8` minimum with full `flex items-center justify-center`
- **Focus rings:** All interactive elements have visible focus rings. Input/Button components handle this. Do not remove `outline-none` without replacing with a custom focus style
- **Alt text:** All `<img>` tags require descriptive `alt` attributes. Use the child-activity description format: "Children engaged in art activity at Angels Preschool" not "img1.jpg"
- **Form labels:** Every input has an associated `<label>` with matching `htmlFor`/`id`. The Input component handles this automatically via label-to-id derivation
- **ARIA:** Modals trap focus implicitly via `AnimatePresence` — do not add `aria-modal` without testing. `<details>/<summary>` on FAQ is semantically correct

### Semantic HTML
- Page hero: `<h1>` (one per page, never more)
- Sections: `<section>` with descriptive context
- Section headers: `<h2>` (SectionHeader defaults to `as="h2"`)
- Card titles: `<h3>`
- Navigation: `<nav>` with `aria-label`
- Never use a `<div>` for click behavior — use `<button>` or `<a>`

### Keyboard Navigation
- All modals support `Escape` to close
- Gallery lightbox supports `ArrowLeft`, `ArrowRight`, `Escape`
- Tab order follows visual reading order — do not use `tabIndex` unless correcting a broken order

---

## 14. Image Treatment Guidelines

### Real Photos Only
**Never use stock photos (Unsplash, Pexels, Shutterstock).** Real photos of real children at Angels are the primary trust signal. Placeholder states are acceptable during development.

### Placeholder Pattern
When a real photo is not yet available, use this pattern:
```tsx
const festImg: string | null = null;

const Img = ({ src, alt, label, className }) => {
  if (src) return <img src={src} alt={alt} className={className} />;
  return (
    <div className={`${className} bg-gradient-to-br from-lime-50 via-white to-orange-50 flex flex-col items-center justify-center gap-2 p-4`}>
      <Camera className="text-lime-300" size={20} />
      <span className="text-[11px] font-semibold text-lime-500 text-center leading-snug">{label}</span>
    </div>
  );
};
```
The placeholder label should describe the ideal photo (e.g., "Children painting at festival event") — this doubles as an image brief.

### Image Styling Conventions

| Context | Classes |
|---------|---------|
| Hero split image | `rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white` |
| Story / about image | `rounded-3xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500` |
| Program card image | `h-48 overflow-hidden` + inner `img w-full h-full object-cover group-hover:scale-110 transition-transform duration-500` |
| Gallery grid cell | `w-full h-full object-cover` with parent `candid-card` for CSS hover scale |
| Gallery hero | Full-bleed, `object-cover`, Ken Burns keyframe animation |
| Founder portrait | `rounded-3xl overflow-hidden` with soft shadow |

### Image Aspect Ratios
- Program cards: fixed `h-48` container, image covers
- Gallery grid cells: fixed height containers (`h-40`, `h-48`, `h-56` depending on grid)
- Hero images: `h-[88vh] min-h-[580px]` for cinematic feel
- About/story images: natural aspect ratio with `object-cover` in a constrained container

### Image Alt Text Standard
Format: `[Subject] at Angels Preschool` or `[Activity] — [brief context]`
- Good: `"Young children learning happily in a preschool classroom"`
- Good: `"Children engaged in dance activity at Angels Preschool"`
- Bad: `"hero1"`, `"img"`, `"children"`

---

## 15. Component Reference (Quick Lookup)

### SectionHeader
```tsx
<SectionHeader
  title="Section Title"
  subtitle="Optional supporting sentence."
  align="center"        // 'center' | 'left' — default: 'center'
  size="md"             // 'sm' | 'md' | 'lg' — default: 'md'
  as="h2"               // 'h1' | 'h2' | 'h3' — default: 'h2'
  titleClassName=""     // override title color/size only
  className="mb-12"     // wrapper margin
/>
```
Always renders the `w-16 h-1 bg-lime-500 mt-3 rounded-full` underline. Never replicate this manually.

### Button
```tsx
<Button
  variant="primary"     // 'primary' | 'secondary' | 'sky' | 'sky-outline'
  size="md"             // 'sm' | 'md' | 'lg'
  fullWidth={false}
  onClick={handler}
>
  <Icon size={18} />
  Button Label
</Button>
```

### Card
```tsx
<Card
  padding="md"          // 'none' | 'sm' | 'md' | 'lg'
  hover={false}         // CSS hover lift — disable when using Framer Motion
  flat={false}          // removes shadow-lg
  className="..."       // additional classes via tailwind-merge
/>
```

### Badge
```tsx
<Badge
  variant="lime"        // 'lime' | 'sky' | 'white' | 'yellow'
  size="md"             // 'sm' | 'md'
  className="px-4 py-1.5" // override padding if needed
>
  👼 Badge Text
</Badge>
```

### Input / Textarea
```tsx
<Input
  label="Field Label"
  required
  error={errors.field?.message}
  hint="optional"
  placeholder="..."
  className="focus:border-sky-400 focus:ring-sky-100" // override focus color
  {...register('field')}
/>
```

---

## 16. Rules That Cannot Be Broken

These are extracted from CLAUDE.md and the handover document. They are hard constraints, not preferences:

1. **Phone/WhatsApp number is always `8369023546`** — never change, never use a different number
2. **Hero messaging on Home page is frozen** — do not rewrite "Nurturing little angels since 1998"
3. **"Book a Visit" always opens VisitModal** — never routes to `/contact`
4. **No new forms or enquiry channels** — only EnquiryModal, VisitModal, and Contact page form
5. **No stock images** — real school photos only
6. **Modal state lives in Layout.tsx** — exposed via ModalContext, consumed via `useModal()`
7. **Section underline is always `w-16 h-1 bg-lime-500 mt-3 rounded-full`** — no exceptions
8. **No lime underline on card h3s, CTA headings, or gradient block headings**
9. **CTA color system is absolute**: Lime = Enquiry, Sky = Visit — never swap
10. **Every page ends with a CTA or forward navigation link**
11. **Think like a parent before thinking like a developer** — if an element doesn't serve the parent's emotional journey, it does not belong on the page
