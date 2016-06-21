(function() {
  'use strict';

  angular
    .module('angular-modal')
    .controller('ModalDemoCtrl', ModalDemoCtrl);

  ModalDemoCtrl.$inject = ['$scope', '$modal', '$log', 'ModalService'];

  function ModalDemoCtrl($scope, $modal, $log, ModalService) {
    var vm = this;

    vm.open = function() {
        ModalService.myModal();
    };

  }
})();
