(function() {
    
    angular.module("jwm.splash")
           .config(appRoute);
    
    appRoute.$inject = ["$stateProvider", "$urlRouterProvider"];
    
    function appRoute($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/splash");
        
        $stateProvider.state("splash", {
            url: "/splash",
            templateUrl: "/app/splash/splash.html"
        });
    }
    
})();