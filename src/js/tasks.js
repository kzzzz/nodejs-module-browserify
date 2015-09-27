'use strict';

var $ = require('jquery');
var taskData = require('./data/taskData');
var taskRenderer = require('./renderers/taskRenderer');

var add = function () {
    taskRenderer.renderNew();
};

var remove = function (clickEvent) {
    var taskElement = clickEvent.target;
    $(taskElement).closest(".task").remove();
};

var clear = function () {
    taskData.clear();
    exports.render();
};

var save = function () {
    var tasks = [];
    $("#task-list .task").each(function (index, task) {
        var $task = $(task);
        tasks.push({
            complete: $task.find(".complete").prop('checked'),
            description: $task.find(".description").val()
        });
    });

    taskData.save(tasks);
};

var cancel = function () {
    exports.render();
};

var render = function () {
    taskRenderer.renderTasks(taskData.load());
};

module.exports = {
    add: add,
    remove: remove,
    clear: clear,
    save: save,
    cancel: cancel,
    render: render
};
