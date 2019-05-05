import { HTTPResponse, HTTPResponseCode, HTTPResponseMessage } from "./http-response.interface";

export const C200: HTTPResponse = {
	code: HTTPResponseCode.OK,
	message: HTTPResponseMessage.OK,
};

export const C400: HTTPResponse = {
	code: HTTPResponseCode.BAD_REQUEST,
	message: HTTPResponseMessage.BAD_REQUEST,
};

export const C401: HTTPResponse = {
	code: HTTPResponseCode.UNAUTHORIZED,
	message: HTTPResponseMessage.UNAUTHORIZED,
};

export const C403: HTTPResponse = {
	code: HTTPResponseCode.ACCESS_DENIED,
	message: HTTPResponseMessage.ACCESS_DENIED,
};

export const C404: HTTPResponse = {
	code: HTTPResponseCode.NOT_FOUND,
	message: HTTPResponseMessage.NOT_FOUND,
};

export const C409: HTTPResponse = {
	code: HTTPResponseCode.CONFLICT,
	message: HTTPResponseMessage.CONFLICT,
};

export const C500: HTTPResponse = {
	code: HTTPResponseCode.INTERNAL_SERVER_ERROR,
	message: HTTPResponseMessage.INTERNAL_SERVER_ERROR,
};
