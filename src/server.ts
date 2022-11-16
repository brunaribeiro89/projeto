import express, { Request, Response } from "express"
import router from "./rourtes/routes"
import MongoAdapter from "./infrastructure/driver/mongo/adapter"

const app = express()

app.use(express.json())
MongoAdapter()
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use("/promotions", router)

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Teste Server" })
})

export default app
