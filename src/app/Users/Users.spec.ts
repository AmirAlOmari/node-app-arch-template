import { expect, req, Mongo } from "./../../../tests/preset";
import { UsersModel, IUser } from "./Users.model";
import { UsersResource } from "./Users.resource";
import { UsersService } from "./Users.service";

const usersResource = new UsersResource(UsersModel);
const usersService = new UsersService(usersResource);

describe("Users", () => {
	before(() => Mongo.connect());

	it("mongo is connected", () => {
		expect(Mongo.isConnected).to.equal(true);
		expect(req).to.exist;
	});

	const getNewUser = (): IUser => {
		return <IUser>{
			email: "test.user@example.com",
		};
	};

	describe("Users.resource", () => {
		/** @todo */
		it("_1", () => {
			expect(true).to.equal(true);
		});
	});

	describe("Users.service", () => {
		/** @todo */
		it("_1", () => {
			expect(true).to.equal(true);
		});
	});
});
