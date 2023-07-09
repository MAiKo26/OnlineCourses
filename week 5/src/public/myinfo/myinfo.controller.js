(function () {
  "use strict";

  angular.module("public").controller("MyinfoController", MyinfoController);

  MyinfoController.$inject = ["GlobalUserService"];
  function MyinfoController(GlobalUserService) {
    var myinfoCtrl = this;
    console.log(GlobalUserService.user);

    myinfoCtrl.exist = Object.keys(GlobalUserService.user).length > 0;
    if (myinfoCtrl.exist) {
      myinfoCtrl.user = GlobalUserService.user;
      myinfoCtrl.category = myinfoCtrl.user.favoriteDishFull.short_name
        .match(/[A-Za-z]+/g)
        .join("");
    }
    console.log(myinfoCtrl.exist);
  }
})();
