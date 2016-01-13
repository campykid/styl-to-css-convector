var fs = require('fs');
var stylus = require('stylus');
var glob = require("glob")

glob("blocks/**/*.styl", function (er, files) {
	// For each file.
	files.forEach(function (file) {
		// Read content
		fs.readFile(file, function (err, data) {
			var content = data.toString()

<<<<<<< HEAD:index.js
			// Компилируем содержимое в css.
			stylus(content).import('./vars.styl').render(function(err, css){
=======
			// Render in css.
			stylus.render(content, {}, function(err, css){
>>>>>>> d64d727f129f8d54caa71b30f5a757e5583a1e69:styl-to-css-convector.js
				if (err) throw err;

				// Put the css code into file.
				fs.writeFile(file, css, function () {
					console.log(' File ' + file + ' was rewrited');
				});
				// Rename file.
				fs.rename(file, file.replace('.styl', '.css'), function () {
					console.log(' File ' + file + ' was changed extension');
				});
			});

		});

	})
})

