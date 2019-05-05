import { Request, Response } from "express";

import { UsersService } from "./Users.service";

export class UsersController {
	constructor(private usersService: UsersService = new UsersService()) {}

	public test123() {
		return async (req: Request, res: Response) => {
			this.usersService
				.test123()
				.then(result => {
					res.status(200).send(result);
				})
				.catch(error => {
					res.status(500).send(error);
				});
		};
	}
}
