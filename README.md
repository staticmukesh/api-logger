api-logger
=========
This package helps you to log HTTP requests in Express Node.js application.


Installation
------------

```sh
npm install api-logger
```

Usage
-----
You can use the module as middleware in the application.

###Example
```javasctipt
var app = require('express')();
var apiLogger = require('api-logger');

app.use(apiLogger());

app.get('/', function(req, res){
	res.send('Hello world');
});

app.listen(3000);
```