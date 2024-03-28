const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const db = require('./models')

const RegistersRouter = require("./Routes/Registers")
const LoginsRouter = require("./Routes/Logins")
app.use(cors())
app.use(express.json())
app.use("/register", RegistersRouter)
app.use("/login", LoginsRouter )

db.sequelize.sync().then(() =>{
    app.listen(port, () => console.log(`Server is running on port ${port}`))
})