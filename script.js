//All $http code pushed out to repository built using the module pattern

(function(){
    var app = angular.module('taskManager', []);
    //factory pattern would pass in the repository as a function of the type of repository called for
    var taskController = function(TaskRepository,Task) {
        console.log(TaskRepository)
        var ctrl = this;
        ctrl.tasks = [];
        for (i=0;i<4;i++) {
            var task = new Task(TaskRepository.get(i))
            ctrl.tasks.push(task);
        } 
    };

    app.controller('taskCtrl', taskController)
}());