import { UsersResource } from "./Users.resource";

export class UsersService {
	constructor(private usersResource: UsersResource = new UsersResource()) {}

	public async test123() {
		return new Promise((resolve, reject) => {
			this.usersResource
				.getTest123String()
				.then(result => {
					resolve(result);
				})
				.catch(error => {
					reject(error);
				});
		});
	}
}
