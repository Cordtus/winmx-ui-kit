/* Tailwind CSS v3 preset.
   const winmx = require('winmx-theme-kit/tailwind/winmx-preset.cjs')
   module.exports = { presets: [winmx], content: [...] } */
module.exports = {
  theme: {
    extend: {
      colors: {
        mx: {
          black: "#000000",
          bg: "#000000",
          panel: "#080808",
          border: { DEFAULT: "#404040", subtle: "#202020" },
          hover: "#001010",
          text: { DEFAULT: "#FFFFFF", secondary: "#C0C0C0", disabled: "#808080" },
          green: "#00FF00",
          cyan: "#00FFFF",
          blue: "#0080FF",
          yellow: "#FFFF00",
          orange: "#FF8000",
          red: "#FF0000",
          magenta: "#FF00FF",
          purple: "#8000FF",
          olive: "#808000",
        },
      },
      fontFamily: {
        "mx-ui": ['Tahoma', 'Verdana', '"Segoe UI"', "system-ui", "-apple-system", "sans-serif"],
        "mx-mono": ['"Lucida Console"', "Consolas", '"Courier New"', "monospace"],
      },
      borderRadius: {
        mx: "2px",
      },
      keyframes: {
        "mx-blink": { "50%": { opacity: "0" } },
        "mx-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(400%)" },
        },
      },
      animation: {
        "mx-blink": "mx-blink 1s steps(1) infinite",
        "mx-slide": "mx-slide 1.2s ease-in-out infinite",
      },
    },
  },
};
