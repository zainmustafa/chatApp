/**
 * Created by taimoor on 6/4/2015.
 */
    

// Angular Working

    //Module wokring
        var app = angular.module('radioDemo1', ['firebase','ngMaterial']);
        var arr = [];
    //Controller
    app.controller("appController", function($scope, $firebaseObject) {
        
        
        var ref = new Firebase("https://chatonthego.firebaseio.com/data"); 
                    
        $scope.myName ;
        $scope.myMessage ;
        $scope.fireName;
        $scope.fireMessage;
        $scope.msgHistory;
        $scope.message = [];
        // ref.set({
        //     name: $scope.myName, 
        //     text: $scope.myMessage});
        //     console.log($scope.myName);
        $scope.sub = function(){
            ref.push({
            name: $scope.myName, 
            text: $scope.myMessage}
            );     
            $scope.myMessage = '';       
        }
        ref.on('child_added', function(snapshot) {
            $scope.message.push(snapshot.val());          
        });
    });