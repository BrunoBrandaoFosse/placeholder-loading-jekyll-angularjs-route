app.controller("UsersCtrl", function ($http, $timeout) {
  var vm = this;
  $http.get("https://jsonplaceholder.typicode.com/users").then(function (response) {
    $timeout(() => vm.users = response.data, 2000);
  });
});

app.controller("UserCtrl", function ($http, $timeout, $routeParams) {
  var vm = this;
  $http.get("https://jsonplaceholder.typicode.com/users/" + $routeParams.id).then(function (response) {
    $timeout(() => vm.user = response.data, 2000);
  });
});
