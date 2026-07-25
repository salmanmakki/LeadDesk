const app = require('../server/app');
const connectDB = require('../server/config/db');

let initialized = false;

module.exports = async (req, res) => {
  if (!initialized) {
    await connectDB();
    initialized = true;
  }
  return app(req, res);
};
