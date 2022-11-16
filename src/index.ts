import app from "./server"

var port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("Server is listening")
})
