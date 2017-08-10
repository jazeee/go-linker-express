import express from 'express';
import bodyParser from 'body-parser';
import {goLinkRoutes} from './go-links';
import {corsHandlers} from './cors-handlers';

const app = express();
app.use(bodyParser.json());
let router = express.Router();

const config = {
	port: 42666,
};

corsHandlers(app);

app.get('/', (req, res) => {
	res.send('Hello world');
});

goLinkRoutes(app, router);
app.use('/api/v1', router);

app.listen(config.port, () => {
	console.info(`Server is running on ${config.port}`);
});
