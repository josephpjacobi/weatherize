const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  GOOGLE_MAPS: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  DARK_SKY: process.env.REACT_APP_DARK_SKY_SECRET_KEY
};