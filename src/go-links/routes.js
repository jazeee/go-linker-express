import {GoLinks} from './go-links';

let goLinks = new GoLinks();

const goLinkRoutes = (app) => {
	app.get('/go', (req, res) => {
		res.set('Content-Type', 'application/javascript');
		res.send(JSON.stringify(goLinks));
	});
	app.get('/go/:id', (req, res) => {
		res.set('Content-Type', 'application/javascript');
		res.send(JSON.stringify(goLinks));
	});
	app.post('/go', (req, res) => {
		const {name, url} = req.body;
		goLinks.set(name, url);
		res.set('Content-Type', 'application/javascript');
		res.send(JSON.stringify(goLinks));
	});
	app.put('/go/:id', (req, res) => {
		const {id} = req.params;
		const {url} = req.body;
		goLinks.set(id, url);
		res.set('Content-Type', 'application/javascript');
		res.send(JSON.stringify(goLinks));
	});
	app.delete('/go/:id', (req, res) => {
		const {id} = req.params;
		goLinks.delete(id);
		res.set('Content-Type', 'application/javascript');
		res.send(JSON.stringify(goLinks));
	});
};

export {goLinkRoutes};
