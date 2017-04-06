(function () {
    'use strict';

    angular.module('appname.factories.restangular', ['restangular', 'appname.factories.core'])
        .factory('baseRestangularFactory', BaseRestangular);

    BaseRestangular.$inject = ['Restangular', 'coreGenericFactory'];

    function BaseRestangular(restangularFactory, coreGenericFactory) {
      var isLocal = coreGenericFactory.isLocal();
      var baseURL = isLocal ? 'app/modules/appname.mocks/' : 'app/modules/appname.mocks/';
      var restAng = getConfigurator(baseURL);
      //the below comment is used in mock grunt build task
      //@@isLocalForPrototype

      var restMap = {
          'configurator': restAng,
          'getUser': isLocal ? 'user/1.json' : 'user/1.json',
          'fetchUserData': isLocal ? 'user/users.json' : 'user/users.json',
          'updateUserData': isLocal ? 'user/delegatedUser.json' : 'user/delegatedUser.json',
          'demoData': isLocal ? 'demo/demo.json' : 'demo/demo.json',
          'projectData': isLocal ? 'project/project.json' : 'project/project.json',
		  'testFormData': isLocal ? 'testform/testform.json' : 'testform/testform.json'
      };

        function getConfigurator(configurl) {
            var configurator = restangularFactory.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(configurl);
                RestangularConfigurer.setDefaultHttpFields({
                    cache: false,
                    timeout: 55000
                });
                RestangularConfigurer.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
                    var headerDetails = {};
                    return {
                        element: element,
                        params: _.extend(params, {
                            nocache: new Date().getTime(),
                            single: true
                        }),
                        headers: _.extend(headers, headerDetails),
                        httpConfig: httpConfig
                    };
                });
            });
            return configurator;
        }

        // Get the configuration based on URL
        function getUrlConfiguration(urlVal) {
            if (restMap[urlVal]) {
                return {
                    url: restMap[urlVal],
                    configurator: restMap.configurator
                };
            }
        }


        /****************** Final Method ************************************/
        var baseConfig = {
            fetchAll: function (url) {
                var finalUrlConfig = getUrlConfiguration(url);
                return finalUrlConfig.configurator.all(finalUrlConfig.url);
            }
        };
        return baseConfig;
    }
})();
