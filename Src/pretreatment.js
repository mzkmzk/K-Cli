var child_process = require('k-child-process-tips'),
    Pretreatment = function(){}

Pretreatment.prototype.copy = function(src_path, out_path){
    var child,
        path = require('path'),
        child_string,
        params = ['-r', src_path  ,out_path];

    child = child_process.spawn_tips('cp', params);

}

module.exports = Pretreatment;