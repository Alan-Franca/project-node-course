//const { Person } = require("./person.js");
const dotenv = require('dotenv');

const connectDB = require('./src/database/connect.js');

dotenv.config();

connectDB();

//require('./modules/path.js');
//require('./modules/fs.js');
//require('./modules/http.js');

require('./modules/express.js');

//const person = new Person('Alan');