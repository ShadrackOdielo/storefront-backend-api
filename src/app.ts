import cors from "cors";
import express, { Application, Request, Response } from "express";
import  routes  from "./handlers/index";

const app: Application = express();

const corsOptions = {
  origin: "*", // TODO: Change this to the domain of the client
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

routes(app);

app.get("/", async function (req: Request, res: Response) {
  res.send("Hello World!");
});

export default app;
