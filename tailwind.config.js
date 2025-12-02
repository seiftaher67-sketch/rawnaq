/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tajawal", "sans-serif"],
        ruqah: ["Ruqaa", "serif"],
      },
      colors: {
        brand: {
          black: "#0F0F0F",
          softBlack: "#333333",
          gold: "#C8A06A",
          white: "#FFFFFF",
        },
        gray: {
          light: "#F4F4F4",
          medium: "#BDBDBD",
          dark: "#707070",
        },
        state: {
          success: "#16A34A",
          error: "#DC2626",
          warn: "#FACC15",
        },
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "10px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.08)",
        soft: "0 1px 4px rgba(0,0,0,0.05)",
      }
    },
  },
  plugins: [],
}
