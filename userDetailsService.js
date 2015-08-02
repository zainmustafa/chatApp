/**
 * Created by Administrator on 6/9/2015.
 */

angular.module('app.userDetails', [])
    .service("userDetails", function ($location, $rootScope) {
        var ref = new Firebase("https://chatonthego.firebaseio.com");
        var user = null;
        this.showLoginDialog = function () {
            ref.authWithOAuthPopup("facebook", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    user = authData;
                    $location.path('/chat');
                    $rootScope.$apply();
                }
            });
        };
        this.getUser = function () {
            return user;
        }
    });
