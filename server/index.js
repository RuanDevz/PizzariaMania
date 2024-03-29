const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const db = require('./models')

const RegistersRouter = require("./Routes/Registers")
const UserRouter = require("./Routes/User")


app.use(cors())
app.use(express.json())


app.use("/register", RegistersRouter)
app.use("/user", UserRouter )

db.sequelize.sync().then(() =>{
    app.listen(port, () => console.log(`Server is running on port ${port}`))
})