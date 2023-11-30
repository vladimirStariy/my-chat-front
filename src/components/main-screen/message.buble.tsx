import { Chip } from "@nextui-org/react";
import { FC } from "react";

interface MessageBubbleProps {
    isMine: boolean;
    text: string;
}

const MessageBubble: FC<MessageBubbleProps> = (props) => {
    return (
        <>
            <div className={`
                flex flex-col
                w-full 
                h-full
                ${props.isMine ? 'items-end' : 'items-start'}
            `}>
                <div
                    className={`
                    max-h-full max-w-sm 
                    block break-normal px-4 py-2
                    ${props.isMine ? 'bg-cyan-500' : 'bg-zinc-300'}
                    ${props.isMine ? 'text-white' : ''}
                    rounded-3xl`}
                >
                    {props.text}
                </div>
            </div>
        </>
    );
}

export default MessageBubble;