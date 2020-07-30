import React, { useEffect } from "react";

import { Splash } from "../Mobile";

function Scanner() {
	useEffect(() => {
		if (
			"mediaDevices" in navigator &&
			"getUserMedia" in navigator.mediaDevices
		) {
			navigator.mediaDevices.getUserMedia({ video: true });
		}
	}, []);

	return <Splash></Splash>;
}

export default Scanner;
