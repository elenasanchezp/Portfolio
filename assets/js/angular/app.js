'use strict';
var App = angular.module('percentageApp', []);

App.controller('percentageController',
  function() {
    for (var i = 0; i < 60; i++) {
      this.ammount = i;
    }
  });

App.directive('skillsChart', function() {

  return {
    restrict: 'E',
    replace: true,
    scope: {
      value: '@', 
      text: '@', 
      skill: '@'
    },
    template: ' <div>\
                  <p>{{text}}</p>\
                  <div class="c100 p{{value}} big blue">\
                    <span class="circle cicle_{{skill}}">{{value}}%</span>\
                    <div class="slice">\
                      <div class="bar"></div>\
                      <div class="fill"></div>\
                    </div>\
                  </div>\
                </div>'
   };
});

