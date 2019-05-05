import { MongoService, MongoServiceEvents } from "./mongo.service";

export let Mongo: MongoService;

export const MongoInit = (mongodUrl: string) => {
	Mongo = new MongoService(mongodUrl);
};

export * from "./mongo.service";
