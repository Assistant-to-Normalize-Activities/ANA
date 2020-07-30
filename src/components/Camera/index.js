import React, { useEffect } from "react";

import { Splash } from "../Mobile";

function Scanner() {
  useEffect(() => {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      alert("Let's get this party started");
      navigator.mediaDevices.getUserMedia({ video: true });
    }
  }, []);

  return <Splash />;
}

export default Scanner;
