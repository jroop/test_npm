/* Function for Nodejs to use */
var exec = require('child_process').exec;

//fatal: Not a git repository (or any of the parent directories): .git
//test_npm error: Error: Command failed: fatal: No names found, cannot describe anything.

module.exports = {
  gitVersion: function(callback){
    var e = exec('git describe --long', function(err, stdout, stderr){
      if(err === null){
        var s = stdout.replace('\n','');
        callback(s, stderr);
      }else{
				console.log('test_npm error: ' + err);
      }
    });
  }
};


