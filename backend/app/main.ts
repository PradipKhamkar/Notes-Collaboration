import { config } from "dotenv";
config({ path: "../env" });
import app from "./app";
import connectDB from "./db";
const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️  Server is running at port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!", error);
  });
