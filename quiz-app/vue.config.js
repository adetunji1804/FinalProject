module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            error:false
        },
        proxy: 'http://127.0.0.1:3000'
    }
}