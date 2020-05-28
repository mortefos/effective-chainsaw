import styled from "@emotion/styled";

export const AppLayout = styled.div`
  height: 100vh;
  overflow: auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 7fr 2fr;
  grid-template-rows: 1fr 23fr 1fr;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "sidebar footer footer";
`;

export const Header = styled.div`
  background-color: pink;
  grid-area: header;
  display: flex;
`;

export const Sidebar = styled.div`
  background-color: yellow;
  grid-area: sidebar;
  display: flex;
`;

export const Main = styled.div`
  background-color: lightgray;
  grid-area: main;
  display: flex;
`;

export const Footer = styled.div`
  background-color: lightblue;
  grid-area: footer;
  display: flex;
`;
