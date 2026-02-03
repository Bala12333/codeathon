/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pennywise-red': '#FF0000',
                'blood-dark': '#4a0000',
                'sewer-green': '#1a2e1a',
                'balloon-red': '#cc0000',
            },
            fontFamily: {
                'nosifer': ['"Nosifer"', 'cursive'],
                'courier': ['"Courier Prime"', 'monospace'],
            },
        },
    },
    plugins: [],
}
