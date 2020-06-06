const app = require('./app');

require('dotenv').config();

const Port = process.env.PORT | 3000;

app.listen(Port, () => {
  console.log(`server is listening at port ${Port}`);
});
