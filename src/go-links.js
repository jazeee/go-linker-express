import assert from 'assert';

module.exports = (app) => {
	app.get('/go', (req, res) => {
		res.set('Content-Type', 'application/javascript');
		res.send('test');
	});
}
