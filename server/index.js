const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const db = require('./models')
const dotenv = require('dotenv')
const UserRouter = require("./Routes/User")
const OrderRouter = require("./Routes/Order")

dotenv.config()

app.use(cors())
app.use(express.json())

app.use("/user", UserRouter)
app.use("/order", OrderRouter)

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || port, () => console.log(`Server is running on port ${port}`))
})