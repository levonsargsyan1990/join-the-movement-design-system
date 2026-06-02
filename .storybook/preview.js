// Load the full design system (fonts, tokens, base, components).
// Vite resolves the @import graph and rewrites the font url()s.
import "../src/styles/index.css";

/** Toolbar-driven theme globals. */
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Color theme",
    defaultValue: "dark",
    toolbar: {
      icon: "mirror",
      items: [
        { value: "dark", title: "Dark" },
        { value: "light", title: "Light" },
      ],
      dynamicTitle: true,
    },
  },
  motion: {
    name: "Motion",
    description: "Animations",
    defaultValue: "on",
    toolbar: {
      icon: "lightning",
      items: [
        { value: "on", title: "Motion on" },
        { value: "off", title: "Motion off" },
      ],
      dynamicTitle: true,
    },
  },
  btn: {
    name: "CTA style",
    description: "CTA button style",
    defaultValue: "lime",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "lime", title: "CTA: Lime" },
        { value: "gradient", title: "CTA: Gradient" },
      ],
      dynamicTitle: true,
    },
  },
};

/** Apply globals to <html> so token selectors resolve. */
const withThemeAttributes = (story, context) => {
  const root = document.documentElement;
  root.setAttribute("data-theme", context.globals.theme || "dark");
  root.setAttribute("data-motion", context.globals.motion || "on");
  root.setAttribute("data-btn", context.globals.btn || "lime");
  return story();
};

export const decorators = [withThemeAttributes];

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    backgrounds: { disable: true }, // theme tokens own the background
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          ["Colors", "Typography", "Spacing & Layout", "Radii & Shadows", "Motion"],
          "Components",
          "Patterns",
        ],
      },
    },
    a11y: { test: "todo" },
  },
};

export default preview;
