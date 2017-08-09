import {GoLinks} from './go-links';

let goLinks = new GoLinks();

const goLinkRoutes = (app) => {
	app.get('/api/v1/go-links', (req, res) => {
		res.set('Content-Type', 'application/javascript');
		res.send({links: goLinks.toArray()});
	});
	app.get('/api/v1/go-links/:id', (req, res) => {
		const {id} = req.params;
		res.set('Content-Type', 'application/javascript');
		const link = goLinks.get(id);
		if (link !== undefined) {
			return res.send({name: id, link});
		}
		return res.status(404).send({error: `Could not find link for '${id}'`});
	});
	app.post('/api/v1/go-links', (req, res) => {
		const {name, url} = req.body;
		const id = goLinks.set(name, url);
		res.set('Content-Type', 'application/javascript');
		return res.send({message: `Saved '${id}'`, id, link: goLinks.get(id)});
	});
	app.put('/api/v1/go-links/:id', (req, res) => {
		const {id} = req.params;
		const {url} = req.body;
		const link = goLinks.get(id);
		if (link !== undefined) {
			goLinks.set(id, url);
			res.set('Content-Type', 'application/javascript');
			return res.send({message: `Saved '${id}'`, id, link: goLinks.get(id)});
		}
		return res.status(404).send({error: `Could not find link for '${id}'`});
	});
	app.delete('/api/v1/go-links/:id', (req, res) => {
		const {id} = req.params;
		const link = goLinks.get(id);
		if (link !== undefined) {
			goLinks.delete(id);
			res.set('Content-Type', 'application/javascript');
			return res.send({message: `Deleted '${id}'`});
		}
		return res.status(404).send({error: `Could not find link for '${id}'`});
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
