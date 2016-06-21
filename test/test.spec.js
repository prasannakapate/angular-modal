describe('Angular $modal ', function() {
  var elem;
  var $scope;
  var $controller;
  var modalSpy;
  var $modal;
  var modalInstance;

  beforeEach(module('angular-modal'));


  beforeEach(inject(
    function(_$rootScope_, _$modal_) {
      $rootScope = _$rootScope_;
      $modal = _$modal_;

     /* modalInstance = {
        result: {
          then: function(confirmCallback, cancelCallback) {
            //Store the callbacks for later when the user clicks on the OK or Cancel button of the dialog
            this.confirmCallBack = confirmCallback;
            this.cancelCallback = cancelCallback;
          }
        },
        close: function(item) {
          //The user clicked OK on the modal dialog, call the stored confirm callback with the selected item
          this.result.confirmCallBack(item);
        },
        dismiss: function(type) {
          //The user clicked cancel on the modal dialog, call the stored cancel callback
          this.result.cancelCallback(type);
        }
      };*/

    }));

  beforeEach(function() {
    modalSpy = sinon.stub($modal, 'open');
  });

  it('should open modal correctly', function() {
    modalSpy.open();
    expect(modalSpy).to.be.called();
  });

});
