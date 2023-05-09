import { Server } from "socket.io";
import { httpServer } from "..";

/**
 * Websocket server instance
 */
const ws = new Server(httpServer);

ws.on("connection", (socket) => {
  console.log("Websocket connection established");
  socket.on("disconnect", (reason) => {
    console.log(`Websocket disconnected: ${reason}`)
  })
})

export default ws;