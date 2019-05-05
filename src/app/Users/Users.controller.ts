import { Request, Response } from "express";

import { UsersService } from "./Users.service";
import { C200, C500, ErrorCodes, HTTPResponse } from "./../../utils/http";

export class UsersController {
	constructor(private usersService: UsersService = new UsersService()) {}

	public test123() {
		return async (req: Request, res: Response) => {
			let send: HTTPResponse;
			this.usersService
				.test123()
				.then(result => {
					send = {
						...C200,
						data: result,
					};
					res.status(send.code).send(send);
				})
				.catch(error => {
					send = {
						...C500,
						errors: [ErrorCodes["0"]],
					};
					res.status(500).send(send);
				});
		};
	}
}
