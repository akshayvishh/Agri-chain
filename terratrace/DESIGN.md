# Design System Specification: Rural + Tech Fusion

## 1. Overview & Creative North Star
### The Creative North Star: "The Digital Agronomist"
This design system rejects the "industrial" look of traditional logistics software in favor of a **High-End Editorial** approach to agriculture. We are moving away from rigid, boxy templates toward a "Digital Agronomist" aesthetic: a sophisticated blend of grounded, earthy textures and high-precision technical overlays.

The goal is to evoke the feeling of a premium physical ledger combined with a high-tech satellite dashboard. We break the "generic" mold by using **intentional asymmetry**, large-scale typography, and **Tonal Layering** instead of traditional lines. This creates an interface that feels as organic as the soil but as reliable as the blockchain technology powering it.

---

## 2. Colors & Surface Philosophy
The palette is a sophisticated interplay of deep, authoritative greens and warm, tactile neutrals.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Traditional lines create cognitive noise and feel "cheap." 
*   **Defining Boundaries:** Use background shifts (e.g., a `surface-container-low` component sitting on a `surface` background).
*   **The Transition:** Use padding and tonal shifts to guide the eye. If you think you need a line, you actually need more whitespace or a different surface token.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials.
*   **Base:** `surface` (#fcf9f6) acts as our "canvas."
*   **Nesting Layers:** Use `surface-container-low` for large structural areas and `surface-container-lowest` (#ffffff) for high-priority interactive cards. This "inner-glow" effect creates depth without the clutter of shadows.

### The "Glass & Gradient" Rule
To bridge the "Rural" with the "Tech," use modern glass effects for floating navigation or critical status overlays.
*   **Glassmorphism:** Apply a semi-transparent `surface` color with a 12px-20px backdrop blur for floating headers.
*   **Signature Gradients:** For primary CTAs and Hero sections, use a subtle linear gradient from `primary` (#012d1d) to `primary-container` (#1b4332). This adds a "weighted" professional polish that flat colors lack.

---

## 3. Typography: Editorial Authority
We utilize a dual-font strategy to balance technical precision with human-centric accessibility.

*   **Display & Headlines (Manrope):** Chosen for its geometric modernism. Used at large scales (`display-lg` at 3.5rem) with tighter letter-spacing to create an authoritative, editorial feel.
*   **Body & Labels (Inter):** The workhorse for high-readability. Inter’s tall x-height ensures that supply chain data remains legible even for users with low-literacy or those viewing screens in direct sunlight (field conditions).
*   **The Scale:** We favor "Large-Scale Minimalism." Don't be afraid of the `headline-lg` token for simple status updates. Bigger type reduces the need for complex iconography.

---

## 4. Elevation & Depth
We achieve hierarchy through **Tonal Layering** rather than structural scaffolding.

*   **The Layering Principle:** Depth is "found," not "added." A `surface-container-highest` element should be reserved for the most urgent user actions, creating a natural visual "pop."
*   **Ambient Shadows:** For "floating" elements like FABs or Modals, use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(28, 28, 26, 0.06);`. The shadow color is derived from `on-surface` (#1c1c1a) at a very low opacity to mimic natural, soft-box lighting.
*   **The "Ghost Border" Fallback:** If accessibility requirements demand a border (e.g., in high-glare environments), use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons: The Tactile Command
*   **Primary:** High-contrast `primary` (#012d1d) background with `on-primary` (#ffffff) text. Use the `xl` (1.5rem/24px) corner radius. These are large, tactile targets.
*   **Secondary:** `secondary-container` background. Provides a soft, clay-toned alternative that doesn't compete with the main action.
*   **Visual State:** On hover, apply a subtle gradient shift rather than a simple color darken.

### Cards: The Information Vessel
*   **Constraint:** Zero borders.
*   **Design:** Use `surface-container-low` or `lowest` with `xl` (1.5rem) rounded corners.
*   **Layout:** Ensure a minimum of 24px internal padding to maintain the "Editorial" breathing room.

### Inputs: Technical Clarity
*   **Style:** Use a "Filled" style with `surface-container-high`.
*   **Focus State:** Instead of a heavy border, use a 2px `primary` bottom-bar and a subtle background shift. This keeps the form feeling "open."

### Agri-Specific Components
*   **Traceability Timeline:** A vertical layout using `tertiary` (#3b1f00) dots and `primary-fixed` connectors. No lines—only tonal transitions to show the "flow" of the supply chain.
*   **Status Chips:** Use `primary-fixed-dim` for "Active" and `secondary-fixed-dim` for "In Transit." Avoid harsh "traffic light" colors; stay within the earthy palette to maintain professional trust.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use whitespace as a functional tool to separate content (min 32px between sections).
*   **DO** use "Manrope" for all numerical data; its geometric clarity is superior for supply chain metrics.
*   **DO** lean into the `tertiary` (warm earth) tones for "Human" elements—farmer profiles, handwritten-style notes, or heritage data.

### Don't
*   **DON'T** use black (#000000). Use `primary` (#012d1d) for deep contrast.
*   **DON'T** use "Standard" icons. Choose thick-stroke, rounded-corner iconography that mirrors the `xl` corner radius of the components.
*   **DON'T** use dividers. If you feel the need to separate two pieces of content, increase the padding or shift the background tone of one element to `surface-container-low`.