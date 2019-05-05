import { Request } from "express";

import { IUser } from "./../../app/Users/Users.model";

export interface AuthedRequest extends Request {
	user?: IUser;
}
