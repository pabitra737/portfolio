/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Neon/Premium Palette
                primary: {
                    light: "#a78bfa", // Violet 400
                    DEFAULT: "#7c3aed", // Violet 600 (Neon Violet)
                    dark: "#5b21b6", // Violet 800
                },
                secondary: {
                    light: "#22d3ee", // Cyan 400 (Neon Cyan)
                    DEFAULT: "#06b6d4", // Cyan 500
                },
                // Backgrounds
                bg: {
                    light: "#f8fafc", // Slate 50
                    dark: "#030014",  // Deep Space Black
                    card: {
                        light: "#ffffff",
                        dark: "#0f172a" // Slate 900
                    }
                },
                // Text
                text: {
                    light: "#020617", // Slate 950
                    main: "#334155",  // Slate 700
                    muted: "#94a3b8", // Slate 400
                    inverted: "#f1f5f9" // Slate 100
                }
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 3s ease-in-out infinite',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" }
                }
            }
        },
    },
    plugins: [],
}
