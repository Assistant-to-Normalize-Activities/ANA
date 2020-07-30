import React from "react";
import { useHistory } from "react-router-dom";

import { Splash } from "../../components/Mobile";
import { Brand, Title, Description } from "../../components";
// First page: here is just a splash screen
// This screen will redirect to default app
function Mobile() {
	const history = useHistory();

	setTimeout(() => {
		history.push("/app");
	}, 3000);

	return (
		<Splash primary="true">
			<Brand />
			<Title primary="true">A N A</Title>
			<Description>Assisant to Normalize Activities</Description>
		</Splash>
	);
}

export default Mobile;
