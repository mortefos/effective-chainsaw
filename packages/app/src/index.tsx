import { css, Global } from "@emotion/core";
import React from "react";
import { render } from "react-dom";

import App from "./app";

let appRoot = document.getElementById("app");
if (!appRoot) {
  appRoot = document.createElement("div");
  appRoot.setAttribute("id", "app");

  document.body.insertBefore(appRoot, document.body.firstChild);
}

render(
  <>
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
    <App />
  </>,
  appRoot
);
