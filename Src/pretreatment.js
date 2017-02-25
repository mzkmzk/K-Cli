var child_process = require('child_process'),
    Pretreatment = function(){}

Pretreatment.prototype.copy = function(src_path){
    var child,
        path = require('path');

    child = child_process.spawn('cp', ['-r', src_path  ,'./']);

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