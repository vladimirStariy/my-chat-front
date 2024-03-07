import { Socket } from "socket.io-client";

export const socketEmit = async (socket: Socket, action: string, token: string, payload: any) => {
  await socket.emit(action, {...payload, token: token})
}