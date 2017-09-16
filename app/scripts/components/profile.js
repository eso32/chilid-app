'use strict';

angular.module('chilidApp')
          .component('profile', {
            templateUrl: 'views/profile.html',
            controller: function (fetchData, $location) {
              var vm = this;

              function addfollowers(){
                this.person.social.followers += 1;
              }
              function addlike(){
                this.person.social.likes += 1;
              }

              function addcomment(author, text){
                console.log('Pushed');
                var d = new Date(),
                    avatar = author.toLowerCase().split(" ").join("");
                this.person.comments.push({
                  author: author,
                  avatar: 'images/' + avatar + '.jpg',
                  creationDate: d.getTime().toString(),
                  text: text
                });
              }

              this.addlike = addlike;
              this.addfollowers = addfollowers;
              this.addcomment = addcomment;
              this.location = $location.absUrl();
              fetchData.then(function(data) {
                vm.person = data[0];
              });
            }
        });
