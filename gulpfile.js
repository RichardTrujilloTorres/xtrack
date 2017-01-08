const elixir = require('laravel-elixir');

// require('laravel-elixir-vue-2');



// Styles
// elixir(mix => {

// 	// css
    
//     mix.scripts([
//     	'app.modules.js',
//     	'app.js',
//     	'*/*.*.js',
//     	], 'public/js/app.js');
       
// });

// Angular App
elixir(mix => {
    
    mix.scripts([
    	'app.modules.js',
    	'app.js',
    	'*/*.*.js',
    	], 'public/js/app.js');
       
});


// elixir(mix => {
//     mix.sass('app.scss')
//        .webpack('app.js');
// });
