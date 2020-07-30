import styled from "styled-components";

export const ChatContainer = styled.div`
	width: 100%;
	min-height: 100vh;

	background: url("/images/Chat.svg") no-repeat;
	background-position: top center;
	background-size: content;
`;

export const InputBox = styled.form`
	width: 100%;

	position: fixed;
	bottom: 0;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 140px;

	background: #fcfaff;
	box-shadow: -4px -4px 6px rgba(114, 67, 186, 0.05),
		4px 4px 6px rgba(114, 67, 186, 0.05);
`;

export const Input = styled.input`
	padding: 12px 2em;

	background: #f3f1f5;
	border: none;
	border-radius: 10px;
`;

export const Send = styled.button`
	border: none;
	border-radius: 50%;

	width: 38px;
	height: 38px;

	background-image: url("/images/Send.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: 60%;
	background-color: #fcfaff;
	box-shadow: 0px 4px 4px rgba(114, 67, 186, 0.1),
		0px -4px 4px rgba(114, 67, 186, 0.05);
`;
