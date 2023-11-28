import ChatCard from "./chat.card";

const ChatsTab = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
            </div>
        </>
    );
}

export default ChatsTab;