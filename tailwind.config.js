/** @type {import('tailwindcss').Config} */
const konstaConfig = require("konsta/config");

module.exports = konstaConfig({
    konsta: {
        colors: {
            primary: "#77ff77",
        },
    },
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
});
