---
name: Heritage Modernism
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#dec0b5'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a58b81'
  outline-variant: '#57423a'
  surface-tint: '#ffb596'
  primary: '#ffb596'
  on-primary: '#581e00'
  primary-container: '#e2703a'
  on-primary-container: '#4d1900'
  inverse-primary: '#a1400a'
  secondary: '#c9c6c0'
  on-secondary: '#31302c'
  secondary-container: '#484742'
  on-secondary-container: '#b8b5ae'
  tertiary: '#c8c6c5'
  on-tertiary: '#303030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7d2d00'
  secondary-fixed: '#e6e2db'
  secondary-fixed-dim: '#c9c6c0'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#484742'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is built on the concept of "Heritage Modernism"—a fusion of premium digital sophistication and warm, earth-rooted aesthetics. It targets a global audience celebrating African creative excellence. 

The visual style leans into **Minimalism** with **Tactile** accents. It utilizes heavy whitespace to create an editorial feel, allowing the content to breathe while maintaining high-impact delivery. The emotional response should be one of prestige, warmth, and rhythmic energy. By combining a near-black canvas with sun-baked terracotta accents, the interface feels grounded yet celebratory, moving away from cold corporate tech toward a more human, culturally resonant experience.

## Colors

The palette is rooted in a high-contrast dark mode to ensure a premium "night-of-the-awards" atmosphere.

- **Primary (#E2703A):** A burnt terracotta used exclusively for high-priority actions, active states, and critical brand highlights. It represents the warmth of the earth and the energy of the creative spirit.
- **Neutral/Background (#121212):** A deep charcoal that provides a sophisticated, low-glare canvas.
- **Surface/Tertiary (#2A2A2A):** A slightly elevated grey used for cards and container backgrounds to create subtle depth without losing the dark aesthetic.
- **Text/Off-white (#F5F1EA):** A soft, parchment-like white that reduces eye strain and adds a premium, organic feel compared to pure #FFFFFF.

## Typography

This design system employs a rhythmic typographic scale. **Syne** is used for headings to provide an avant-garde, expressive character that feels both modern and culturally bold. Its wider structures evoke a sense of presence.

**Hanken Grotesk** serves as the functional workhorse for body text and labels. It is a sharp, contemporary sans-serif that ensures maximum readability for candidate bios and voting instructions. 

For mobile devices, display type scales down aggressively to maintain layout integrity. Use `label-caps` for category headers to establish a clear hierarchy through contrast rather than just size.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain an editorial, "poster-like" composition, transitioning to a **Fluid Grid** for mobile devices. 

- **Desktop (1280px+):** 12-column grid with 24px gutters and wide 80px side margins. 
- **Tablet:** 8-column grid with 24px gutters and 40px margins.
- **Mobile:** 4-column grid with 16px gutters and 20px margins.

Spacing follows an 8px rhythmic scale. Generous vertical padding (`xl`) should be used between major sections (e.g., between "Featured Categories" and "Latest News") to emphasize the premium nature of the platform.

## Elevation & Depth

To maintain a grounded and modern feel, this design system avoids traditional drop shadows. Instead, it utilizes **Tonal Layers** and **Low-contrast Outlines**.

- **Level 0 (Background):** #121212.
- **Level 1 (Cards/Containers):** #2A2A2A with a subtle 1px border of #F5F1EA at 10% opacity.
- **Level 2 (Modals/Popovers):** #333333 with a slightly more pronounced border (20% opacity) to distinguish it from the background.

Depth is communicated through color shifts rather than physical distance. Active states for voting cards should use a 2px Terracotta (#E2703A) border rather than a shadow to maintain a clean, flat aesthetic.

## Shapes

The shape language is **Soft** but structured. Most UI elements (buttons, inputs, cards) use a 0.25rem (4px) corner radius. This slight rounding takes the edge off the brutalism while keeping the interface feeling precise and architectural.

- **Standard Elements:** 4px radius.
- **Featured Cards:** 8px (rounded-lg) to make them feel more substantial.
- **Buttons:** 4px radius; avoid pill shapes to keep the design feeling grounded and sophisticated rather than "bubbly."

## Components

### Buttons
- **Primary:** Terracotta background with Off-white text. No shadows. 
- **Secondary:** Transparent background with an Off-white 1px border. 
- **Tertiary/Ghost:** Text only, bold weight, with an underline on hover.

### Voting Cards
Cards should feature a large image of the nominee. The "Vote" button is pinned to the bottom. In the "Voted" state, the card border changes to Terracotta and a checkmark icon appears.

### Chips & Tags
Used for categories (e.g., "Afrobeat," "Amapiano"). These should be low-profile: #2A2A2A background with `label-caps` typography.

### Input Fields
Dark backgrounds (#121212) with an Off-white border at 20% opacity. Focus state changes the border to 100% opacity Terracotta.

### Progress Bars (Voting Results)
Thin, 4px tall bars. The filled portion is Terracotta; the unfilled portion is #2A2A2A. This keeps the data visualization clean and unobtrusive.