'use strict';

angular.module('chilidApp')
        .component('addComment', {
          templateUrl: 'views/addComment.html',
          bindings: {
            onAddComment: '&'
          },
          controller: function(){
            this.text = "";
            this.author = "Donna Paulsen";
          }
        });
