import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProtocolsContainer = styled.div`
	opacity: 1;
	animation: fadeInOpacity 300ms ease-in;

	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	background-color: #FFF;
	background-image: url("/images/Protocols.svg");
	background-repeat: no-repeat;
	background-position: center
	background-size: cover;
`;

export const Card = styled.div`
	width: 80%;
	margin: 1em 0;
	padding: 1em 1em;

	display: grid;
	grid-template-columns: repeat(2, minmax(100px, 150px));
	align-items: center;

	background-color: #f3f1f5;
	border-radius: 10px;
`;

export const ProtocolImage = styled.img`
	width: 62px;
	height: 62px;
`;

export const CardContainer = styled.div`
	text-align: start;
`;

export const ProtocolTitle = styled.h2`
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 16px;

	color: #55328c;
`;

export const ProtocolDescription = styled.p`
	font-family: Raleway;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 19px;

	color: #636067;
`;

export const ProtocolLink = styled(Link)`
	margin: 0 0 1em 0;

	font-family: Raleway;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;

	color: #55328c;
`;
