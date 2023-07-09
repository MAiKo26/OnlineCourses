(function () {
  "use strict";

  angular.module("public").controller("MyinfoController", MyinfoController);

  MyinfoController.$inject = ["GlobalUserService"];
  function MyinfoController(GlobalUserService) {
    var myinfoCtrl = this;
    myinfoCtrl.exist = Object.keys(GlobalUserService.user).length > 0;
    myinfoCtrl.user = GlobalUserService.user;
    myinfoCtrl.category = myinfoCtrl.user.favoriteDishFull.short_name
      .match(/[A-Za-z]+/g)
      .join("");
    console.log(myinfoCtrl.exist);
    console.log(GlobalUserService.user);
  }
})();
