import { Handlers } from "./handlers.interface";

export interface RouterLike {
	use(path: string, ...handlers: Handlers): void;
	use(...handlers: Handlers): void;

	all(path: string, ...handlers: Handlers): void;
	get(path: string, ...handlers: Handlers): void;
	post(path: string, ...handlers: Handlers): void;
	patch(path: string, ...handlers: Handlers): void;
	delete(path: string, ...handlers: Handlers): void;
}
