(function () {
  "use strict";

  angular.module("public").controller("MyinfoController", MyinfoController);

  MyinfoController.$inject = ["menuCategories"];
  function MyinfoController(menuCategories) {
    var $ctrl = this;
    $ctrl.menuCategories = menuCategories;
  }
})();
