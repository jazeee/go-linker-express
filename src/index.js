import express from 'express';
import bodyParser from 'body-parser';
import {goLinkRoutes} from './go-links';
import {corsHandlers} from './cors-handlers';

const app = express();
app.use(bodyParser.json());

const config = {
	port: 42666,
};

corsHandlers(app);

app.get('/', (req, res) => {
	res.send('Hello world');
});

goLinkRoutes(app);

app.listen(config.port, () => {
	console.info(`Server is running on ${config.port}`);
});
