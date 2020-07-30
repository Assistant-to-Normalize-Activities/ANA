import styled from "styled-components";
import { Link } from "react-router-dom";
// Here are the components will inherit more than one time
// Text typing styles start here
export const Title = styled.h2`
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 28px;

	color: ${(props) => (props.primary ? "#fcfaff" : "#55328c")};
`;

export const Description = styled.p`
	font-family: Raleway;
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	text-align: center;

	color: ${(props) => (props.primary ? "#55328c" : "#FCFAFF")};
`;
// Text typing styles finish here

export const Brand = styled.div`
	width: 193px;
	height: 193px;
	margin: 0 0 2em 0;

	background: url("/images/Brand.png") no-repeat;
	background-position: bottom center;
	background-size: cover;
`;

export const Button = styled(Link)`
	margin: 2em 0 1em 0;
	padding: 0.4em 2em;

	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 28px;

	color: #fcfaff;

	box-shadow: -4px -4px 6px rgba(114, 67, 186, 0.05),
		4px 4px 6px rgba(114, 67, 186, 0.05);
	border-radius: 6px;
	background-color: #55328c;
`;
