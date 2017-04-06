'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var camelCase = require('camel-case');
var capitalize = require('capitalize');
var walk = require('fs-walk').walk;
var fs = require('fs');
var fs = require('fs-extra');

var AngularFactoryGenerator = yeoman.generators.Base.extend({
   constructor: function () {
      yeoman.generators.Base.apply(this, arguments);
   },
   initializing: function () {
      this.sourceRoot(path.join(__dirname, 'templates/'));
      if(!this.options){
         this.options = {};
      }else if(this.options.composed){
         //Reset the destination Root if it is called from other generator
         this.destinationRoot(this.env.cwd);
      }
      this.options.author = {
            name: this.user.git.name(),
            email: this.user.git.email()
      };
   },

   ////////////////////////////////////////////////////////
   //           Ask the prefix of new factory
   ////////////////////////////////////////////////////////

   askFactoryPrefix: function () {
      //Dont need prefix if it is called from other generator and that generator is passing the prefix.
      if(!this.options.prefix) {
         var done = this.async();
         this.prompt({
            type: 'input',
            name: 'prefix',
            message: 'Prefix (example in gui-popup, the prefix is gui)',
            default: 'wbc'
         }, function (result) {
            this.options.prefix = result.prefix;
            done();
         }.bind(this));
      }
   },

   ////////////////////////////////////////////////////////
   //             Ask name of new factory
   ////////////////////////////////////////////////////////

   askName: function () {
      var done = this.async();

      this.prompt({
         type: 'input',
         name: 'name',
         message: 'Factory name',
         default: 'my-factory'
      }, function (result) {
         var name = result.name.replace(/\ /g, '-');
         var prefix = this.options.prefix;
         this.options.name = {
            dashed: name,
            camel: camelCase(name),
            spaced: capitalize(name.replace(/\-/, '-')),
            prefixedFactory: camelCase(prefix + '-' + name)
         };

         done();
      }.bind(this));
   },

   ////////////////////////////////////////////////////////
   //             Get the config from yo.da.json
   ////////////////////////////////////////////////////////

   getYodaOptions : function() {
      var config = JSON.parse(fs.readFileSync('yo.da.json'), 'utf8');

      console.log(config.appFolder);
      console.log(config.componentsFolder);

      this.options.appFolder = config.appFolder;
      this.options.componentsFolder = config.componentsFolder;
      this.options.distFolder = config.distFolder;
   },

   ////////////////////////////////////////////////////////
   //                     Templating
   ////////////////////////////////////////////////////////

   writing: {
      dest: function () {
         var root = this.sourceRoot();
         this.destinationRoot(path.join(this.destinationRoot(), 'dev', this.options.appFolder, this.options.componentsFolder, this.options.prefix + '.factories', this.options.name.dashed));
         var dest = this.destinationRoot();
         var that = this;

         walk(root, function (basedir, filename, stat, next) {
            var relativePath = basedir.replace(root, '');
            var filePath = path.join(basedir, filename);

            // Ignore this repo's README
            if (filename === 'README.md') {
               return next();
            };

            if (stat.isDirectory()) {
               // FIXME: if it's deep directory this won't work
               fs.mkdir(path.join(filename), next);
               return;
            }

            fs.readFile(filePath, function (err, stream){
               if (err) {
                  return console.error(err);
               }

               // Replace factory.md with README.md
               if (filename === 'newFactory.md') {
                  filename = 'README.md';
               }
               // Replace src
               else if (filename.indexOf('new-factory') > -1) {
                  filename = filename.replace('new-factory', that.options.name.dashed);
               }

               var fileString = stream.toString();
               var writeFilePath = path.join(dest, relativePath, filename);

               // app folder and components folder
               fileString = fileString.replace(/.\/appFolder/g, that.options.appFolder);
               fileString = fileString.replace(/\/componentsFolder\//g, that.options.componentsFolder);
               fileString = fileString.replace(/\/distFolder\//g, that.options.distFolder);

               // Templating
               fileString = fileString.replace(/new-factory/g, that.options.name.dashed);
               fileString = fileString.replace(/newFactory/g, that.options.name.camel);
               fileString = fileString.replace(/prefix/g, that.options.prefix);
               fileString = fileString.replace(/fullname/g, that.options.name.prefixedFactory);

               fileString = fileString.replace(/moduleName/g, "factories");

               fileString = fileString.replace(/angular-factory-template/g, that.options.name.dashed);
               fileString = fileString.replace(/factory.js/g, that.options.name.dashed + '-factory.js');
               fileString = fileString.replace(/[t|T]he [f|F]actory/g, that.options.name.spaced);

               fs.writeFile(writeFilePath, fileString, next);
            });
         }, function(err) {
            console.error(err);
         });
      }
   },

   end: function () {
      // this.installDependencies();
   }
});

module.exports = AngularFactoryGenerator;
