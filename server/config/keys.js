const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  mongoURI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clouddatabase-fzbzs.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
};
