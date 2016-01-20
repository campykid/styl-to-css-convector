# stylus auto-convertation to css

Thе auto-converter that compiles stylus file in native css and changing their extension.

It can be useful if you decided to switch a new preprocessor like post.css.

## Usage

The first argument is  directory in which will found all files, recursively  (using [glob module](https://www.npmjs.com/package/glob)).

The second argument is extension, default - .css.

### Example

```
# It converts all files with .styl extensions from styles directory
# into files with .post.css extensions.
node index.js /styles .post.css
```
