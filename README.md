# starterApp

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## installation

Clone this repo
Run `npm install` which will install the Yeoman tools, yo, bower, grunt etc.

Run `bower install` to install packages for the starter application

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Issues with Yeoman installation

### PROBLEM: 
grunt build: Couldn't run compass
had an error related to version of Ruby

### SOLUTION:
sudo apt-get install ruby-compass

### PROBLEM: 
grunt build: Couldn't run imagemin 

### SOLUTION:
Reverted imagemin to version 0.9
npm cache clean && npm install grunt-contrib-imagemin@0.9.1

OR: 

add the following to the devDependencies section of package.json
"grunt-contrib-imagemin": "1.0.0"
"vinyl-fs": "2.3.1"
remove node-modules (maybe juse clear npm cache?)
npm install

### PROBLEM: 
grunt test: Couldn't run Karma with grunt test

### SOLUTION:
Reinstalled Karma
npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev

### ISSUE:
Install modules with bower use: 
bower install --save <bower-package-name(s)>

To deploy with only a package.json and a bower.json
npm install
bower install 
bower update
grunt build

Update packages, use:
bower update

To update index.html to reflect these new bower modules run: 
grunt serve 

