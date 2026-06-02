export default {
  title: "Foundations/Radii & Shadows",
  parameters: { layout: "fullscreen" },
};

const page = (inner) => `
  <div style="padding:48px var(--pad-x);min-height:100vh;background:var(--bg);color:var(--text);font-family:var(--font-body);">
    <div style="max-width:820px;margin:0 auto;display:flex;flex-wrap:wrap;gap:28px;">${inner}</div>
  </div>`;

const card = (label, style) => `
  <div style="text-align:center;">
    <div style="width:140px;height:100px;background:var(--card-bg-2);border:1px solid var(--card-border);${style}"></div>
    <div style="margin-top:10px;font-family:var(--font-display);font-weight:600;font-size:.9rem;">${label}</div>
  </div>`;

export const Radii = {
  render: () =>
    page(
      [
        card("--radius · 22px", "border-radius:var(--radius);"),
        card("--radius-sm · 14px", "border-radius:var(--radius-sm);"),
        card("pill · 999px", "border-radius:999px;"),
      ].join("")
    ),
};

export const Shadows = {
  render: () =>
    page(
      [
        card("--shadow (elevation)", "border-radius:var(--radius);box-shadow:var(--shadow);"),
        card("CTA glow", "border-radius:999px;box-shadow:0 14px 40px -14px var(--cta-glow);"),
        card("icon tile glow", "border-radius:14px;background:var(--grad);box-shadow:0 12px 30px -12px var(--g2);border:none;"),
      ].join("")
    ),
};
