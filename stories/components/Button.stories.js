export default {
  title: "Components/Button",
  argTypes: {
    label: { control: "text" },
    variant: { control: "inline-radio", options: ["btn-primary", "btn-ghost"] },
    arrow: { control: "boolean" },
  },
  args: { label: "Join the Waitlist", variant: "btn-primary", arrow: true },
};

const render = ({ label, variant, arrow }) =>
  `<a class="btn ${variant}" href="#">${label}${arrow ? ' <span class="btn-arrow">→</span>' : ""}</a>`;

export const Primary = { render, args: { variant: "btn-primary" } };
export const Ghost = { render, args: { variant: "btn-ghost", label: "Contact Us", arrow: false } };

export const Pair = {
  name: "Hero CTA pair",
  render: () => `
    <div class="hero-cta">
      <a class="btn btn-primary" href="#">Join the Waitlist <span class="btn-arrow">→</span></a>
      <a class="btn btn-ghost" href="#">Contact Us</a>
    </div>`,
};

export const GradientCTA = {
  name: "CTA: gradient (set CTA style → Gradient)",
  render: () => `
    <p style="color:var(--text-muted);font-family:var(--font-body);margin-bottom:16px;max-width:40ch;">
      Switch <strong>CTA style</strong> to <em>Gradient</em> in the toolbar to see the brand-gradient treatment.
    </p>
    <a class="btn btn-primary" href="#">Get Early Access <span class="btn-arrow">→</span></a>`,
};
