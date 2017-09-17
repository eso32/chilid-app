'use strict';

angular.module('chilidApp')
          .component('profile', {
            templateUrl: 'views/profile.html',
            controller: function (profilesService, $location) {
              var vm = this;

              function addfollowers(){
                this.person.social.followers += 1;
              }
              function addlike(){
                this.person.social.likes += 1;
              }
              function addcomment(author, text){
                var d = new Date(),
                    avatar = author.toLowerCase().split(" ").join("");
                if(text !== ""){
                  this.person.comments.push({
                    author: author,
                    avatar: 'images/' + avatar + '.jpg',
                    creationDate: d.getTime().toString(),
                    text: text
                  });
                }
              }

              this.addlike = addlike;
              this.addfollowers = addfollowers;
              this.addcomment = addcomment;
              this.location = $location.absUrl();
              profilesService.getData().then(function(response){
                vm.person = response.data[0];
              });
            }
        });
