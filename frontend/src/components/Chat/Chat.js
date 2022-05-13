import { ChatEngine } from 'react-chat-engine';

import './Chat.css';



const Chat = () => {
    
    const projectID = 'b75e5bd5-cd84-404c-b820-06feff8c98c0';

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName="john_smith"
            userSecret="secret_1234"
        />
    )
}

export default Chat;