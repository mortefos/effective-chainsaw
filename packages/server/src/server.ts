import express from "express";

import { apollo } from "./server.apollo";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

apollo.applyMiddleware({ app });

app.get("*", (_, res) => res.render("index"));
app.listen(8880, () => {
  console.log("up and running");
});
