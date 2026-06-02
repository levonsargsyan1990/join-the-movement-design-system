export default {
  title: "Foundations/Colors",
  parameters: { layout: "fullscreen" },
};

const swatch = (name, varName, note = "") => `
  <div style="border:1px solid var(--card-border);border-radius:14px;overflow:hidden;background:var(--card-bg);">
    <div style="height:96px;background:var(${varName});"></div>
    <div style="padding:12px 14px;font-family:var(--font-body);">
      <div style="font-family:var(--font-display);font-weight:600;color:var(--text);">${name}</div>
      <code style="font-size:.8rem;color:var(--text-muted);">${varName}</code>
      ${note ? `<div style="font-size:.78rem;color:var(--text-faint);margin-top:4px;">${note}</div>` : ""}
    </div>
  </div>`;

const grid = (inner) => `
  <div style="padding:32px;min-height:100vh;background:var(--bg);">
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:16px;max-width:1100px;margin:0 auto;">
      ${inner}
    </div>
  </div>`;

export const BrandPalette = {
  render: () =>
    grid(
      [
        swatch("Purple", "--g1", "#A855F7"),
        swatch("Indigo", "--g2", "#6366F1"),
        swatch("Cyan", "--g3", "#22D3EE"),
        swatch("Magenta", "--g-pink", "#E83DF0"),
        swatch("Lime (accent)", "--lime", "#CCFF00"),
      ].join("")
    ),
};

export const Gradients = {
  render: () =>
    grid(
      [
        swatch("Brand gradient", "--grad", "150° purple → indigo → cyan"),
        swatch("Soft gradient", "--grad-soft", "150° purple → cyan"),
      ].join("")
    ),
};

export const ThemeSurfaces = {
  name: "Theme surfaces (toggle theme in toolbar)",
  render: () =>
    grid(
      [
        swatch("Background", "--bg"),
        swatch("Elevated", "--bg-elev"),
        swatch("Text", "--text"),
        swatch("Text muted", "--text-muted"),
        swatch("Text faint", "--text-faint"),
        swatch("Card border", "--card-border"),
        swatch("Hairline", "--hairline"),
        swatch("Field bg", "--field-bg"),
      ].join("")
    ),
};
