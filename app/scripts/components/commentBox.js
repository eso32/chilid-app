'use strict';

angular.module('chilidApp')
        .component('commentBox', {
          templateUrl: 'views/commentBox.html',
          bindings: {
            comments: '<',
            commentCount: '<'
          },
          controller: function() {
            function getDays(date){
              var d = new Date(),
                  diffTime = Math.abs(d.getTime() - date),
                  diffDays = diffTime / (1000 * 3600 * 24);
                  if(diffDays < 1) {
                    return "Today";
                  } else {
                    return Math.ceil(diffTime / (1000 * 3600 * 24)) + 'd';
                  }
            }

            this.$onChanges = function (changesObj) {
              console.log('Changed');
              if (changesObj.name) {
                console.log('changed!');
                // var prefix;
                // (changesObj.name.currentValue === 'Pascal') ?
                //   prefix = 'Howdy ' : prefix = 'Hello ';
                // this.name = prefix + this.name;
              }
            };

            this.getDays = getDays;
          }
        });
