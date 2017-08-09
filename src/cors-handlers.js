// Allow CORS access

const corsHandlers = (app) => {
	app.options('/*', function(req, res) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
		res.sendStatus(200);
	});
	['get', 'post', 'put', 'patch', 'delete'].forEach( method =>
		app[method]('/*', function(req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			next();
		})
	);
};

export {corsHandlers};
