import { Model } from "mongoose";

import { UsersModel, IUser } from "./Users.model";

export class UsersResource {
	constructor(private usersModel: Model<IUser> = UsersModel) {}

	public async getTest123String() {
		return new Promise((resolve, reject) => {
			const num = Math.random();

			if (num > 0.5) {
				resolve("test123");
			} else {
				reject(new Error("something gone wrong :("));
			}
		});
	}
}
