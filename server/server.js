const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      app = express(),
      logger = require('morgan'),
      moment = require('moment'),
      cors = require('cors')
      
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(logger('dev'))
app.use(cors());


//Routing
const norrisRouter = require('./controllers/norris')
app.use('/api/norris', norrisRouter)


app.listen(app.get('port'), function() {
  console.log('[' + moment().format('hh:mm:ss') + ']' + ' Express Server listening on port', app.get('port'));
});