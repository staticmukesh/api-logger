api-logger
=========
[![npm version](https://badge.fury.io/js/api-logger.svg)](https://badge.fury.io/js/api-logger)

This package helps you to log HTTP requests in Express Node.js application.


Installation
------------

```sh
npm install api-logger
```

Usage
-----
You can initialize the new instance of api-logger with or without passing existing winston logger. And, then can use the module as middleware in the application.


### Using default winston logger

By default, only the Console logging is set on the default api-logger.  

```javascript
var app = require('express')();
var apiLogger = require('api-logger');

app.use(apiLogger());

app.get('/', function(req, res){
	res.send('Hello world');
});

app.listen(3000);
```

### Instantiating your own Logger

If you would prefer to manage the loggers, you can to instantiate them yourself and can pass to api-logger:

```javascript
var app = require('express')();
var winston = require('winston');
var apiLogger = require('api-logger');

var customLogger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'somefile.log' })
    ]
  });

app.use(apiLogger({
	logger : customLogger
}));

app.get('/', function(req, res){
	res.send('Hello world');
});

app.listen(3000);
```

### Sample Output

```javascript
info: 10/11/2016, 3:00:23 PM GET / 200
info: 10/11/2016, 3:00:23 PM GET /favicon.ico 404
info: 10/11/2016, 3:00:35 PM GET /app 404	
```