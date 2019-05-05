import http from "http";

import { Handlers } from "./handlers.interface";

export interface ExpressLike {
	listen(port: number, hostmname: string, callback?: () => any): http.Server;

	use(path: string, ...handlers: Handlers): void;
	use(...handlers: Handlers): void;
}
