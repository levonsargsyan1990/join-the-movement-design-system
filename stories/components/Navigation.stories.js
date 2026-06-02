export default {
  title: "Components/Navigation",
  parameters: { layout: "fullscreen" },
};

const LOGO = "/assets/creavue-logo.png";

export const Topbar = {
  name: "Topbar (floating pills)",
  render: () => `
    <div style="position:relative;height:160px;background:var(--bg);">
      <header class="topbar" style="position:absolute;">
        <div class="topbar__inner">
          <nav class="topbar-nav" aria-label="Primary">
            <a class="topbar-pill topbar-brand" href="#"><img class="topbar-brand__logo" src="${LOGO}" alt="Creavue" /><b>Creavue</b></a>
            <a class="topbar-pill nav-cta" href="#">Join the Waitlist</a>
          </nav>
        </div>
      </header>
    </div>`,
};

export const TopbarScrolled = {
  name: "Topbar (scrolled — dissolved bg)",
  render: () => `
    <div style="position:relative;height:160px;background:var(--bg);">
      <header class="topbar scrolled" style="position:absolute;">
        <div class="topbar__inner">
          <nav class="topbar-nav" aria-label="Primary">
            <a class="topbar-pill topbar-brand" href="#"><img class="topbar-brand__logo" src="${LOGO}" alt="Creavue" /><b>Creavue</b></a>
            <a class="topbar-pill nav-cta" href="#">Join the Waitlist</a>
          </nav>
        </div>
      </header>
    </div>`,
};

export const BrandLockup = {
  render: () => `<a class="brand" href="#"><img src="${LOGO}" alt="Creavue" style="width:32px;height:32px" /><b>Creavue</b></a>`,
};
