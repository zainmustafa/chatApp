/**
 * Created by Zain-Mustafa on 6/4/2015.
 */


// Angular Working

//Module wokring
angular.module('app.chat',[])
    .controller("ChatController", function(userDetails, $firebaseArray, $timeout) {
    var ref = new Firebase("https://chatonthego.firebaseio.com");
    var user = userDetails.getUser();
    var that = this;
    this.userName = {};
    this.message = [];
    this.users = [];
    that.chatWalyKaNaam = '';
        var receiver = {};
        var num1 = 0, num2 = 0, number = 0;
        that.msgNode = function(index){
            num1 = +user.facebook.cachedUserProfile.id;
            num2 = +that.users[index].uid;
            receiver = that.users[index];
            that.chatWalyKaNaam = that.users[index].name;
            number = num1 + num2;
            ref.child('messages').child(number).on('child_added', function(snapshot){
                $timeout(function(){
                    that.message.push(snapshot.val());
                }, 0)
            });
        };
            ref.child('users').on('child_added', function(snapshot){
                $timeout(function(){
                    that.users.push(snapshot.val());
                }, 0);
            });
    this.call = function (event) {
        if (event.keyCode == 13) {
            num1 = +user.facebook.cachedUserProfile.id;
            num2 = +receiver.uid;
            number = num1 + num2;

            ref.child('messages').child(number).push({
                message     :   that.myMessage,
                sendFrom    :   user.facebook.displayName,
                senderUid   :   +user.facebook.cachedUserProfile.id,
                sendTo      :   receiver.name,
                receiverUid :   +receiver.uid
            });
            this.myMessage = '';
        }
    };
        ref.child('users').child(user.facebook.cachedUserProfile.id).update({
            name    :   user.facebook.displayName,
            imgUrl  :   user.facebook.profileImageURL,
            uid     :   user.facebook.cachedUserProfile.id
        });
});