

const db = require('./db/database')
const app = require('./index')
const port = process.env.PORT || 3000;

db.sync()  // sync our database
.then(() => {
  console.log('db synced')
  app.listen(port, () => console.log(`studiously serving silly sounds on port ${port}`))
})

