(function () {
  "use strict";

  angular.module("public").service("GlobalUserService", GlobalUserService);

  function GlobalUserService() {
    this.user = {};
  }
})();
