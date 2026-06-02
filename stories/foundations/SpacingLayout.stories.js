export default {
  title: "Foundations/Spacing & Layout",
  parameters: { layout: "fullscreen" },
};

const page = (inner) => `
  <div style="padding:48px var(--pad-x);min-height:100vh;background:var(--bg);color:var(--text);font-family:var(--font-body);">
    <div style="max-width:820px;margin:0 auto;">${inner}</div>
  </div>`;

const row = (label, varName, desc) => `
  <tr style="border-bottom:1px solid var(--hairline);">
    <td style="padding:14px 12px;font-family:var(--font-display);font-weight:600;">${label}</td>
    <td style="padding:14px 12px;"><code style="color:var(--g3);">${varName}</code></td>
    <td style="padding:14px 12px;color:var(--text-muted);">${desc}</td>
  </tr>`;

export const LayoutTokens = {
  render: () =>
    page(`
      <h2>Spacing &amp; Layout</h2>
      <table style="width:100%;border-collapse:collapse;margin-top:24px;font-size:.95rem;">
        <thead><tr style="text-align:left;color:var(--text-faint);font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;">
          <th style="padding:0 12px 10px;">Token</th><th style="padding:0 12px 10px;">Variable</th><th style="padding:0 12px 10px;">Value</th>
        </tr></thead>
        <tbody>
          ${row("Max width", "--maxw", "1140px")}
          ${row("Content column", "--content", "560px (720px ≥ 760px)")}
          ${row("Inline padding", "--pad-x", "clamp(20px, 6vw, 40px)")}
          ${row("Section gap", "--sec-gap", "clamp(72px, 12vw, 116px)")}
        </tbody>
      </table>
    `),
};

export const ContentColumn = {
  render: () =>
    page(`
      <h2>Content column</h2>
      <p style="color:var(--text-muted);margin:12px 0 24px;">The reading column (<code>--content</code>) is centered within the max width.</p>
      <div style="background:var(--card-bg);border:1px dashed var(--card-border);border-radius:var(--radius);">
        <div class="col" style="background:color-mix(in srgb, var(--g2) 16%, transparent);padding:24px;border-radius:var(--radius);">
          <span class="eyebrow">Inside .col</span>
          <p class="lead" style="margin-top:12px;">This block is constrained to the content column width.</p>
        </div>
      </div>
    `),
};
