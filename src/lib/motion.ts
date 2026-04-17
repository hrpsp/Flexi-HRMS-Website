/**
 * Flexi motion system — easing curves, durations, and spring presets.
 * Every Framer Motion transition on the site should pull from these tokens.
 * Tailwind users get the same tokens via `ease-flexi`, `duration-fast`, etc.
 */

export const ease = {
  /** Default — confident ease-out. Use for most UI transitions. */
  flexi: [0.22, 0.61, 0.36, 1],
  /** For elements leaving the screen. Accelerated. */
  flexiIn: [0.64, 0, 0.78, 0],
  /** Signature moments — hero reveals, scroll-in, tab swap entrances. */
  flexiBold: [0.16, 1, 0.3, 1],
  /** UI state changes — tabs, toggles, pressed states. */
  flexiSnap: [0.4, 0, 0.2, 1],
} as const;

export const duration = {
  /** Micro interactions — hover, focus, active. */
  instant: 0.12,
  /** Default UI transitions. */
  fast: 0.2,
  /** Section reveals, card enters. */
  base: 0.32,
  /** Hero animations. */
  slow: 0.6,
  /** Signature cinematic moments — Flexi Meta configurator, scale-bar count-up. */
  signature: 0.9,
} as const;

export const spring = {
  /** Layout animations (tab-content size changes, accordion expand). */
  soft: { type: "spring", stiffness: 260, damping: 28, mass: 0.9 } as const,
  /** Attention-grabbing — scale-bar numbers settling. */
  bounce: { type: "spring", stiffness: 380, damping: 22 } as const,
  /** Cards/grids rearranging. */
  stiff: { type: "spring", stiffness: 500, damping: 40 } as const,
} as const;

/**
 * Stagger presets for list / grid enters.
 * Prefer these over inventing new staggers in each component.
 */
export const stagger = {
  tight: 0.03,   // dense lists (logo wall, form fields)
  default: 0.06, // card grids, CTA buttons
  wide: 0.12,    // hero elements, proof tiles
} as const;

/**
 * Common reveal variant — drop into any Framer Motion tree where
 * children should enter with a consistent cascade.
 *
 * Usage:
 *   <motion.div variants={revealContainer} initial="hidden" animate="visible">
 *     {items.map(item => <motion.div variants={revealItem} />)}
 *   </motion.div>
 */
export const revealContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger.default, delayChildren: 0.1 },
  },
};

export const revealItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.flexiBold },
  },
};
