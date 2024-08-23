import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const databaseInstance = await connect(
      `${process.env.DATABASE_URI}/${process.env.DBNAME}`
    );
    console.log(
      `📦 MongoDB Connected !! DB HOST : ${databaseInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    throw error;
  }
};

export default connectDB;
