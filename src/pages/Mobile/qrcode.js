import React from "react";
import { useHistory } from "react-router-dom";

import { Splash } from "../../components/Mobile";
import { Title } from "../../components";
import CamScanner from "../../components/Camera";

function QrCode() {
	const history = useHistory();

	setTimeout(() => {
		history.push("/chat");
	}, 5000);

	return (
		<Splash>
			<Title>Aproxime a câmera para fazer a leitura do código</Title>
			<CamScanner />
		</Splash>
	);
}

export default QrCode;
