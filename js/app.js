/**
 * Created by tdadam on 12/21/15.
 */
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

(function(){
    'use strict';

    angular.module('basicApp', [
            "ui.router",
            "navController",
            "ngMaterial"
        ])

        .config(["$stateProvider", "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {

                // define all app states (pages)
                $stateProvider
                    .state("intro", {
                        url: "/intro",
                        templateUrl: "templates/intro.html"
                        //controller: null
                    })
                    .state("portfolio", {
                        url: "/portfolio",
                        templateUrl: "templates/portfolio.html",
                        controller: null
                    })
                    .state("resume", {
                        url: "/resume",
                        templateUrl: "templates/resume.html",
                        controller: null
                    })
                    .state("golf", {
                        url: "/golf",
                        templateUrl: "templates/golf.html",
                        controller: null
                    })
                    .state("gameFlappy", {
                        url: "/game_flappy",
                        templateUrl: "templates/game_flappy.html",
                        controller: null
                    })
                    .state("todo", {
                        url: "/todo",
                        templateUrl: "templates/todo.html",
                        controller: null
                    })
                    .state("groupStore", {
                        url: "/group_store",
                        templateUrl: "templates/groupStore.html",
                        controller: null
                    })
                    .state("coming", {
                        url: "/coming",
                        templateUrl: "templates/coming.html",
                        controller: null
                    })
                    .state("ytvids", {
                        url: "/ytvids",
                        templateUrl: "templates/ytvids.html",
                        controller: null
                    });

                // if none of the above states are matched, use this as the fallback
                $urlRouterProvider.otherwise("/intro");
            }]);

}());
