/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontFamily: {
            poppins: 'Poppins, sans-serif',
            open: 'Open Sans, sans-serif',
        },
        extend: {
            colors: {
                mine1: 'hsl(322, 100%, 66%)',
                mine2: 'hsl(193, 100%, 96%)',
                mine3: 'hsl(192, 100%, 9%)',
                mine4: 'hsl(208, 11%, 55%)',
            },
            screens: {
                sm: '640px', // Ensure this is set correctly
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            boxShadow: {
                '3xl': '0 2px 10px 5px rgba(0, 0, 0, 0.05)',
            },
        },
    },
    plugins: [],
};
