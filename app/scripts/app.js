'use strict';

/**
 * @ngdoc overview
 * @name starterApp
 * @description
 * # starterApp
 *
 * Main module of the application.
 */
angular
.module('starterApp', [
'ngAnimate', 
'ngAria', 
'ngCookies', 
'ngMessages', 
'ngResource', 
'ngRoute', 
'ngSanitize', 
'ngMaterial', 
'users',
])
.config(function() {
//     $routeProvider
//     .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//     })
//     .otherwise({
//         redirectTo: '/'
//     });
})
.config(function($mdThemingProvider, $mdIconProvider) {
    
    $mdIconProvider
    .defaultIconSet("./assets/svg/avatars.svg", 128)
    .icon("menu", "./assets/svg/menu.svg", 24)
    .icon("share", "./assets/svg/share.svg", 24)
    .icon("google_plus", "./assets/svg/google_plus.svg", 512)
    .icon("hangouts", "./assets/svg/hangouts.svg", 512)
    .icon("twitter", "./assets/svg/twitter.svg", 512)
    .icon("phone", "./assets/svg/phone.svg", 512);
    
    $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('red');

});
