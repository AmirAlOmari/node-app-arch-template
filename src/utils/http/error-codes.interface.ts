export interface IError {
	code: number;
	message: string;
}

export interface IErrorCode {
	[key: string]: IError;
}
