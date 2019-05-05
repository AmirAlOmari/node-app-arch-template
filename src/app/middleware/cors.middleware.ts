import { NextFunction, Request, Response } from "express";

/**
 * Appending CORS-needed headers to let client browser
 * send AJAX request into way different from web-server
 * IP address.
 */
export const CORS = (allow: boolean = false) => (req: Request, res: Response, next: NextFunction) => {
	if (!allow) {
		return next();
	}

	res.append("Access-Control-Allow-Headers", "Content-Type, Keep-Alive, Authorization");
	res.append("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
	res.append("Access-Control-Allow-Origin", "*");

	if (req.method === "OPTIONS") {
		return res.send();
	} else {
		return next();
	}
};
