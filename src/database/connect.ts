import mysql from "mysql";
const connection = mysql.createConnection({
  port: process.env.PORT ? parseInt(process.env.PORT) : 3306,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

const connectDB = () => {
  // connection.connect(function (err) {
  //   if (err) {
  //     console.error("error connecting: " + err.stack);
  //     return;
  //   }
  //   console.log("connected as id " + connection.threadId);
  // });
};

export default connectDB;
