import { RouterLike } from "../utils";

export abstract class RouterBase {
	constructor(public nativeRouter: RouterLike) {}
}
