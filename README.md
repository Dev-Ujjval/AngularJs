# Technology Used

* [AngularJS](https://angularjs.org/) - HTML based frontend framework
* [node.js](https://nodejs.org/en/) - Javascript based framework for providing

## Following Elements are Used in AngularJs

### .html File contain element
    1] ng-app
        - The ng-app Directive in AngularJS is used to define the root element of an AngularJS application. This directive automatically initializes the AngularJS application on page load. It can be used to load various modules in AngularJS Application.
    
    2] ng-controller
        - The ng-controller directive adds a controller to your application. In the controller you can write code, and make functions and variables, which will be parts of an object, available inside the current HTML element. In AngularJS this object is called a scope.
    
    3] {{}}
        - Two way binding expression.
    
    4] ng-src
        - The ng-src directive should be used instead of src if you have AngularJS code inside the src value.
        
    5] ng-model
        - AngularJS | ng-model Directive. ngModel is a directive which binds input, select and textarea, and stores the required user value in a variable and we can use that variable whenever we require that value. It also is used during validations in a form. We can use ngModel with: input.
        
    6] ng-click
        - ng-click. In AngularJS, the ng-click directive allows you to specify custom behavior when an element is clicked. In the first example, when the user clicks the button, the toggleImage() method in the controller referenced by the vm controller as alias is executed.
    
    7] ng-submit
        - The ng-submit directive specifies a function to run when the form is submitted. If the form does not have an action ng-submit will prevent the form from being submitted.
    
    8] ng-repeat
        - The ng-repeat directive repeats a set of HTML, a given number of times. The set of HTML will be repeated once per item in a collection. - If you have an collection of objects, the ng-repeat directive is perfect for making a HTML table, displaying one table row for each object, and one table data for each object property.
    
    9] Filters
        ----------------------------------------------------------------
        Name                                          
        ----------------------------------------------------------------
        currency    {{amount | currency:"USD$"}}      
        date        {{startDate | date:'short'}}      
        filter      repo in repos | filter:searchTerm       
        json        {{ reppo | json }}                
        limitTo     repo in repos | limitTo:10        
        case        {{ user.name | uppercase }}             
        number      {{ stars | number }}                    
        orderBy     repo in repos | filter:searchTerm | orderBy:'name'
        ----------------------------------------------------------------
    
    10] ng-show | ng-hide
        - show and hide block based on boolean condition.

    11] ng-include
        - Angular provides the function to include the functionality from other AngularJS files by using the ng-include directive. The primary purpose of the "ng-include directive" is used to fetch, compile and include an external HTML fragment in the main AngularJS application
        
### .js File contain element
    1] module
        - In Angular, a module is a mechanism to group components, directives, pipes and services that are related, in such a way that can be combined with other modules to create an application.
        
    2] controller
        - The controller in AngularJS is a JavaScript function that maintains the application data and behavior using $scope object. You can attach properties and methods to the $scope object inside a controller function, which in turn will add/update the data and attach behaviours to HTML elements.
    
    3] factory [work for create services]
        - A factory is a simple function which allows us to add some logic to a created object and return the created object. The factory is also used to create/return a function in the form of reusable code which can be used anywhere within the application.
    
    4] $scope
        - $scope in AngularJS is a built-in object which basically binds the "controller" and the "view". One can define member variables in the scope within the controller which can then be accessed by the view.
        
    5] $http 
        - $http is an AngularJS service for reading data from remote servers. The $http is a core AngularJS service that is used to communicate with the remote HTTP service via browser's XMLHttpRequest object or via JSONP
