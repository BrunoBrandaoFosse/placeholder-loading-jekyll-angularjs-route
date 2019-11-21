app.controller("HomeCtrl", function ($http, $timeout) {
  var vm = this;
  $http.get("https://jsonplaceholder.typicode.com/posts").then(function (response) {
    $timeout(() => vm.posts = response.data, 2000);
  });
});
