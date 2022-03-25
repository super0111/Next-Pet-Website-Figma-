module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme  : {
        fontFamily: {
            'regular': 'PlusJakartaSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
        },
        extend: {
            colors: {
                'orange': '#f8b84a',
                'light-orange': '#faefe2',
                'pink': '#ea3e70',
                'light-pink': '#ffecf1',
                'purple': '#4a2072',
                'light-purple': '#fbf7ff',
                'active-purple': '#f0eaf7',
                'lighter-black': '#262624',
                'lighter-gray': '#909090',
                'darker-gray': '#5b5b5b',
                'darker-white': '#f5f5f5',
            }
        },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
    plugins: [],
}
