(function (){
'use strict' ;

angular.module('CheckList',[])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('CheckListService',CheckListService) ;



    ToBuyController.$inject = ['CheckListService'] ;
    function ToBuyController(CheckListService){

        this.items = CheckListService.getItems();

        this.transferItem = function(itemIndex){
            CheckListService.transferItem(itemIndex) ;
            
        };

        this.checking = function() {
            if (this.items.length == 0)
                return true ;
            else
                return false ;
    
            }

    };

    AlreadyBoughtController.$inject = ['CheckListService'] ;
    function AlreadyBoughtController(CheckListService){

        this.items = CheckListService.getItems2() ;

        this.checking = function() {
        if (this.items.length == 0)
            return true ;
        else
            return false ;

        }

    };

    function CheckListService() {

        var items = [{name: "Cookies",quantity: 1000},{name: "Xbox",quantity: 1},{name: "One Piece is Real",quantity: 9000},{name: "Rice",quantity: 6},{name: "TV Screen",quantity: 2}];
        var items2 = [] ;


        this.getItems = function() {
        return items ; };

        
        this.transferItem = function(itemIndex){
        items2.push(items[itemIndex]) ;
        items.splice(itemIndex,1); };

        
        this.getItems2 = function() {
            return items2 ;
        };
   
 
    };




})();

