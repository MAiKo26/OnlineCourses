(function (){
'use strict' ;

angular.module('DietCalculator',[])

.controller('DietCalculatorController', DCC);

    DCC.$inject = ['$scope','$filter'] ;
    function DCC($scope,$filter){

    $scope.lunch = "" ;
    
    $scope.displayResult = function () {
        if ($scope.lunch === "")
            $scope.LunchResult = "Please enter Data First"
        else
            $scope.LunchResult = calculatLunchForString($scope.lunch) ;
    };
    
     function calculatLunchForString(string){
        var totalLunchValue = 0 ;
        for (var i=0; i < string.length;i++){
            if (string.charAt(i) === ",")
            totalLunchValue++ ;
        } 


        if (totalLunchValue > 2)
            return $filter('uppercase')("Too much!") ;
        else
            return "Enjoy!"; 

        

    } 

};



})();

