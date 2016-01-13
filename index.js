var fs = require('fs');
var stylus = require('stylus');
var glob = require("glob")

// options is optional 
glob("blocks/**/*.styl", function (er, files) {
	// Для каждого файла.
	files.forEach(function (file) {
		// Читаем содержимое
		fs.readFile(file, function (err, data) {
			var content = data.toString()

			// Компилируем содержимое в css.
			stylus(content).import('./vars.styl').render(function(err, css){
				if (err) throw err;

				// Ложим css в файл
				fs.writeFile(file, css, function () {
					console.log(' File ' + file + ' was rewrited');
				});
				// Переминовываем файл.
				fs.rename(file, file.replace('.styl', '.css'), function () {
					console.log(' File ' + file + ' was changed extension');
				});
			});

		});

	})
})

