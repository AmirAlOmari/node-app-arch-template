export enum HTTPResponseCode {
	OK = 200,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	ACCESS_DENIED = 403,
	NOT_FOUND = 404,
	CONFLICT = 409,
	INTERNAL_SERVER_ERROR = 500,
}

export enum HTTPResponseMessage {
	OK = "OK",
	BAD_REQUEST = "Bad request",
	UNAUTHORIZED = "Unauthorized",
	ACCESS_DENIED = "Access denied",
	NOT_FOUND = "Not found",
	CONFLICT = "Conflict",
	INTERNAL_SERVER_ERROR = "Internal Server Error",
}

export interface HTTPReponseErorr {
	code: number;
	message: string;
}

export interface HTTPResponse {
	code: HTTPResponseCode;
	message: HTTPResponseMessage;
	data?: any;
	errors?: Array<HTTPReponseErorr>;
	erorr?: any;
	[key: string]: any;
}
