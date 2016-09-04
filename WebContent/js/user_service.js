'use strict';

angular.module('myApp').factory('UserService', ['$http', '$q', function($http, $q){

	var REST_SERVICE_URI = 'http://localhost:8080/Loan/';

    var factory = {
        fetchAllLoan: fetchAllLoan,
        createLoan: createLoan,
        deleteLoan: deleteLoan
    };

    return factory;

    function fetchAllLoan() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI).then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while fetching Loans');
                    deferred.reject(errResponse);
                }
            );
            return deferred.promise;
    }

    function createLoan(loan) {
    	 var deferred = $q.defer();
         $http.post(REST_SERVICE_URI, loan)
             .then(
             function (response) {
                 deferred.resolve(response.data);
             },
             function(errResponse){
                 console.error('Error while creating Loan');
                 deferred.reject(errResponse);
             }
         );
         return deferred.promise;
    }
    
    function updateLoan(loan, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, loan)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating Loan');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function deleteLoan(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting Loan');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
}]);
