var winston = require('winston');

var api_logger = function(options){
	var logger = options.logger || new (winston.Logger)({
	    transports: [
    	  new (winston.transports.Console)()
    	]
  	});

	return function (req, res, next) {
		var req.startTime = new Date();
		var end = res.end;

		red.end(function(chunk, encoding) {
			var timeTaken = (new Date())- startTime;

			logger.info("%s %s %s %s", new Date().toString(), req.method, req.url, res.statusCode);

			res.end = end;
			res.end(chunk, encoding);
		});
	}
}

module.exports = api_logger;