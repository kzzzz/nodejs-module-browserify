'use strict';

var $ = require('jquery');
var tasks = require('./tasks');

function registerEventHandlers() {
    $("#new-task-button").on("click", tasks.add);
    $("#delete-all-button").on("click", tasks.clear);
    $("#save-button").on("click", tasks.save);
    $("#cancel-button").on("click", tasks.cancel);
    $("#task-list").on("click", ".delete-button", tasks.remove);
}

function init() {
    registerEventHandlers();
    tasks.render();
}

init();

// browserify src\js\app.js -o -d src\js\app.bundle.js
// watchify src\js\app.js -o src\js\app.bundle.js -d