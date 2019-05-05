import { Response, NextFunction } from "express";

import { AuthedRequest, C500, ErrorCodes, JWT, JWTPayload, HTTPResponse } from "./../../utils/http";
import { UsersModel } from "./../Users/Users.model";

export const Auth = () => (req: AuthedRequest, res: Response, next: NextFunction) => {
	if (!req.headers.authorization) {
		return next();
	}

	const token = req.headers.authorization;
	let send: HTTPResponse;
	let decoded: JWTPayload;

	try {
		decoded = JWT.decode(token);
	} catch (error) {
		return next();
	}

	UsersModel.findById(decoded.userId)
		.exec()
		.then(user => {
			if (!user) {
				return next();
			}

			req.user = user;
			next();
		})
		.catch(error => {
			send = {
				...C500,
			};
			return res.status(500).send(send);
		});
};
