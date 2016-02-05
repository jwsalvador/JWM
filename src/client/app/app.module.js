(function() {
  'use strict';

  angular.module("jwm", [

    "jwm.core",

    "jwm.layout",
      
    "jwm.splash"

  ])
  
  // WORK AROUND: ui-router doesn't work inside ng-include
  .run(function ($state) {});
})();
