module.exports = {
    publicPath:
        process.env.NODE_ENV === "production" ? "/text-to-speech/" : "/",
    outputDir: "../public_html/text-to-speech",
    assetsDir: "../laravel/public/build",
    filenameHashing: false,
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].template = "./public/index.html";
            return args;
        });
    },
};
