// dependencies for mnml

var fs = require("fs")
var autoprefixer = require("autoprefixer")
var postcss = require("postcss")
var atImport = require("postcss-import")
var cssvariables = require('postcss-css-variables')
var compressor = require('node-minify')
var conditionals = require('postcss-conditionals')
var customMedia = require("postcss-custom-media")
var simpleVars = require("postcss-simple-vars")
var purify = require('purify-css');
var cssnext = require('postcss-cssnext');


// css to be processed
var css = fs.readFileSync("src/mnml.css", "utf8")

// process css
var output = postcss([autoprefixer])
  .use(atImport())
  .use(cssvariables())
  .use(simpleVars())
  .use(conditionals())
  .use(customMedia())
  .use(cssnext())
  .process(css, {
    from: "./src/mnml.css",
    to: "./css/mnml.css"
  })
  .css

fs.writeFile("css/mnml.css", output, 'utf-8')


// Using Sqwish for CSS
new compressor.minify({
    type: 'sqwish',
    fileIn: './css/mnml.css',
    fileOut: './css/mnml.min.css'
});

var content = ['index.html'];
var css = ['css/mnml.min.css'];

var options = {
  minify: true,
  output: 'css/mnml.min.css'
};

// purify(content, css, options, function (purifiedAndMinifiedResult) {
//   console.log(purifiedAndMinifiedResult);
// });
// console.log('updog')
