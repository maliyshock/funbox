module.exports = () => ({
    parser: 'sugarss',
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {},
        'cssnano': {},
        'autoprefixer': options.autoprefixer
    }
})
