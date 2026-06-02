export default {
  title: "Components/Contact",
  parameters: { layout: "padded" },
};

const btn = (icon, title, sub) => `
  <a class="contact-btn" href="#">
    <span class="ci"><svg viewBox="0 0 24 24">${icon}</svg></span>
    <span class="ct"><b>${title}</b><span>${sub}</span></span>
    <span class="go">→</span>
  </a>`;

export const ContactActions = {
  render: () => `
    <div class="contact-actions">
      ${btn('<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path>', "Email us", "contact@creavueai.com")}
      ${btn('<rect x="3" y="4" width="18" height="17" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path>', "Book a call", "30 min with a founder")}
      ${btn('<path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-10h4v2"></path><rect x="2" y="9" width="4" height="11"></rect><circle cx="4" cy="4" r="2"></circle>', "LinkedIn", "Follow us")}
      ${btn('<path d="M12 5v14M5 12h14"></path>', "Join the waitlist", "Be first in line")}
    </div>`,
};

export const SingleContactButton = {
  render: () =>
    btn('<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path>', "Email us", "contact@creavueai.com"),
};

export const Founders = {
  render: () => {
    const f = (img, name, role) =>
      `<a class="founder" href="#"><img src="${img}" alt="${name}" /><b>${name}</b><span>${role}</span></a>`;
    // Avatars are not bundled; use a neutral gradient placeholder.
    const ph = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23A855F7'/%3E%3Cstop offset='1' stop-color='%2322D3EE'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='96' height='96' fill='url(%23g)'/%3E%3C/svg%3E";
    return `<div class="founders">${f(ph, "Daniel", "COO")}${f(ph, "Levon", "CEO & CTO")}${f(ph, "Somava", "CSO")}</div>`;
  },
};
