import { Router } from "express";

import { RouterBase, RouterLike } from "./../../utils/core";
import { UsersController } from "./Users.controller";

export class UsersRouter extends RouterBase {
	constructor(
		public nativeRouter: RouterLike = Router(),
		private usersController: UsersController = new UsersController()
	) {
		super(nativeRouter);

		this.nativeRouter.get("/test123", usersController.test123());
	}
}
