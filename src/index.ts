import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
  res.sendFile("index.html", { root: "./" });
});
app.listen(8000, () => {
  console.log("running");
});
