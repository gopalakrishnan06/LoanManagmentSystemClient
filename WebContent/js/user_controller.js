'use strict';

var myapp=angular.module('myApp',[]);

myapp.controller('UserController',['$scope', 'UserService', function($scope, UserService) {
	
	var self=this;
	self.loan={id:null,loanName:'',loanAmount:'',loanAddress:''};
    self.loans=[];
	
    
	 fetchAllLoan();

	    function fetchAllLoan(){
	    	UserService.fetchAllLoan().then(
	                function(data) {
	                	self.loans = data;
	                },
	                function(errResponse){
	                    console.error('Error while fetching Loans');
	                });   
	    }
	    
	    function addLoan(loan) {
	    	UserService.createLoan(loan).then(
	                function(errResponse){
	                    console.error('Error while creating Loans');
	                });
	    	fetchAllLoan();
	    	reset();
	    }
	    
	    function updateLoan(loan, id){
	        UserService.updateLoan(loan, id)
	            .then(
	            function(errResponse){
	                console.error('Error while updating Loan');
	            }
	        );
	    }
	    
	    $scope.submit=function () {
	            
	            if(self.loan.id===null){
	                addLoan(self.loan);
	            }else{
	                updateLoan(self.loan, self.loan.id);
	            }
	            reset();
	    }
	    
	    function reset(){
	    	angular.copy({},addForm);
	        $scope.addForm.$setPristine(); //reset Form
	    }
	    
	    $scope.deleteLoan=function (id){
	        UserService.deleteLoan(id)
	            .then(
	            fetchAllLoans(),
	            function(errResponse){
	                console.error('Error while deleting Loan');
	            }
	        );
	    }
	    
	    $scope.edit=function(id){
	    	for(var i = 0; i < self.loans.length; i++){
	            if(self.loans[i].id === id) {
	                self.loan = angular.copy(self.loans[i]);
	                break;
	            }
	        }
	    }
	    
}]); 
