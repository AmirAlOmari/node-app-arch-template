import { connect } from "mongoose";
import { Server } from "http";

import config from "./config";
import { App } from "./app";
import { Log } from "./log-system";
import { PromiseChain } from "./utils";

const { MONGODB_URL, HOSTNAME, PORT } = config;

const PC = new PromiseChain({
	MONGO_ERROR: 0,
	SERVER_ERROR: 1,
});
connect(
	MONGODB_URL,
	{ useNewUrlParser: true }
)
	.catch(PC.catch("MONGO_ERROR"))
	.then(db => {
		const app = new App();

		return app.listen(PORT, HOSTNAME);
	})
	.then(server => {
		Log.success(`Application is started on ${HOSTNAME}:${PORT}`);
	})
	.catch(PC.catch("SERVER_ERROR"))

	.catch(error => {
		switch (PC.identify(error)) {
			case "MONGO_ERROR":
				Log.error("Mongo connect error:", error);
				break;

			case "SERVER_ERROR":
				Log.error("Server init error", error);
				break;

			default:
				break;
		}

		process.exit(1);
	});
