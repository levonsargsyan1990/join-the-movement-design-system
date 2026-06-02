export default {
  title: "Components/Badge & Labels",
};

export const Eyebrow = {
  render: () => `<span class="eyebrow">Authentic by design</span>`,
};

export const Kicker = {
  render: () => `<span class="who-kicker">Brands</span>`,
};

export const TagPill = {
  render: () => `<span class="tag-pill">Brand</span>`,
};

export const AllLabels = {
  name: "All labels",
  render: () => `
    <div style="display:flex;flex-direction:column;gap:22px;align-items:flex-start;">
      <span class="eyebrow">Find your fit</span>
      <span class="who-kicker">Creators</span>
      <span class="tag-pill">Investor</span>
    </div>`,
};
