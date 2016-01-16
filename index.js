var fs = require('fs');
var stylus = require('stylus');
var glob = require("glob")
var path = process.argv[2] + "/**/*.styl";
var extension = process.argv[3] || '.css'

glob(path, function (er, files) {
	// For each file.
	files.forEach(function (file) {
		// Reads a content
		fs.readFile(file, function (err, data) {
			var content = data.toString()

			// Render into css.
			stylus(content).render(function(err, css){
				if (err) throw err;

				// Put the css code into file.
				fs.writeFile(file, css, function () {
					console.log(file + ' succed convert styl to css');
				});
				// Renames file.
				fs.rename(file, file.replace('.styl', extension), function () {
					console.log('File has renamed - ' + file + extension);
				});
			});

		});

	})
})

