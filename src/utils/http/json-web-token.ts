import { sign, verify } from "jsonwebtoken";

const secret = "cutted";

export interface JWTPayload {
	userId: string;
}

const encode = (data: JWTPayload): string => {
	return sign(data, secret);
};

const decode = (encoded: string): JWTPayload => {
	return <JWTPayload>verify(encoded, secret);
};

export const JWT = {
	encode,
	decode,
};
