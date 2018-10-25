const express = require('express');
const debug = require('debug')('app');
const path = require('path');

const app = express();
const admin = require('./src/routes/adminRoutes');


app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');


app.use('/admin', admin);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, ()=>{
  debug('listening on port 3000');
})
