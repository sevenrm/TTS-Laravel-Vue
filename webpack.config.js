const mix = require("laravel-mix");
const { VitePlugin } = require("laravel-vite");

mix.extend("vite", new VitePlugin());

mix.vite().version();
mix.copyDirectory("resources/css", "public/css");
mix.copyDirectory("resources/js", "public/js");
mix.copyDirectory("resources/css/assets", "public/assets");
