import styled from "styled-components";

export const ChatContainer = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background: url("/images/Chat.svg") no-repeat;
	background-position: top center;
	background-size: content;

	opacity: 1;
	animation: fadeInOpacity 300ms ease-in;
`;

export const ChatBalloon = styled.div`
	width: 80%;
	margin: 0.4em 0;
	padding: 1em 2em;

	text-align: start;

	border: 1px solid #f3f1f5;
	box-sizing: border-box;
	border-radius: 12px 12px 12px 0px;
`;

export const ChatTalk = styled.p`
	font-family: Raleway;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: 0.0235294em;

	color: #55328c;
`;
