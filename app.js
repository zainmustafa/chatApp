/**
 * Created by Zain Mustafa on 6/29/2015.
 */
angular.module('app', ['ngNewRouter', 'ngMaterial', 'app.chat', 'app.home','app.userDetails','firebase'])
    .controller('AppController', function ($router) {
        $router.config([
            {
                path        : '/chat',
                component   : 'chat'
            },
            {
                path        : '/',
                component   : 'home'
            }
        ]);
    });

