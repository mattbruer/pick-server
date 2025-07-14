// import "./env.js"
// import express from "express"
// import cors from "cors"
// import http from "http"
// import { setupWebSocketServer } from "../ws.js"
// import apiRoutes from "./api/routes/index.js"

// const app = express()
// const server = http.createServer(app)

// // middleware
// app.use(cors())
// app.use(express.json())

// // API routes
// app.use("/api", apiRoutes)

// // Set up WebSocket server
// // const { wss } = setupWebSocketServer(server)

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error("middlewError", err)
//   console.error(err.stack)

//   res.status(err.status || 500).json({ err })
// })

// export { app, server }

import "./env.js"
import express from "express"
import cors from "cors"
import https from "https"
import fs from "fs"
import path from "path"
import { setupWebSocketServer } from "../ws.js"
import apiRoutes from "./api/routes/index.js"

const app = express()

const certOptions = {
  key: fs.readFileSync(path.join(process.cwd(), "localhost+3-key.pem")),
  cert: fs.readFileSync(path.join(process.cwd(), "localhost+3.pem")),
}

const server = https.createServer(certOptions, app)

// middleware
app.use(cors())
app.use(express.json())

// API routes
app.use("/api", apiRoutes)

// setupWebSocketServer(server)

// Error handling
app.use((err, req, res, next) => {
  console.error("middlewError", err)
  console.error(err.stack)
  res.status(err.status || 500).json({ err })
})

export { app, server }
