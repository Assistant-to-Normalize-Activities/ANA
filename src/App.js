import React from "react";
import { isMobile } from "react-device-detect";

import { Main } from "./components/Desktop";
import Desktop from "./pages/desktop";

function App() {
  if (isMobile) {
    return <Main />;
  } else {
    return <Desktop />;
  }
}

export default App;
