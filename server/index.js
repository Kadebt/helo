const express = require('express')
const massive = require('massive')
require('dotenv').config()
const session = require('express-session')
const controller = require('./controllers')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())


app.post('/auth/login', controller.login)
app.post('/auth/register', controller.register)

app.use(
    session({
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
      secret: SESSION_SECRET,
      
    })
  )

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
  }).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('Silly db, trix are for kids')
    app.listen(SERVER_PORT, () =>
      console.log(`Crunchatize me cap'n on port ${SERVER_PORT}`)
    )
  })