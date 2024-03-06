import { useEffect, useState } from "react";
import Sidebar from "../layout/sidebar/sidebar";
import ChatScreen from "./chat.screen";
import { Card } from "@nextui-org/react";
import { Socket, io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken, setCredentials } from "../../store/slices/authSlice";
import { useRefreshMutationMutation } from "../../store/services/auth.service";

let _socket: Socket;

const MainScreen = () => {
  const [socket, setSocket] = useState(_socket);

  const token = useSelector(selectCurrentToken);
  const [refreshToken] = useRefreshMutationMutation();
  const dispatch = useDispatch();
  const [currentChatRoom, setCurrentChatRoom] = useState<string>("NONE");
  const handleSetChatRoom = (room: string) => {
    setCurrentChatRoom(room);
  }

  const handleUpdateSocket = (socket: Socket) => {
    setSocket(socket);
  }

  useEffect(() => {
    console.log(socket)
  }, [socket])

  useEffect(() => {
    const connect = async () => {
      _socket = io(`${process.env.REACT_APP_BASE_URL}chat`, {
        transportOptions: {
          polling: {
            extraHeaders: {
              Authorization: `Bearer ${token}`
            }
          }
        }
      });
    }
    connect();
    handleUpdateSocket(_socket);
    _socket.on('connect', () => {
      console.log('connected')
    })
    return () => {
      _socket.disconnect();
    };
  }, [token])

  useEffect(() => {
    if(_socket) {
      _socket.on('error', async (e) => {
        if(e.status === 401) {
          const data = await refreshToken().unwrap();
          if(data) dispatch(setCredentials({access: data.access}))
        } 
      });
    }
    return () => {
      if(_socket) {
        _socket.off('error');
      }
    }
  }, [_socket])

  return (
    <>
      <button onClick={() => console.log(socket)}>check</button>
      <div className="w-full h-full px-0 md:px-4 lg:px-0 flex flex-row gap-4">
        <div className="max-w-xs w-full relative hidden md:block">
          <Sidebar
            handleChangeRoom={handleSetChatRoom}
          />
        </div>
        <div className="w-full relative">
          {currentChatRoom !== "NONE" ? <>
            <ChatScreen 
              room={currentChatRoom}
              socket={socket}
            />
          </> : <>
            <Card className="h-full justify-center items-center">
              Select chat
            </Card>
          </>}
        </div>
      </div>
    </>
  );
}
export default MainScreen;