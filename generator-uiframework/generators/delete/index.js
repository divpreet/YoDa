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
var async = require('async');

var DeleteComponent = yeoman.generators.Base.extend({
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
   //           Ask the prefix of module
   ////////////////////////////////////////////////////////

   askFactoryPrefix: function () {
      //Dont need prefix if it is called from other generator and that generator is passing the prefix.
      if(!this.options.prefix) {
         var done = this.async();
         this.prompt({
            type: 'input',
            name: 'prefix',
            message: 'Prefix of the module to be deleted (example in gui-popup, the prefix is gui)',
            default: 'wbc'
         }, function (result) {
            this.options.prefix = result.prefix;
            done();
         }.bind(this));
      }
   },

   ////////////////////////////////////////////////////////
   //             Ask name of name of module
   ////////////////////////////////////////////////////////

   askModuleName: function () {
      var done = this.async();

      this.prompt({
         type: 'input',
         name: 'name',
         message: 'Name of the module (common)',
         default: ''
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
   //             Ask name of name of sub-module
   ////////////////////////////////////////////////////////
   askSubModuleName: function () {
      var done = this.async();

      this.prompt({
         type: 'input',
         name: 'submoduleName',
         message: 'Name of the sub-module (back-button). Blank if you want to delete the whole module',
         default: ''
      }, function (result) {
         var name = result.submoduleName.replace(/\ /g, '-');
         var prefix = this.options.prefix;
         this.options.submoduleName = {
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
      this.options.appFolder = config.appFolder;
      this.options.componentsFolder = config.componentsFolder;
      this.options.distFolder = config.distFolder;

   },
   delete: function() {
      var cb = this.async();
      var root = this.sourceRoot();
      this.destinationRoot(path.join(this.destinationRoot(), 
            'dev', this.options.appFolder, this.options.componentsFolder));
      var dest = this.destinationRoot();
      var distFolder = this.options.distFolder;
      var that = this;
      console.log(this.options.prefix + '.' + this.options.name.dashed);
      console.log(this.options.submoduleName.dashed);
      var toBeDeleted = this.options.prefix + '.' + this.options.name.dashed + '/' + this.options.submoduleName.dashed;
      
      rmdir(dest, toBeDeleted, function(error) {
         if (error) {
         console.error("rmdir error: " + error.message);
         } else {
            console.log("Successfully removed " + dest+'/' + toBeDeleted);
         }
      });
   },
  end: function () {
      // this.installDependencies();
   }
});

module.exports = DeleteComponent;

function rmdir(path, toBeDeleted, callback) {
    // first check if the path exists
    fs.exists(path, function(exists) {
        if (!exists) {
            return callback(new Error(path + " does not exist"));
        }
        fs.readdir(path+'/'+toBeDeleted, function(error, files) {
            if (error) {
               return cb(error);
            }
            // loop over the files returned by readdir()
            async.each(files, function(file, cb) {
                var f = path +"/"+ toBeDeleted + "/" + file;
                fs.stat(f, function(error, stats) {
                    if (error) {
                        return cb(error);
                    }
                    if (stats.isDirectory()) {
                        // recursively call rmdir() on the directory
                        rmdir(f,'' ,cb);
                    } else {
                        // delete the file
                        fs.unlink(f, cb);
                    }
                });
            }, function(error) {
                if (error) {
                    return callback(error);
                }
                // the directory is now empty, so delete it
                fs.rmdir(path+'/'+toBeDeleted, callback);
            });
        });
    });
}