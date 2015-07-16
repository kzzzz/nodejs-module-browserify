'use strict';

var $ = require('jquery');
var taskTemplate = '<li class="task">\n<input class="complete" type="checkbox" /> \n    <input class="description" type="text" placeholder="Enter task description..." /> \n    <button class="delete-button">Delete</button>\n</li>';

function _renderTask(task) {
    var $task = $(taskTemplate);
    if (task.complete) {
        $task.find(".complete").attr("checked", "checked");
    }
    $task.find(".description").val(task.description);
    return $task;
}

exports.renderTasks = function (tasks) {
    var elementArray = $.map(tasks, _renderTask);

    $("#task-list")
        .empty()
        .append(elementArray);
};

exports.renderNew = function () {
    var $taskList = $("#task-list");
    $taskList.prepend(_renderTask({}));
};
