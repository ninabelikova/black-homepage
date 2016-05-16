var app = angular.module('app', [])

app.controller('PotatoControl', function ($scope, $timeout) {
  $scope.oui = false
  $scope.nan = false
  $scope.potatoFondness = false
  $scope.potatoHatred = false
  $scope.contact_text = 'contact'

  $scope.yesTada = function () {
    $scope.oui = true
    $scope.potatoFondness = true
    $scope.potatoHatred = false
    $timeout($scope.cancelYesTada, 1000)
  }

  $scope.noTada = function () {
    $scope.nan = true
    $scope.potatoHatred = true
    $scope.potatoFondness = false
    $timeout($scope.cancelNoTada, 1000)
  }

  $scope.cancelYesTada = function () {
    $scope.oui = false
  }

  $scope.cancelNoTada = function () {
    $scope.nan = false
  }

  $scope.change_contact = function () {
    $scope.contact_text = '=>'
  }
})
