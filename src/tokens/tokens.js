/**
 * Join the Movement — Design Tokens (JS export)
 *
 * A flat, ergonomic mirror of tokens.json for use in JS/TS apps
 * (e.g. styled-components, CSS-in-JS, React Native, charts).
 * Values are ported verbatim from the marketing site.
 */

export const colors = {
  brand: {
    g1: "#A855F7", // purple
    g2: "#6366F1", // indigo
    g3: "#22D3EE", // cyan
    gPink: "#E83DF0", // magenta
    lime: "#CCFF00", // signature accent
  },
  feedback: {
    danger: "#FB7185",
  },
};

export const gradients = {
  grad: "linear-gradient(150deg, #A855F7 0%, #6366F1 52%, #22D3EE 100%)",
  gradSoft: "linear-gradient(150deg, #A855F7, #22D3EE)",
};

export const themes = {
  dark: {
    bg: "#08070D",
    bgElev: "#0E0C16",
    text: "#F5F3FA",
    textMuted: "#A4A0B6",
    textFaint: "#6F6B82",
    cardBg: "rgba(255,255,255,0.035)",
    cardBg2: "rgba(255,255,255,0.055)",
    cardBorder: "rgba(255,255,255,0.09)",
    cardBorderHover: "rgba(255,255,255,0.22)",
    hairline: "rgba(255,255,255,0.08)",
    fieldBg: "rgba(255,255,255,0.04)",
    shadow: "0 30px 80px -30px rgba(0,0,0,0.7)",
    glowBlend: "screen",
    glowOpacity: 0.55,
  },
  light: {
    bg: "#FBFAFE",
    bgElev: "#FFFFFF",
    text: "#15121F",
    textMuted: "#5E586E",
    textFaint: "#9A95AC",
    cardBg: "rgba(255,255,255,0.7)",
    cardBg2: "rgba(255,255,255,0.92)",
    cardBorder: "rgba(22,16,44,0.09)",
    cardBorderHover: "rgba(124,58,237,0.45)",
    hairline: "rgba(22,16,44,0.08)",
    fieldBg: "rgba(255,255,255,0.7)",
    shadow: "0 30px 70px -34px rgba(80,40,160,0.35)",
    glowBlend: "multiply",
    glowOpacity: 0.85,
  },
};

export const cta = {
  bg: colors.brand.lime,
  ink: "#0B0B12",
  glow: "rgba(204,255,0,0.42)",
};

export const typography = {
  fontFamily: {
    display: '"Space Grotesk", system-ui, sans-serif',
    body: '"Hanken Grotesk", system-ui, sans-serif',
  },
  fontWeight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  size: {
    h1: "clamp(2.7rem, 11vw, 5.4rem)",
    h2: "clamp(2.05rem, 7.5vw, 3.3rem)",
    lead: "clamp(1.04rem, 2.6vw, 1.22rem)",
    eyebrow: "0.72rem",
    stat: "clamp(1.5rem, 5vw, 2rem)",
  },
  lineHeight: { heading: 1.04, body: 1.6, lead: 1.55 },
  letterSpacing: { heading: "-0.035em", body: "-0.005em", eyebrow: "0.32em" },
};

export const layout = {
  maxWidth: "1140px",
  contentWidth: "560px",
  paddingX: "clamp(20px, 6vw, 40px)",
  sectionGap: "clamp(72px, 12vw, 116px)",
};

export const radius = { default: "22px", sm: "14px", pill: "999px" };

export const breakpoints = { tablet: "760px", desktop: "1040px" };

export const motion = {
  easing: {
    standard: "cubic-bezier(0.2, 0.7, 0.2, 1)",
    reveal: "cubic-bezier(0.22, 0.68, 0.2, 1)",
  },
  duration: { fast: "0.25s", base: "0.35s", reveal: "0.85s" },
};

const tokens = {
  colors,
  gradients,
  themes,
  cta,
  typography,
  layout,
  radius,
  breakpoints,
  motion,
};

export default tokens;
