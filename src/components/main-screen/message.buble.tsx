import { Chip } from "@nextui-org/react";
import { FC } from "react";

interface MessageBubbleProps {
    isMine: boolean;
    text: string;
}

const MessageBubble: FC<MessageBubbleProps> = (props) => {
    return (
        <>
            <Chip
                color={props.isMine ? 'primary' : 'secondary'}
            >
                Test message
            </Chip>
        </>
    );
}

export default MessageBubble;