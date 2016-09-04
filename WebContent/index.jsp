<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="myApp">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script>
<script src="js/user_controller.js"></script>
<script src="js/user_service.js"></script>

<div ng-controller="UserController as ctrl">
			     
			     <form ng-submit="submit()" name="addForm">
			     <input type="hidden" ng-model="ctrl.loan.id" />
			     <label >Name</label>
			     <input type="text" ng-model="ctrl.loan.loanName" placeholder="Enter your name" />
			     <label >Amount</label>
			     <input type="text" ng-model="ctrl.loan.loanAmount" placeholder="Enter the Amount" />
			     <label >Address</label>
			     <input type="text" ng-model="ctrl.loan.loanAddress" placeholder="Enter the Address" />
			     
			     <input type="submit" value="{{!ctrl.loan.id ? 'Add' : 'Update'}}">
			     
			     <table border="1">
                      <thead>
                          <tr>
                              <th>Loan ID.</th>
                              <th>Name</th>
                              <th>Amount</th>
                              <th>Address</th>
                              <th width="20%"></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr ng-repeat="loan in ctrl.loans">
                              <td><span ng-bind="loan.id"></span></td>
                              <td><span ng-bind="loan.loanName"></span></td>
                              <td><span ng-bind="loan.loanAmount"></span></td>
                              <td><span ng-bind="loan.loanAddress"></span></td>
                              <td><button type="button" ng-click="edit(loan.id)">Edit</button></td>
                              <td><button type="button" ng-click="deleteLoan(loan.id)" >Remove</button></td>
                          </tr>
                      </tbody>
                  </table>
                  </form>

		</div>
</body>
</html>