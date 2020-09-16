import React, { FunctionComponent } from "react";

import { AppLayout, Footer, Header, Main, Sidebar } from "@moff-log/components";

import { Router } from "./router";

const App: FunctionComponent = () => (
  <AppLayout>
    <Header>Header</Header>
    <Sidebar>Sidebar</Sidebar>
    <Main>
      <Router />
    </Main>
    <Footer>Footer</Footer>
  </AppLayout>
);

export default App;
