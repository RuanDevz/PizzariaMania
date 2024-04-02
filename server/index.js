const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const db = require('./models')
const UserRouter = require("./Routes/User")
const OrderRouter = require("./Routes/Order")
const env = require('dotenv')

env.config()


app.use(cors())
app.use(express.json())


app.use("/user", UserRouter )
app.use("/order", OrderRouter)

db.sequelize.sync().then(() =>{
    app.listen(port, () => console.log(`Server is running on port ${port}`))
})