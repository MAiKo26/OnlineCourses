(function () {
  "use strict";

  angular.module("public").controller("SignupController", SignupController);

  SignupController.$inject = ["menuItems", "GlobalUserService"];
  function SignupController(menuItems, GlobalUserService) {
    var signupCtrl = this;
    signupCtrl.menuItems = menuItems;
    console.log(signupCtrl.menuItems);

    signupCtrl.submit = function () {
      var itemFound = false;
      signupCtrl.itemNotFound = false;
      for (var categoryKey in menuItems) {
        var category = menuItems[categoryKey];
        var menuitem = category.menu_items;
        console.log("1");
        for (var i = 0; i < menuitem.length; i++) {
          var Item = menuitem[i];
          console.log("2");
          console.log(Item.short_name);
          if (
            Item.short_name.toLowerCase() ===
            signupCtrl.user.favoriteDish.toLowerCase()
          ) {
            itemFound = true;
            signupCtrl.user.favoriteDishFull = Item;
            break;
          }
          if (itemFound) {
            break;
          }
        }
        if (itemFound) {
          break;
        }
      }

      if (itemFound) {
        signupCtrl.completed = true;
        GlobalUserService.user = signupCtrl.user;
        console.log(signupCtrl.user);
      } else {
        signupCtrl.itemNotFound = true;
      }
    };
  }
})();
