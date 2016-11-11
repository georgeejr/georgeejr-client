(function () {
    'use strict';
    angular.module('georgeApp')
    .controller("aboutCtrl", ['$scope', aboutCtrl]);

    function aboutCtrl($scope) {        
        var vm = this; 
        vm.aboutMe = "My name is George Elluranggo Jr, I'm a Front End Web/App Developer from Manila, Philippines. My job is my biggest passion (this is really cool, don't you think?). <br> I love design and develop web sites because I think that this is a beatiful way to express creativity and communicate with people all over the world. I love to write beatiful code because this is fu****g fun! Every day I try to discover new ways of development and new ways to improve my skills: coding is my life!";
        skillSet($scope);
 
    }
    function skillSet($scope){
         $scope.skillsJson = [ 
                    {
                        "name":"HTML5",
                        "current": 90,
                        "color":"#E44D26",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/html5.png"
                    },
                    {
                        "name":"CSS3",
                        "current": 90,
                        "color":"#2262AF",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/css3.png"
                    },
                    {
                        "name":"SASS",
                        "current": 85,
                        "color":"#CC6699",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/sass.png"
                    },
                    {
                        "name":"Foundation",
                        "current": 80,
                        "color":"#4F91BF",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/zurb.png"
                    },
                    {
                        "name":"Bootstrap",
                        "current": 85,
                        "color":"#553C7B",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/bootstrap.png"
                    },
                    {
                        "name":"jQUery",
                        "current": 85,
                        "color":"#0867AB",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/jquery.png"
                    },
                    {
                        "name":"AngularJs",
                        "current": 80,
                        "color":"#DD1B16",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/angular.png"
                    },
                    {
                        "name":"Ionic",
                        "current": 65,
                        "color":"#4E8EF7",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/ionic.png"
                    },
                    {
                        "name":"gulp",
                        "current": 70,
                        "color":"#EB4A4B",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/gulp.png"
                    },
                    {
                        "name":"GIT",
                        "current": 70,
                        "color":"#F34F29",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/git.png"
                    },
                    {
                        "name":"EmberJs",
                        "current": 60,
                        "color":"#E0492F",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/ember.png"
                    },
                    {
                        "name":"HandleBarJs",
                        "current": 65,
                        "color":"#423426",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/handlebar.png"
                    },
                    {
                        "name":"PHP/MySql",
                        "current": 60,
                        "color":"#6B7EB7",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/php-mysql.png"
                    },
                    {
                        "name":"Wordpress",
                        "current": 75,
                        "color":"#333333",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/wp.png"
                    },
                    {
                        "name":"AEM",
                        "current": 70,
                        "color":"#FB7800",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/aem.png"
                    }
        ]
    }
})();