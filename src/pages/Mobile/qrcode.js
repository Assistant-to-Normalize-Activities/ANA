import React, { useEffect } from "react";

import { Splash } from "../../components/Mobile";

function QrCode() {
  useEffect(() => {
    navigator.permissions.query({ name: "camera" }).then((res) => {
      res.onchange = (e) => {
        // detecting if the event is a change
        if (e.type === "change") {
          // checking what the new permissionStatus state is
          const newState = e.target.state;
          if (newState === "denied") {
            console.log("why did you decide to block us?");
          } else if (newState === "granted") {
            console.log("We will be together forever!");
          } else {
            console.log("Thanks for reverting things back to normal");
          }
        }
      };
    });
  }, []);

  return <Splash />;
}

export default QrCode;
