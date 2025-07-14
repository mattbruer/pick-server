import { app, server } from "./app.js"
import { dbInit } from "./db/index.js"
import admin from "firebase-admin"
import serviceAccount from "../firebaseKey.json" with {"type":"json"}

const serviceAccountConfig = serviceAccount


const PORT = process.env.PORT || 3000

const init = async () => {
  try {
    dbInit()
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountConfig),
    })
    server.listen(PORT, () => console.log(`Gettin' bizy on port ${PORT}`))
  } catch (error) {
    console.error("error", error)
  }
}

init()
