import type { Preset } from "@pandacss/dev";

/* PandaCSS / park-ui preset.
   Add to panda.config.ts:  presets: [winmxPreset, ...]  */
export const winmxPreset: Preset = {
  name: "winmx",

  theme: {
    tokens: {
      colors: {
        mx: {
          black: { value: "#000000" },
          bg: { value: "#000000" },
          panel: { value: "#080808" },
          border: {
            DEFAULT: { value: "#404040" },
            subtle: { value: "#202020" },
          },
          hover: { value: "#001010" },
          text: {
            DEFAULT: { value: "#FFFFFF" },
            secondary: { value: "#C0C0C0" },
            disabled: { value: "#808080" },
          },
          green: { value: "#00FF00" },
          cyan: { value: "#00FFFF" },
          blue: { value: "#0080FF" },
          yellow: { value: "#FFFF00" },
          orange: { value: "#FF8000" },
          red: { value: "#FF0000" },
          magenta: { value: "#FF00FF" },
          purple: { value: "#8000FF" },
          olive: { value: "#808000" },
        },
      },
      fonts: {
        "mx-ui": { value: 'Tahoma, Verdana, "Segoe UI", system-ui, -apple-system, sans-serif' },
        "mx-mono": { value: '"Lucida Console", Consolas, "Courier New", monospace' },
      },
      radii: {
        mx: { value: "2px" },
      },
    },

    recipes: {
      button: {
        className: "mx-button",
        base: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "3px 10px",
          fontFamily: "inherit",
          fontSize: "12px",
          lineHeight: "1.3",
          border: "1px solid {colors.mx.border}",
          borderRadius: "{radii.mx}",
          cursor: "pointer",
          userSelect: "none",
          transition: "color .1s, border-color .1s, background-color .1s",
        },
        variants: {
          variant: {
            solid: { background: "{colors.mx.panel}", color: "{colors.mx.text.secondary}" },
            outline: { background: "transparent", color: "{colors.mx.text.secondary}" },
            ghost: { background: "transparent", borderColor: "transparent", color: "{colors.mx.text.secondary}" },
          },
          tone: {
            neutral: {},
            primary: { background: "{colors.mx.green}", borderColor: "{colors.mx.green}", color: "{colors.mx.black}" },
            danger: { background: "{colors.mx.panel}", borderColor: "{colors.mx.red}", color: "{colors.mx.text}" },
          },
        },
        defaultVariants: { variant: "solid", tone: "neutral" },
      },

      badge: {
        className: "mx-badge",
        base: {
          display: "inline-block",
          padding: "0 5px",
          fontSize: "10px",
          lineHeight: "16px",
          textTransform: "uppercase",
          letterSpacing: ".06em",
          border: "1px solid currentColor",
          borderRadius: "{radii.mx}",
        },
        variants: {
          tone: {
            gray: { color: "{colors.mx.text.secondary}" },
            green: { color: "{colors.mx.green}" },
            cyan: { color: "{colors.mx.cyan}" },
            blue: { color: "{colors.mx.blue}" },
            yellow: { color: "{colors.mx.yellow}" },
            orange: { color: "{colors.mx.orange}" },
            red: { color: "{colors.mx.red}" },
            magenta: { color: "{colors.mx.magenta}" },
            purple: { color: "{colors.mx.purple}" },
            olive: { color: "{colors.mx.olive}" },
          },
        },
        defaultVariants: { tone: "gray" },
      },

      progress: {
        className: "mx-progress",
        base: {
          width: "100%",
          height: "12px",
          overflow: "hidden",
          background: "{colors.mx.black}",
          border: "1px solid {colors.mx.border}",
        },
        variants: {
          tone: {
            green: {},
            cyan: { "& > *": { background: "{colors.mx.cyan}" } },
            yellow: { "& > *": { background: "{colors.mx.yellow}" } },
            red: { "& > *": { background: "{colors.mx.red}" } },
          },
        },
        defaultVariants: { tone: "green" },
      },
    },
  },

  globalCss: {
    body: {
      margin: 0,
      background: "{colors.mx.bg}",
      color: "{colors.mx.text}",
      fontFamily: "{fonts.mx-ui}",
      fontSize: "12px",
      lineHeight: "1.45",
      colorScheme: "dark",
    },
    "::selection": {
      background: "{colors.mx.cyan}",
      color: "{colors.mx.black}",
    },
    ":focus-visible": {
      outline: "1px solid {colors.mx.cyan}",
      outlineOffset: "1px",
    },
  },
};

export default winmxPreset;
