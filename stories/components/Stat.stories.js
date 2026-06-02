export default {
  title: "Components/Stat bar",
  parameters: { layout: "padded" },
};

export const StatBar = {
  render: () => `
    <div class="statbar">
      <div class="stat"><b>500+</b><span>Creators</span></div>
      <div class="stat"><b>4.9★</b><span>Avg rating</span></div>
      <div class="stat"><b>120</b><span>Campaigns</span></div>
      <div class="stat"><b>3×</b><span>Engagement</span></div>
    </div>`,
};

export const SingleStat = {
  render: () => `<div class="stat"><b>500+</b><span>Creators</span></div>`,
};
