import { Server } from "http";

import { ExpressLike } from "../utils";

export abstract class AppBase {
	constructor(public nativeApp: ExpressLike) {}

	public async listen(port: number, hostname: string = "0.0.0.0"): Promise<Server> {
		return new Promise((resolve, reject) => {
			const server = this.nativeApp
				.listen(port, hostname, () => {
					resolve(server);
				})
				.on("error", error => {
					reject(error);
				});
		});
	}
}
