
// Annoying deployment oriented stuff happens here
var env_map = {
	"prod": "production", 
	"dev": "develop", 
	"stage": "staging", 
	"acc": "acceptance"
}

var env = process.env.NODE_ENV;
if(process.env.NODE_ENV in env_map) {
  env = env_map[process.env.NODE_ENV];
  console.log("Remapping process.env.NODE_ENV from [" + process.env.NODE_ENV + "] to [" + env + "]");
}
process.env.NODE_ENV = env;

var cluster = require('cluster');

// Load all the clean-room app code below here, pass in configuration and no one else has to deal with it
var appWorkers = {};

function spawnAppWorker() {
  var worker = cluster.fork({type: 'worker'});
  appWorkers[worker.process.pid] = worker;
  return worker;
}

if (cluster.isMaster) {
  var appProcs = 1;
  spawnAppWorker();
  cluster.on('exit', function (worker, code) {
  process.exit();
  });
} else if (process.env.type === 'worker') {
  var config = require('config');
  console.log('Starting app worker..');
  require('./app').run(config);
  process.exit();
}

