import mongoose, { ConnectOptions } from "mongoose"

const ConnectMongo = () => {
  const db = mongoose.connection
  var MONGODB_URL = process.env.MONGODB_URL
  console.log(MONGODB_URL)
  try {
    console.log("Wait connecting to the database...")
    mongoose.connect("mongodb://localhost:27017/promotion", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    db.once("open", () => console.log("Connected to Database"))
  } catch (error) {
    db.on("error", (error) => console.error(error))
  }
}
export default ConnectMongo

//"mongodb://localhost:27017/promotion"
