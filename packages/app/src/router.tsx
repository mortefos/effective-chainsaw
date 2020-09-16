import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <div>here comes posts</div>
        </Route>
        <Route path=":id">
          <div>post</div>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
