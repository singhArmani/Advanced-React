import express from 'express';
import config from './config';
import serverRender from './serverRender';

const app = express();

// use express static middleware to serve the public directory.
// Anything we put inside public will be served directly.
app.use(express.static('public'));

// configure express to use ejs as our template language
// views folder will be where ejs will be looking for templates
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // severRender function would return a string represenation of our react app
  const initialContent = serverRender();
  console.log(typeof initialContent);
  res.render('index', { initialContent });
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`);
});
