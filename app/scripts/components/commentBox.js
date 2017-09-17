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

            this.getDays = getDays;
          }
        });
