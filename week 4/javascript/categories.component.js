(function (){
	'use strict';
	
	angular.module('MenuApp')
    .component('categoriesComponent',{
        templateUrl: 'categoriesList.html',
        controller: CategoriesListController,
        bindings: {
            items: '<'
        },

    });

    function CategoriesListController() {
        var $ctrl = this ;
        $ctrl.CategoriesList = function() {
            for (var i = 0 ; i < $ctrl.items.length; i++){
                var name = $ctrl.items[i].name ;
            }

        }

    }

    
})();