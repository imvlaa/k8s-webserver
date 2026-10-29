import express from "express"
import os from "os"

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send(`Hello, World! I'm running on ${os.hostname()}`)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
  console.log(`Hostname: ${os.hostname()}`)
})