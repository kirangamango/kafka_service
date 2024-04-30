import { Express } from "express";
import http from "http";
import { configs } from "../configs";
import { KafkaController } from "../controllers/kafka.controller";

export const ListenerPlugin = {
  listen(app: Express) {
    KafkaController();

    console.log("test");

    app.listen(configs.PORT, () => {
      console.log(`\nServer is running on port ${configs.PORT}\n`);
    });
  },
};
