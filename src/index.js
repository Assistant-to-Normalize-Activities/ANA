import React from "react";
import ReactDOM from "react-dom";

import Global from "./styles/global";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* Here are the global styles
      You can press `crtl + click` to see the file
    */}
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
