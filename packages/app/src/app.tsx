import React, { FunctionComponent } from "react";

import { AppLayout, Footer, Header, Main, Sidebar } from "@moff-log/components";

const App: FunctionComponent = () => (
  <AppLayout>
    <Header>Header</Header>
    <Sidebar>Sidebar</Sidebar>
    <Main>it just works!</Main>
    <Footer>Footer</Footer>
  </AppLayout>
);

export default App;
