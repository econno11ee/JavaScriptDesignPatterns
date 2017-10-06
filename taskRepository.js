//All $http code pushed out to repository built using the module pattern

(function(){
    var app = angular.module('taskManager');

    var taskRepo = function ($http) {

        var db = {};
        var get = function(id) {
            console.log('Getting Task' + id);
            return {
                name: "task" + (id + 1)
            }
        };
        var save = function(task) {
            called++;
            console.log("Saving" + task.name + "to the db.  TaskRepository has been called" + called + "times.")
        }

        return {
            get: get,
            save: save
        }
}

app.service ('TaskRepository', taskRepo)
})();
