
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.whoyouare', {
            url: '/whoyouare',
            templateUrl: 'form-profile.html'
        })
        
        // url will be /form/interests
        .state('form.industry', {
            url: '/industry',
            templateUrl: 'form-industry.html'
        })
        
        // url will be /form/payment
        .state('form.service', {
            url: '/service',
            templateUrl: 'form-service.html'
        })

        .state('form.requirements', {
            url: '/requirements',
            templateUrl: 'form-requirements.html'
        })

         .state('form.other', {
            url: '/other',
            templateUrl: 'other.html'
        })

        .state('form.summary', {
            url: '/summary',
            templateUrl: 'summary.html'
        });
       
       
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/whoyouare');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {}
    $scope.formDetail = {}
    
    
    
    // function to process the form
    $scope.processForm = function() {
        alert('Thank you for your order!');  
    };
    
});

