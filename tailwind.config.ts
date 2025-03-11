/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust this based on your project structure
      "./public/index.html"
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: "#2337ff", // Main accent color (SEO.ai-like blue)
          primaryDark: "#000d8a",
          grayLight: "#f8fafc",
          grayDark: "#1e293b",
          grayText: "#64748b",
        },
        fontFamily: {
          sans: ["Atkinson", "Inter", "sans-serif"],
        },
        spacing: {
          'header': '4.5rem',
        },
        typography: {
          DEFAULT: {
            css: {
              color: "#1e293b",
              h1: {
                fontSize: "2.5rem",
                fontWeight: "bold",
                lineHeight: "1.3",
              },
              h2: {
                fontSize: "2rem",
                fontWeight: "bold",
                lineHeight: "1.4",
              },
              h3: {
                fontSize: "1.75rem",
                fontWeight: "semibold",
                lineHeight: "1.5",
              },
              p: {
                fontSize: "1.125rem",
                lineHeight: "1.75",
                color: "#475569",
              },
              a: {
                color: "#2337ff",
                textDecoration: "none",
                "&:hover": {
                  color: "#000d8a",
                  textDecoration: "underline",
                },
              },
              blockquote: {
                fontSize: "1.5rem",
                fontStyle: "italic",
                borderLeft: "4px solid #2337ff",
                paddingLeft: "1rem",
                color: "#334155",
              },
            },
          },
        },
        boxShadow: {
          soft: "0 4px 12px rgba(0, 0, 0, 0.1)",
          hard: "0 6px 20px rgba(0, 0, 0, 0.2)",
        },
        borderRadius: {
          xl: "1rem",
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
    ],
  };
  