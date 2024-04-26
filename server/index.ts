import cors from "cors";
import express from "express";
import helmet from "helmet";
import { configs, prisma } from "./configs";
import { ListenerPlugin } from "./plugins";

const app = express();

app
  .use(helmet())
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

// RouterPlugin.setup(app);
ListenerPlugin.listen(app);
