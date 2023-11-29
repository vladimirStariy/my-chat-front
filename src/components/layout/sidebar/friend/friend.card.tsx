import { Avatar, Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { DotsIcon } from "../../../icons/icons";

const FriendsCard = () => {
    return (
        <>
        <Card shadow='none'>
            <CardBody className="p-0">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-4 items-center">
                        <Avatar 
                            name="friend"
                            size="lg"
                        />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="font-semibold leading-none text-default-600">Friend name</h4>
                            <h5 className="text-small tracking-tight text-default-400">@tag</h5>
                        </div>
                    </div>
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
                    
                </div>
            </CardBody>
        </Card>
        </>
    );
}

export default FriendsCard;