(function () {
    'use strict';
    angular.module('georgeApp')
    .controller("aboutCtrl", ['$scope', skillSet]);

    function aboutCtrl() {        
        var vm = this; 

        //global settings
        vm.skillHtml = '10'; 
    }
    function skillSet($scope){
         $scope.skillsJson = [ 
                    {
                        "name":"HTML5",
                        "current": 90,
                        "color":"#E44D26",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"http://img04.deviantart.net/7cad/i/2011/018/5/b/psd_of_html5_logo_by_tobrother-d37hlwk.png"
                    },
                    {
                        "name":"CSS3",
                        "current": 90,
                        "color":"#2262AF",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"http://www.virtualbank.co.zw/home/img/temp/css3.png"
                    },
                    {
                        "name":"SASS",
                        "current": 85,
                        "color":"#CC6699",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png"
                    },
                    {
                        "name":"Foundation",
                        "current": 80,
                        "color":"#4F91BF",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"http://www.jenkramer.org/img/yeti.png"
                    },
                    {
                        "name":"Bootstrap",
                        "current": 85,
                        "color":"#553C7B",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"http://www.idevlive.com/media/images/services/thumb/bootstrap-logo.png"
                    },
                    {
                        "name":"jQUery",
                        "current": 85,
                        "color":"#0867AB",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"http://ausago.com/wp-content/uploads/2011/03/jquery-logo-320x320.png"
                    },
                    {
                        "name":"AngularJs",
                        "current": 80,
                        "color":"#DD1B16",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"https://angularjs.org/img/ng-logo.png"
                    },
                    {
                        "name":"Ionic",
                        "current": 65,
                        "color":"#4E8EF7",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"http://www.c10nect.com/Ionic_Logo.png"
                    },
                    {
                        "name":"gulp",
                        "current": 70,
                        "color":"#EB4A4B",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"
                    },
                    {
                        "name":"GIT",
                        "current": 70,
                        "color":"#F34F29",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"https://git-scm.com/images/logos/logomark-orange@2x.png"
                    },
                    {
                        "name":"EmberJs",
                        "current": 60,
                        "color":"#E0492F",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200"
                    },
                    {
                        "name":"HandleBarJs",
                        "current": 65,
                        "color":"#423426",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"http://www.46cl.fr/content/etude-de-cas/icons/icon-handlebars.png"
                    },
                    {
                        "name":"PHP/MySql",
                        "current": 60,
                        "color":"#6B7EB7",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"http://www.scottrobertswebdesign.com/wp-content/uploads/2014/07/php-mysql-logo.png"
                    }
        ]
    }
})();