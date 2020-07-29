import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isMobile } from "react-device-detect";

import Mobile from "./pages/Mobile/mobile";
import Desktop from "./pages/Desktop/desktop";
import Start from "./pages/Mobile/start";

function App() {
  if (isMobile) {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Mobile} />
          <Route path="/app" component={Start} />
        </Switch>
      </Router>
    );
  } else {
    return <Desktop />;
  }
}

export default App;
