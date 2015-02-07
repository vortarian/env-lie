
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

var config = require('config');

// Load all the clean-room app code below here, pass in configuration and no one else has to deal with it
var app = require('./app.js');

app.run(config);
