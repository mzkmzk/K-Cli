var child_process = require('child_process'),
    Pretreatment = function(){}

Pretreatment.prototype.copy = function(src_path, out_path){
    var child,
        path = require('path'),
        child_string,
        params = ['-r', src_path  ,out_path];

    child = child_process.spawn('cp', params);
    console.log('cp '+ params.join(' '));
    child.stdout.on('data', (data) => {
      console.log('stdout: ',data );
    });

    child.stderr.on('data', (data) => {
      console.log('stdout: ',data );
    });

    child.on('close', (code) => {
      console.log('cp process exited with code '+ code);
    });
}

module.exports = Pretreatment;