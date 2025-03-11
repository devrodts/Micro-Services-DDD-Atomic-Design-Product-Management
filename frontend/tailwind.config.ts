import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content:[
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                white: "#fff",
                gray:{
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    500: "#6b7280",
                    700: "#374151 ",
                    800: "#1f2937",
                },

                blue: {
                    200: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                },
                "dark-bg": "#101214",
                "dark-secondary": "#1d1f21",
                "dark-tertiary": "#3b3d40",
                "dark-quaternary": "#25272a",
                "blue-primary": "#0275ff",
                "stoke-dark": "#2d3135",

               
            },
            backgroundImage:{
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                mono: ["var(--font-geist-mono)"],
            },
        },
    },
    
}
export default config;