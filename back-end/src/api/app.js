const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { error } = require('./middlewares/Error');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { loginRouter } = require('./routes');
const { registerRouter } = require('./routes');
const { productsRouter } = require('./routes');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoute');

app.use(express.static(path.join(__dirname, '../..', 'src')));

app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/customer/products', productsRouter);
app.use('/customer/order', orderRouter);
app.use('/users', userRouter);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(error);
module.exports = app;
