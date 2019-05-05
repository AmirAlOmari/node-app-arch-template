import { RouterLike } from "./router-like.interface";

export type Handler = RouterLike | ((req: any, res: any, next: any) => any);

export type Handlers = Array<Handler>;
