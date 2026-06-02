export default {
  title: "Patterns/Hero",
  parameters: { layout: "fullscreen" },
};

export const Hero = {
  name: "Hero with glow field",
  render: () => `
    <div style="position:relative;min-height:100vh;overflow:hidden;background:var(--bg);">
      <div class="glowfield" aria-hidden="true">
        <div class="orb o1"></div><div class="orb o2"></div><div class="orb o3"></div>
      </div>
      <div class="veil" aria-hidden="true"></div>
      <section class="hero wrap reveal-sec in">
        <div class="col">
          <span class="eyebrow reveal">Authentic by design</span>
          <h1 class="reveal d1">Join the <span class="grad-text">Creavue</span> movement</h1>
          <p class="lead reveal d2">Creavue helps brands launch authentic nano-influencer campaigns — faster, smarter, and with measurable results.</p>
          <div class="hero-cta reveal d2">
            <a class="btn btn-primary" href="#">Join the Waitlist <span class="btn-arrow">→</span></a>
            <a class="btn btn-ghost" href="#">Contact Us</a>
          </div>
        </div>
      </section>
    </div>`,
};

export const SectionHeader = {
  render: () => `
    <div style="background:var(--bg);padding:80px var(--pad-x);">
      <div class="sec-head">
        <span class="eyebrow reveal in">Find your fit</span>
        <h2 class="reveal in" style="opacity:1;">How would you like to work with Creavue?</h2>
        <p class="lead reveal in" style="opacity:1;">A few details and you're in line. We'll route you to the right place.</p>
      </div>
    </div>`,
};
