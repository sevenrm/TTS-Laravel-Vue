/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
        "./resources/js/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                "sf-pro": ["SF Pro Text"],
            },
        },
    },
    plugins: [],
};
