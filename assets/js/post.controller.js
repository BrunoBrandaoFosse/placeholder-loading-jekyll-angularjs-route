app.controller("PostCtrl", function ($routeParams, $http, $timeout) {
  var vm = this;
  $timeout(function () {
    $http.get("https://jsonplaceholder.typicode.com/posts/" + $routeParams.id).then(function (response) {
      vm.post = response.data;
      $http.get("https://jsonplaceholder.typicode.com/users/" + vm.post.userId).then(function (response) {
        vm.post.user = response.data;
      });
    });
  }, 2000);
});
