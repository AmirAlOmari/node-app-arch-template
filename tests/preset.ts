import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import config from "./config";
import { MongoService, MongoInit } from "./utils/mongo-service";
const { MONGODB_URL, SERVER_URL } = config;

chai.use(chaiHttp);
MongoInit(MONGODB_URL);

const req = chai.request(SERVER_URL);

export { expect, req };
export * from "./utils/mongo-service";
