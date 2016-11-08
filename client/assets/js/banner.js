(function () {
    'use strict';
    
    angular.module('georgeApp').controller("bannerCtrl", [bannerCtrl]);

    function bannerCtrl() {        
        var vm = this;
        vm.name = 'George Elluranggo Jr';
        vm.title = 'Front End Web/App Engineer';
    }

})();