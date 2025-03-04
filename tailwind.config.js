/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Base: {
          White: "#FFFFFF",
          Black: "#080325",
        },
        Violet: {
          100: "#FCFDFE",
          200: "#F7F8FD",
          300: "#B8B6F7",
          400: "#8880E5",
          600: "#473FCE",
          700: "#3821C0",
          800: "#120563",
          900: "#191A38",
        },
        Neutral: {
          10: "#FFFFFF",
          20: "#F8FAFC",
          30: "#EFF2F6",
          40: "#E2E8F0",
          50: "#CBCFD5",
          60: "#A4A9B0",
          70: "#79808A",
          80: "#5B6776",
          90: "#344055",
          100: "#121212",
        },
        Brand: {
          SweetOrangebg: "#EFB2B2",
          SweetOrangemn: "#F93939",
          Cherrybg: "#ECA6BF",
          Cherrymn: "#ED1865",
          Wisteriabg: "#C7A1EC",
          Wisteriamn: "#6B19F1",
          Asterbg: "#90A5EE",
          Astermn: "#2236EE",
          Turqoibg: "#8DD6ED",
          Turqoimn: "#0699C5",
        },
        IconColor: {
          Default: "#64748B",
          Disabled: "#64748B",
        },
        Error: {
          100: "#F9FDFA",
          200: "#ECF7EE",
          300: "#58C063",
          400: "#3AA96D",
          500: "#2B825C",
          600: "#157D5E",
          700: "#056A4C",
          800: "#035647",
          900: "#033022",
        },
        Success: {
          100: "#FDF8F8",
          200: "#FCF1F1",
          300: "#EB9C9C",
          400: "#E27D7D",
          500: "#D1493D",
          600: "#B83F18",
          700: "#A0310F",
          800: "#87280A",
          900: "#471104",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default body font
      },
    },
  },
  plugins: [],
};
