import { Request, Response, NextFunction } from "express";

import { IInputValidationRule } from "./../../utils/http";

/** @todo */
export const InputValidation = (inputValidationRules: IInputValidationRule) => (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	next();
};
