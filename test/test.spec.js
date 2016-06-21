describe('Angular $modal ', function() {
    var elem;
    var $scope;
    var $controller;

    beforeEach(module('angular-modal'));
     beforeEach(function() {

    module(function($provide) {
      $provide.value('$modal', $modal);
    });
  });


    it('should create directive correctly', function() {
        $scope.$digest();
        expect(elem.length).to.equal(1);
    });
});
