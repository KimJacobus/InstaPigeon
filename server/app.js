const express = require("express")
const app = express()
const mongoose = require("mongoose")

// require("dotenv").config();

const PORT = process.env.PORT || 5000
// const {MONGOURI} = require('./config/keys')
const MONGOURI = process.env.MONGOURI

mongoose.connect(MONGOURI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
mongoose.connection.on("connected", () => {
   console.log("conneted to mongo yeahh")
})
mongoose.connection.on("error", (err) => {
   console.log("err connecting", err)
})

require("./models/user")
require("./models/post")

app.use(express.json())
app.use(require("./routes/auth.routes"))
app.use(require("./routes/post.routes"))
app.use(require("./routes/user.routes"))

if (process.env.NODE_ENV == "production") {
   app.use(express.static("../Front/dist"))
   const path = require("path")
   app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../Front/dist", "index.html"))
   })
}

app.listen(PORT, () => {
   console.log("server is running on", PORT)
})
