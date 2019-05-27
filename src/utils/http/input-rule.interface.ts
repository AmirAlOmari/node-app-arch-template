import { IError } from "./error-codes.interface";

export type PrimitiveType = "Boolean" | "Number" | "String";

export type ArrayPrimitiveType = Array<PrimitiveType>;

export interface InternalFunctionArg<T> {
	value: T;
	rule: FieldRule;
	that: any;
}

export interface ValueFunction<T> {
	(arg: InternalFunctionArg<T>): T;
}

export interface ValidatorFunction<T> {
	(arg: InternalFunctionArg<T>): boolean | IError;
}

export interface OptionalFieldRule {
	$optional?: boolean;
}

export interface BooleanFieldRule {
	$type: "Boolean";
	$default?: boolean;
}

export interface NumberFiledRuleRange {
	$min?: number | ValueFunction<number>;
	$mine?: number | ValueFunction<number>;
	$max?: number | ValueFunction<number>;
	$maxe?: number | ValueFunction<number>;
}

export interface NumberFieldRule extends OptionalFieldRule {
	$type: "Number";
	$default?: number | ValueFunction<number> /** function */;
	$min?: number | ValueFunction<number>;
	$mine?: number | ValueFunction<number>;
	$max?: number | ValueFunction<number>;
	$maxe?: number | ValueFunction<number>;
	$values?: Array<number | ValueFunction<number>>;
	$ranges?: Array<NumberFiledRuleRange>;
}

export interface StringFieldRuleRangeLength {
	$min?: number | ValueFunction<string>;
	$max?: number | ValueFunction<string>;
}

export interface StringFieldRule extends OptionalFieldRule {
	$type: "String";
	$default?: string | ValueFunction<string>;
	$length?: number | ValueFunction<string>;
	$minLength?: number | ValueFunction<string>;
	$maxLength?: number | ValueFunction<string>;
	$rangesLength?: Array<StringFieldRuleRangeLength>;
}

export interface ArrayValueFunctionArg<T, A = any> {
	array: Array<T>;
	value: T;
	index: number;
	accumulator: A;
	rule: FieldRule;
	that: any;
}

export interface ArrayValidatorFunction<T> {
	(arg: ArrayValueFunctionArg<T>): boolean;
}

export type ArrayFieldRuleRangeLength = StringFieldRuleRangeLength;

export interface ArrayFieldRule extends OptionalFieldRule {
	$type: ArrayPrimitiveType;
	$length?: number | ValueFunction<number>;
	$minLength?: number | ValueFunction<string>;
	$maxLength?: number | ValueFunction<string>;
	$rangesLength?: Array<ArrayFieldRuleRangeLength>;
}

export type FieldRule = BooleanFieldRule | NumberFieldRule | StringFieldRule | ArrayFieldRule;

export interface IInputRule {
	[key: string]: PrimitiveType | ArrayPrimitiveType | FieldRule;
}

const a: IInputRule = {
	fname: {
		$type: "String",
	},
};
