import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { ChatContainer, InputBox, Input, Send } from "../../components/Chat";

function ChatBot() {
	let [questions, setQuestions] = useState([]);
	let [answers, setAnswers] = useState([]);
	let [message, setMessage] = useState("");

	useEffect(() => {
		async function getSession() {
			const session = await api.get("/session");
			console.log(session);
		}

		getSession();
	}, []);

	async function handleMessage(e) {
		e.preventDefault();

		const message = await api.post("/message");
		console.log(message.data.output.generic[0].text);
	}

	return (
		<ChatContainer>
			{questions.map((question) => (
				<div key={question.id}>
					<p>{question.data.output.generic[0].text}</p>
				</div>
			))}
			<InputBox onSubmit={handleMessage}>
				<Input
					type="text"
					placeholder="Type your message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<Send onClick={() => {}} />
			</InputBox>
		</ChatContainer>
	);
}

export default ChatBot;
