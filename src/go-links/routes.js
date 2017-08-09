import {GoLinks} from './go-links';

let goLinks = new GoLinks();

const goLinkRoutes = (app) => {
	app.get('/api/v1/go-links', (req, res) => {
		res.set('Content-Type', 'application/javascript');
		res.send(JSON.stringify({goLinks}));
	});
	app.get('/api/v1/go-links/:id', (req, res) => {
		res.set('Content-Type', 'application/javascript');
		res.send(JSON.stringify({goLinks}));
	});
	app.post('/api/v1/go-links', (req, res) => {
		const {name, url} = req.body;
		goLinks.set(name, url);
		res.set('Content-Type', 'application/javascript');
		res.send(JSON.stringify({goLinks}));
	});
	app.put('/api/v1/go-links/:id', (req, res) => {
		const {id} = req.params;
		const {url} = req.body;
		goLinks.set(id, url);
		res.set('Content-Type', 'application/javascript');
		res.send(JSON.stringify({goLinks}));
	});
	app.delete('/api/v1/go-links/:id', (req, res) => {
		const {id} = req.params;
		goLinks.delete(id);
		res.set('Content-Type', 'application/javascript');
		res.send(JSON.stringify({goLinks}));
	});

	// Redirector:
	app.get('/go/:id', (req, res) => {
		const {id} = req.params;
		const url = goLinks.get(id);
		if (!url) {
			return res.sendStatus(404);
		}
		res.redirect(url);
	});
};

export {goLinkRoutes};
