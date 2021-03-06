const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const passport = require('passport');

const { sequelize } = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.use('/', routes);

require('./passport');
app.use(passport.initialize());
app.use(passport.session());

sequelize.sync({ force: false }).then(() => {
    app.listen(5000, () => console.log('Now listening on Port 5000'));
});
