import {GoLinks} from './go-links';

let goLinks = new GoLinks();

const goLinkRoutes = (app, router) => {
	router.route('/go-links')
		.all((req, res, next) => {
			res.set('Content-Type', 'application/javascript');
			next();
		})
		.get((req, res) => {
			res.send({links: goLinks.toArray()});
		})
		.post((req, res) => {
			const {name, url} = req.body;
			const id = goLinks.set(name, url);
			return res.send({message: `Saved '${id}'`, id, link: goLinks.get(id)});
		});

	router.route('/go-links/:id')
		.all((req, res, next) => {
			res.set('Content-Type', 'application/javascript');
			next();
		})
		.get((req, res) => {
			const {id} = req.params;
			const link = goLinks.get(id);
			if (link !== undefined) {
				return res.send({name: id, link});
			}
			return res.status(404).send({error: `Could not find link for '${id}'`});
		})
		.put((req, res) => {
			const {id} = req.params;
			const {url} = req.body;
			const link = goLinks.get(id);
			if (link !== undefined) {
				goLinks.set(id, url);
				return res.send({message: `Saved '${id}'`, id, link: goLinks.get(id)});
			}
			return res.status(404).send({error: `Could not find link for '${id}'`});
		})
		.delete((req, res) => {
			const {id} = req.params;
			const link = goLinks.get(id);
			if (link !== undefined) {
				goLinks.delete(id);
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
