export default {
  title: "Components/Form",
  parameters: { layout: "padded" },
};

const shell = (inner, cls = "") => `<div style="max-width:560px;margin:0 auto;"><form class="form-shell ${cls}" novalidate>${inner}</form></div>`;

const FIELDS = `
  <div class="form-body">
    <div class="field">
      <label for="sf-name">Name</label>
      <input class="input" id="sf-name" type="text" placeholder="Your name" />
    </div>
    <div class="field">
      <label for="sf-email">Email</label>
      <input class="input" id="sf-email" type="email" placeholder="you@email.com" />
    </div>
    <div class="field">
      <label for="sf-type">I am a</label>
      <select class="select" id="sf-type">
        <option value="" disabled selected>Select one…</option>
        <option>Brand</option><option>Creator</option><option>Agency</option><option>Investor</option>
      </select>
    </div>
    <div class="field">
      <label for="sf-msg">Message <span class="opt">— optional</span></label>
      <textarea class="input" id="sf-msg" rows="3" placeholder="Anything you'd like us to know?"></textarea>
    </div>
    <div class="form-consents">
      <div class="field field-check">
        <label class="check-label" for="sf-news">
          <input type="checkbox" id="sf-news" />
          <span class="check-box" aria-hidden="true"></span>
          <span>Subscribe to the Creavue newsletter</span>
        </label>
      </div>
      <div class="field field-check">
        <label class="check-label" for="sf-legal">
          <input type="checkbox" id="sf-legal" checked />
          <span class="check-box" aria-hidden="true"></span>
          <span>I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms &amp; Conditions</a></span>
        </label>
      </div>
    </div>
    <button class="btn btn-primary" type="button">Get Early Access <span class="btn-arrow">→</span></button>
    <div class="form-note"><span class="pulse"></span> We're onboarding early partners now.</div>
  </div>`;

export const FullForm = { render: () => shell(FIELDS) };

export const Fields = {
  name: "Inputs, select, textarea",
  render: () => `
    <div style="max-width:520px;display:flex;flex-direction:column;gap:18px;">
      <div class="field"><label>Text input</label><input class="input" placeholder="Placeholder text" /></div>
      <div class="field"><label>Select</label><select class="select"><option disabled selected>Select one…</option><option>Brand</option><option>Creator</option></select></div>
      <div class="field"><label>Textarea</label><textarea class="input" rows="3" placeholder="Multi-line input"></textarea></div>
    </div>`,
};

export const Checkbox = {
  render: () => `
    <div class="form-consents" style="max-width:480px;">
      <div class="field field-check">
        <label class="check-label" for="cb1"><input type="checkbox" id="cb1" /><span class="check-box" aria-hidden="true"></span><span>Unchecked option</span></label>
      </div>
      <div class="field field-check">
        <label class="check-label" for="cb2"><input type="checkbox" id="cb2" checked /><span class="check-box" aria-hidden="true"></span><span>Checked option</span></label>
      </div>
    </div>`,
};

export const InvalidState = {
  name: "Validation (error)",
  render: () => `
    <div style="max-width:520px;">
      <div class="field invalid">
        <label>Email</label>
        <input class="input" value="not-an-email" />
        <div class="field-error">Please enter a valid email.</div>
      </div>
    </div>`,
};

export const SuccessState = {
  name: "Success state",
  render: () =>
    shell(
      `${FIELDS}
      <div class="form-success">
        <div class="check"><svg viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"></path></svg></div>
        <h3>You're on the list.</h3>
        <p>We'll be in touch shortly with your next steps.</p>
        <span class="tag-pill">Brand</span>
      </div>`,
      "done"
    ),
};
