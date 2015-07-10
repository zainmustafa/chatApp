/**
 * Created by Administrator on 6/9/2015.
 */

var newApp = angular.module('radioDemo1',[]);
    newApp.service("userDetails", function(){
        var ref = new Firebase("https://zainonline1.firebaseio.com//data");
        var user = null;

        this.showLoginDialog  = function(){
            ref.authWithOAuthPopup("facebook", function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    user = authData;
                }
            });
        };
        /*this.userName = authData.;*/


            this.getUser = function(){
            return user;
        }
    });
