var winston = require('winston');

var apiLogger = function(options){
	options = options || {};
	var logger = options.logger || new (winston.Logger)({
	    transports: [
    	  new (winston.transports.Console)()
    	]
  	});

	return function (req, res, next) {
		req.startTime = new Date();
		var end = res.end;

		res.end  = function(chunk, encoding) {
			var timeTaken = (new Date())- req.startTime;

			logger.info("%s %s %s %s", new Date().toLocaleString(), req.method, req.url, res.statusCode);

			res.end = end;
			res.end(chunk, encoding);
		};

		next();
	}
}

module.exports = apiLogger;