'use strict';

var $ = require('jquery');

function renderTask(task) {
    var template = require('../../templates/task.dust');

    var compiledHtml = null;
    template(task, function (err, html) {
        compiledHtml = html;
    });

    return compiledHtml;
}

function renderTasks(tasks) {
    var elementArray = $.map(tasks, renderTask);

    $("#task-list")
        .empty()
        .append(elementArray);
}

function renderNew() {
    var $taskList = $("#task-list");
    $taskList.prepend(renderTask({}));
}

module.exports = {
    renderTasks: renderTasks,
    renderNew: renderNew
};