import express, { Application, json } from "express";
import cors from "cors";

class App {
  express: Application;

  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {}

  middlewares() {
    this.express.use(cors());
    this.express.use(json());
  }

  routes() {}
}

export default new App().express;
