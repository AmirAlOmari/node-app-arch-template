import mongoose from "mongoose";
import { EventEmitter } from "events";

import config from "../../config";

export interface IMongoConnectConfig {
	protocol: string;
	address: string;
	port: string;
	name: string;
}

export enum MongoServiceEvents {
	Connected = "connected",
	Disconnect = "disconnected",
}

export class MongoService extends EventEmitter {
	public get isConnected(): boolean {
		return this._isConnected;
	}

	private _isConnected: boolean = false;
	private db?: typeof mongoose;
	constructor(public mongodUrl: string) {
		super();
	}

	public async connect(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this._isConnected) {
				return resolve();
			}

			mongoose
				.connect(this.mongodUrl, { useNewUrlParser: true })
				.then(db => {
					this._isConnected = true;
					this.db = db;
					this.emit(MongoServiceEvents.Connected, this);

					resolve();
				})
				.catch(reject);
		});
	}

	public async disconnect(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this._isConnected) {
				return resolve();
			}

			mongoose
				.disconnect()
				.then(() => {
					this._isConnected = false;
					this.db = void null;
					this.emit(MongoServiceEvents.Disconnect, this);

					resolve();
				})
				.catch(reject);
		});
	}
}
