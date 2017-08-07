import express from 'express';
import bodyParser from 'body-parser';
import goLinkRoutes from './go-links';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const config = {
	port: 42666,
}

app.get('/', (req, res) => {
	res.send('Hello world');
});

goLinkRoutes(app);

app.listen(config.port, () => {
  console.log(`Server is running on ${config.port}`);
});
