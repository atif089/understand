module.exports = {
  theme: {
    extend: {
      fontSize: {
        h1: ["3rem", { lineHeight: "3.5rem", fontWeight: "600" }], // 48/56, Semibold
        h2: ["2.5rem", { lineHeight: "3rem", fontWeight: "600" }], // 40/48, Semibold
        h3: ["2rem", { lineHeight: "2.5rem", fontWeight: "500" }], // 32/40, Medium
        "body-l": ["1.3125rem", { lineHeight: "2rem", fontWeight: "500" }], // 21/32, Medium
        "body-m": ["1.125rem", { lineHeight: "1.75rem" }], // 18/28, Semibold/Medium (use font-semibold or font-medium)
        "body-s": ["1rem", { lineHeight: "1.5rem" }], // 16/24, Medium/Regular
        "body-xs": ["0.875rem", { lineHeight: "1.25rem" }], // 14/20, Medium/Regular
      },
      fontWeight: {
        medium: 500,
        semibold: 600,
      },
    },
  },
  plugins: [],
};
