import express from "express";
import { json } from "body-parser";

import { AppBase, ExpressLike } from "./../utils/core";
import { CORS } from "./middleware/cors.middleware";
import { Auth } from "./middleware/auth.middleware";
import { UsersRouter } from "./Users/Users.router";

export class App extends AppBase {
	constructor(public nativeApp: ExpressLike = express()) {
		super(nativeApp);

		/**
		 * Body parser appending
		 */
		this.nativeApp.use(json());

		/**
		 * Primary middleware appending
		 */
		this.nativeApp.use(CORS(true));
		this.nativeApp.use(Auth());

		/**
		 * Routes appending
		 */
		this.nativeApp.use("/api/users", new UsersRouter().nativeRouter);
	}
}
