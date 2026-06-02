const ARROW = `<span class="arr"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>`;

export default {
  title: "Components/Card",
  parameters: { layout: "padded" },
};

export const WhoCard = {
  name: "Who card (persona)",
  render: () => `
    <div style="max-width:360px;">
      <button class="who-card" type="button">
        <div class="who-num">01</div>
        <div class="who-kicker">Brands</div>
        <h3>Grow through authentic creators</h3>
        <p>Launch authentic influencer campaigns.</p>
        <span class="who-link">Join brand waitlist ${ARROW}</span>
      </button>
    </div>`,
};

export const WhoGrid = {
  name: "Who grid",
  render: () => `
    <div class="who-grid" style="max-width:760px;">
      <button class="who-card" type="button">
        <div class="who-num">01</div><div class="who-kicker">Brands</div>
        <h3>Grow through authentic creators</h3><p>Launch authentic influencer campaigns.</p>
        <span class="who-link">Join brand waitlist ${ARROW}</span>
      </button>
      <button class="who-card" type="button">
        <div class="who-num">02</div><div class="who-kicker">Creators</div>
        <h3>Grow as a nano influencer</h3><p>Learn, grow, earn visibility.</p>
        <span class="who-link">Become a creator ${ARROW}</span>
      </button>
      <button class="who-card" type="button">
        <div class="who-num">03</div><div class="who-kicker">Agencies</div>
        <h3>Unlock nano influencer campaigns</h3><p>Manage campaigns without operational pain.</p>
        <span class="who-link">Partner with us ${ARROW}</span>
      </button>
      <button class="who-card" type="button">
        <div class="who-num">04</div><div class="who-kicker">Investors &amp; Supporters</div>
        <h3>Help shape the future of marketing</h3><p>Partnerships, mentorship, investment.</p>
        <span class="who-link">Talk to the founders ${ARROW}</span>
      </button>
    </div>`,
};

export const WhyCard = {
  name: "Why card (feature)",
  render: () => `
    <div style="max-width:340px;">
      <div class="why-card">
        <div class="why-icon">
          <svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.4h7.6z"></path></svg>
        </div>
        <h3>Authentic reach</h3>
        <p>Real nano-creators driving measurable engagement for your brand.</p>
      </div>
    </div>`,
};

export const WhyGrid = {
  name: "Why grid",
  render: () => {
    const c = (icon, h, p) =>
      `<div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24">${icon}</svg></div><h3>${h}</h3><p>${p}</p></div>`;
    return `<div class="why-grid" style="max-width:900px;">
      ${c('<path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.4h7.6z"></path>', "Authentic reach", "Real creators, real engagement.")}
      ${c('<path d="M3 12h4l3 8 4-16 3 8h4"></path>', "Measurable results", "Track performance end to end.")}
      ${c('<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>', "Faster launches", "Go to market in days, not weeks.")}
    </div>`;
  },
};
