import { Card, CardBody, CardHeader, Input, Avatar, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { DotsIcon } from "../../../icons/icons";
import { FC, useState } from "react";

interface ChatProps {
  usertag: string;
  username: string;
  room: string;
  handleChangeRoom: (room: string) => void;
}

const ChatCard: FC<ChatProps> = (props) => {
  const handleChangeRoom = () => {
    props.handleChangeRoom(props.room)
  } 

  return (
    <>
      <Card isPressable onPress={handleChangeRoom} shadow='none'>
        <CardBody className="p-0">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
              <Avatar 
                name={`${props.username}`}
                size="lg"
              />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="font-semibold leading-none text-default-600">{props.username}</h4>
                  <h5 className="text-small tracking-tight text-default-400">@tag</h5>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
    </>
  );
}
export default ChatCard;


/*
<Dropdown>
                            <DropdownTrigger>
                                <Button className="p-0 min-w-unit-0" variant="light">
                                    <DotsIcon />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new">New file</DropdownItem>
                                <DropdownItem key="copy">Copy link</DropdownItem>
                                <DropdownItem key="edit">Edit file</DropdownItem>
                                <DropdownItem key="delete" className="text-danger" color="danger">
                                    Delete file
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
*/