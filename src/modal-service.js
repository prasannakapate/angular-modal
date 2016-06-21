(function() {
  'use strict';

  angular
    .module('angular-modal')
    .factory('ModalService', ModalService);

  ModalService.$inject = ['$modal'];

  function ModalService($modal) {
    var service = {
      myModal: myModal
    };
    return service;

    ////////////////

    function myModal() {
      var modalInstance = $modal.open({
        templateUrl: './src/myModalContent.html', // loads the template
        backdrop: true, // setting backdrop allows us to close the modal window on clicking outside the modal window
        windowClass: 'modal', // windowClass - additional CSS class(es) to be added to a modal window template
        controller: 'ModalDemoCtrl',
        controllerAs: 'vm'
      }); //end of modal.open

      modalInstance.result.then(function() {}, function() {
        console.log('Modal dismissed');
      });
    }
  }
})();
