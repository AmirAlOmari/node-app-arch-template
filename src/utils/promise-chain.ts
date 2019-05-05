export type IAnyFunction = (...args: Array<any>) => any;

const defaultErrField = "__err_field__";

export class PromiseChain<T> {
	constructor(public customEnum: T, public errField: string = defaultErrField) {}

	public catch<Y extends keyof T>(errIdentify: Y) {
		return (error: any) => {
			if (typeof error[this.errField] !== "undefined") {
				throw error;
			}

			Object.defineProperty(error, this.errField, {
				enumerable: false,
				value: errIdentify,
			});
			throw error;
		};
	}

	public identify<Y extends keyof T>(error: any) {
		return <Y>error[this.errField];
	}

	public finalCatch(onfinally?: IAnyFunction) {
		return (error: any) => {
			for (const key in this.customEnum) {
				if (
					this.customEnum.hasOwnProperty(key) &&
					key === error[this.errField] &&
					typeof this.customEnum[key] === "function"
				) {
					const func = <IAnyFunction>(<unknown>this.customEnum[key]);
					Promise.resolve(func()).then((...results: Array<any>) =>
						typeof onfinally === "function" ? onfinally : () => void null
					);
				}
			}
		};
	}
}
