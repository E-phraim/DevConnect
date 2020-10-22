const mongoose = require("mongoose");
const config = require("config");
// const db = config.get("mongoURI");


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/devconnect');
    console.log('OFFLINE_MODE::MongoDB Connected')
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// const connectDB = async () => {
//   try {
//     await mongoose.connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     });
//     console.log("ONLINE_MODE::MongoDB Connected...");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

module.exports = connectDB;
