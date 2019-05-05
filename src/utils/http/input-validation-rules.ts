import { HTTPReponseErorr } from "./http-response.interface";

export interface IValidator {
	(value: any, rule: IInputValidationRule, globalBody: any): boolean | string;
}

export interface IInputValidationRule {
	param?: {
		key: string;
		error: HTTPReponseErorr;
		optional?: true;
		default?: any;
		values?:
			| Array<any>
			| {
					min?: number;
					max?: number;
			  };
		validators?: Array<IValidator>;
		sub?: Array<IInputValidationRule>;
	};
	query?: {
		key: string;
		error: HTTPReponseErorr;
		optional?: true;
		default?: any;
		values?:
			| Array<any>
			| {
					min?: number;
					max?: number;
			  };
		validators?: Array<IValidator>;
		sub?: Array<IInputValidationRule>;
	};
	body?: {
		key: string;
		type: "string" | "number" | "boolean" | "array" | "object";
		error: HTTPReponseErorr;
		optional?: true;
		default?: any;
		values?:
			| Array<any>
			| {
					min?: number;
					max?: number;
			  };
		validators?: Array<IValidator>;
		sub?: Array<IInputValidationRule>;
	};
}

const InputvalidationRules: Array<IInputValidationRule> = [];
