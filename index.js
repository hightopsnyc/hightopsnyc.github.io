// dependencies for htps

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
var css = fs.readFileSync("src/htps.css", "utf8")

// process css
var output = postcss()
  .use(atImport())
  .use(cssvariables())
  .use(simpleVars())
  .use(conditionals())
  .use(customMedia())
  .use(cssnext())
  .process(css, {
    from: "./src/htps.css",
    to: "./css/htps.css"
  })
  .css

fs.writeFile("css/htps.css", output, 'utf-8')


// Using Sqwish for CSS
new compressor.minify({
    type: 'sqwish',
    fileIn: './css/htps.css',
    fileOut: './css/htps.min.css'
});

var content = ['index.html'];
var css = ['css/htps.min.css'];

var options = {
  minify: true,
  output: 'css/htps.min.css'
};

// purify(content, css, options, function (purifiedAndMinifiedResult) {
//   console.log(purifiedAndMinifiedResult);
// });
// console.log('updog')
