module.exports = {
    theme: {
        extend: {
            rotate: {
                '-1': '-1deg',
                '-2': '-2deg',
                '-3': '-3deg',
                '1': '1',
                '2': '2deg',
                '3': '3deg',
            },
        }
    },
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['group-hover']
    },
    plugins: []
}