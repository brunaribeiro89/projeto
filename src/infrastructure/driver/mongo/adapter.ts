import ConnectMongo from "./connector"

const MongoAdapter = () => {
  try {
    ConnectMongo()
  } catch (error) {
    return { error: error, message: "Something is wrong try again" }
  }
}

export default MongoAdapter
