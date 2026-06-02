export default {
  title: "Foundations/Typography",
  parameters: { layout: "fullscreen" },
};

const page = (inner) => `
  <div style="padding:48px var(--pad-x);min-height:100vh;background:var(--bg);color:var(--text);">
    <div style="max-width:760px;margin:0 auto;">${inner}</div>
  </div>`;

export const TypeScale = {
  render: () =>
    page(`
      <span class="eyebrow">Foundations</span>
      <h1 style="margin-top:16px;">Display heading 1</h1>
      <p style="color:var(--text-faint);font-size:.82rem;margin-top:6px;">Space Grotesk · clamp(2.7rem, 11vw, 5.4rem)</p>

      <h2 style="margin-top:40px;">Section heading 2</h2>
      <p style="color:var(--text-faint);font-size:.82rem;margin-top:6px;">Space Grotesk · clamp(2.05rem, 7.5vw, 3.3rem)</p>

      <h3 style="margin-top:40px;font-size:1.46rem;">Card heading 3</h3>
      <p style="color:var(--text-faint);font-size:.82rem;margin-top:6px;">Space Grotesk · 1.46rem</p>

      <p class="lead" style="margin-top:40px;">
        Lead paragraph — Creavue helps brands launch authentic nano-influencer
        campaigns, faster and smarter, with measurable results.
      </p>
      <p style="color:var(--text-faint);font-size:.82rem;margin-top:6px;">Hanken Grotesk · clamp(1.04rem, 2.6vw, 1.22rem)</p>

      <p style="margin-top:40px;color:var(--text-muted);">
        Body copy — the quick brown fox jumps over the lazy dog. Self-hosted
        Hanken Grotesk at 400 with -0.005em tracking and 1.6 line-height.
      </p>
    `),
};

export const GradientText = {
  render: () =>
    page(`
      <h1>Join the <span class="grad-text">Creavue</span> movement</h1>
      <p style="color:var(--text-faint);font-size:.82rem;margin-top:10px;">
        <code>.grad-text</code> clips a 120° purple→cyan gradient to the text.
      </p>
    `),
};

export const FontFamilies = {
  render: () =>
    page(`
      <div style="font-family:var(--font-display);font-size:2rem;">Space Grotesk — Display</div>
      <p style="color:var(--text-faint);font-size:.82rem;">--font-display · weights 400/500/600/700</p>
      <div style="font-family:var(--font-body);font-size:2rem;margin-top:28px;">Hanken Grotesk — Body</div>
      <p style="color:var(--text-faint);font-size:.82rem;">--font-body · weights 400/600 (self-hosted)</p>
    `),
};
