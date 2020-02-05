const mix = require('laravel-mix');
const glob = require('glob-all');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('assets/js/app.js', 'site/assets/js/app.js')
   .sass('assets/sass/app.scss', 'site/assets/css/app.css')
   .sass('assets/sass/amp.scss', 'site/assets/css/amp.css')
   .tailwind('./tailwind.config.js');

if (mix.inProduction()) {
   console.log( 'path is: ' + path.join(__dirname, '/'));
  mix
   .purgeCss({
      extensions: ['axe'],
      paths: () => glob.sync([
         path.join(__dirname, '/*.axe'),
         path.join(__dirname, '/**/*.axe')
      ])
  });
}