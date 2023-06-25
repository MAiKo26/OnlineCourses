(function (){
	'use strict';
	
	angular.module('NarrowDownApp', [])
	.controller('NarrowDownController', NarrowDownController )
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);
	
 
	
	NarrowDownController .$inject = ['MenuSearchService'];
	function NarrowDownController (MenuSearchService){
		var X = this;
		X.searchTerm = "";
		
		X.getList = function() {
      if (X.searchTerm === "") {
        X.found = [];
        return;
      }
      var promise = MenuSearchService.getMatchedMenuItems(X.searchTerm);
      promise.then(function(response) { 
        X.found = response;
      })
      .catch(function(error) {
        console.log("Something went wrong", error);
      });
    };
		
		X.removeItem = function (itemIndex) {
			console.log("'Your Removed this: ", this);
			X.found.splice(itemIndex, 1);
  	};
		
	};
	
	MenuSearchService.$inject = ['$http']
	function MenuSearchService($http) {
		var service = this;
		
		service.getMatchedMenuItems = function(searchTerm) {
			return $http({
				method:'GET',
				url:("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
			}).then(function (result){
				//console.log(result.data);
				//console.log(result.data["A"].menu_items[0].description.toLowerCase().indexOf("chicken") !== -1 );
				var foundItems = [];
                for (var key in result.data)
				for(var i=0; i<result.data[key].menu_items.length; i++) {

					if (result.data[key].menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
						foundItems.push(result.data[key].menu_items[i]);
					}

				}
				console.log(foundItems);
			return foundItems;
	
			});
			
		}
		
	}
	

    function FoundItemsDirective() {
        var ddo = {
          templateUrl: 'foundItems.html',
          scope: {
            found: '<',
            onRemove: '&'
          },
          controller: FoundItemsDirectiveController,
          controllerAs: 'list',
          bindToController: true
        };
        return ddo;
      }
        
          function FoundItemsDirectiveController() {
        var list = this;
        console.log(list.found);
        list.isEmpty = function() {
          return list.found != undefined && list.found.length === 0;
        }
      }

	
})();