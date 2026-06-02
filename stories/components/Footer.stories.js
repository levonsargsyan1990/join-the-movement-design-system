export default {
  title: "Components/Footer",
  parameters: { layout: "fullscreen" },
};

const LOGO = "/assets/creavue-logo.png";

export const Footer = {
  render: () => `
    <div style="background:var(--bg);padding-top:40px;">
      <footer class="footer" style="margin-top:0;">
        <div class="wrap footer-inner">
          <a class="brand" href="#"><img src="${LOGO}" alt="Creavue" style="width:32px;height:32px" /><b>Creavue</b></a>
          <p class="foot-tag">The nano-influencer platform for brands that care about real engagement.</p>
          <div class="socials" aria-label="Creavue social links">
            <a href="#" title="X" aria-label="X"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
            <a href="#" title="Instagram" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
            <a href="#" title="LinkedIn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
          </div>
          <div class="foot-meta">
            <a href="#">contact@creavueai.com</a>
            <a href="#">Waitlist</a>
            <a href="#">Contact</a>
          </div>
          <div class="foot-copy">© 2026 CREAVUE</div>
        </div>
      </footer>
    </div>`,
};
