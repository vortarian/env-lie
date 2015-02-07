// Terrible app code, but it demonstrations the concept
var app = {
   run: function(configuration){ 
	console.log("NODE_ENV:" + process.env.NODE_ENV); 
        console.log(JSON.stringify(configuration.get("config")));
	// console.log("env:" + configuration.get("env"));
	// console.log("local:" + configuration.get("local"));
	// console.log("production:" + configuration.get("production"));
   }
}

module.exports = app;
