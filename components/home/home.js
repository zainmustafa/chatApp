/**
 * Created by Zain Mustafa on 8/1/2015.
 */
angular.module('app.home', [])

    .controller('HomeController', HomeController);

    HomeController.$inject  = ['userDetails', '$timeout','$location'];

    function HomeController(userDetails, $timeout, $location) {

    var that = this;
    that.userName = '';

    this.sub = function () {
        userDetails.showLoginDialog();
        $timeout(function () {
            if(userDetails.getUser() != undefined){
                that.userName = userDetails.getUser().facebook.displayName;
                that.imgURL = userDetails.getUser().facebook.cachedUserProfile.picture.data.url;
            }
        }, 0);
    };
};
