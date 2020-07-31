import React, { useEffect } from "react";

import { ChatContainer } from "../../components/Chat";

function ChatBot() {
	useEffect(() => {
		window.watsonAssistantChatOptions = {
			integrationID: "7fe03166-6dcc-4b9f-a5bf-f4125de6d74d", // The ID of this integration.
			region: "us-south", // The region your integration is hosted in.
			serviceInstanceID: "cd8d2ef2-8009-4468-93ae-a5eff5b14f7d", // The ID of your service instance.
			onLoad: function (instance) {
				instance.render();
			}
		};
		const t = document.createElement("script");
		t.src =
			"https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
		document.head.appendChild(t);
	}, []);

	return <ChatContainer />;
}

export default ChatBot;
