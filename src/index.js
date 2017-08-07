import express from 'express';
import bodyParser from 'body-parser';
import {goLinkRoutes} from './go-links';
import {optionsHandler} from './options';

const app = express();
app.use(bodyParser.json());

const config = {
	port: 42666,
};

optionsHandler(app);

app.get('/', (req, res) => {
	res.send('Hello world');
});

goLinkRoutes(app);

app.listen(config.port, () => {
	console.info(`Server is running on ${config.port}`);
});
