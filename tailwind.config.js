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
                // Matte Palette
                primary: {
                    light: "#3b82f6", // Matte Blue
                    DEFAULT: "#2563eb",
                    dark: "#1d4ed8",
                },
                secondary: {
                    light: "#64748b", // Slate 500
                    DEFAULT: "#475569", // Slate 600
                },
                // Backgrounds
                bg: {
                    light: "#f1f5f9", // Slate 100 (Matte Light)
                    dark: "#1e293b",  // Slate 800 (Matte Dark)
                    card: {
                        light: "#ffffff",
                        dark: "#334155" // Slate 700
                    }
                },
                // Text
                text: {
                    light: "#0f172a", // Slate 900
                    main: "#334155",  // Slate 700
                    muted: "#64748b", // Slate 500
                    inverted: "#f8fafc" // Slate 50
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
