import { WebSocketServer, WebSocket } from "ws"
import { parse } from "url"

let clients = new Map()

export function setupWebSocketServer(server) {
  // const wss = new WebSocketServer({ server })
  // clients = new Map()
  // wss.on("connection", (ws, request) => {
  //   const req = parse(request.url, true)
  //   const user = req.query.user
  //   if (user) {
  //     clients.set(user, ws)
  //     sendToUser("am@ix.com", { online: [...clients.keys()] })
  //   }
  //   ws.on("message", (message) => {
  //     console.log(`Received message => ${message}`)
  //     ws.send(`Server received: ${message}`)
  //   })
  //   ws.on("close", () => {
  //     clients.delete(user)
  //     console.log("WebSocket connection closed")
  //     sendToUser("am@ix.com", { online: [...clients.keys()] })
  //   })
  //   ws.on("error", (error) => {
  //     console.error("WebSocket error:", error)
  //   })
  // })
  // return { wss, clients }
}

export function sendToUser(user, message) {
  // const ws = clients.get(user)
  // if (ws && ws.readyState === WebSocket.OPEN) {
  //   ws.send(JSON.stringify(message))
  // } else {
  //   console.log("No active WebSocket connection for " + user)
  // }
}
