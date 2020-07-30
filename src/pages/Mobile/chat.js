import React, { useEffect } from "react";

import api from "../../services/api";
import { ChatContainer, InputBox, Input, Send } from "../../components/Chat";

function ChatBot() {
  useEffect(() => {
    const session = api.get("/session");
    console.log(session);
  }, []);

  return (
    <ChatContainer>
      <InputBox>
        <Input type="text" placeholder="Type your message" />
        <Send />
      </InputBox>
    </ChatContainer>
  );
}

export default ChatBot;
