

angular.module('todomvc')


.factory('prmService', function ($q, $timeout) {

  return {

    /**
     * Checks if proposed todo title contains keywords that warrants
     * a prompt from user to confirm they are not breaching privacy policy
     */
    isPrivacyConfirmNeeded: function(proposedTodoTitle) {
      var deferred = $q.defer();
      if (proposedTodoTitle.toLowerCase().indexOf('prism')>0) {
        var delay = Math.floor(Math.random()*900+100);
        $timeout(function() {
          deferred.resolve(true);
        }, delay);
      }
      else {
        deferred.resolve(false);
      }
      return deferred.promise;
    }
  }

});
