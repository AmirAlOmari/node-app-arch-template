import { Document, Schema, Model, model } from "mongoose";

export interface IUser extends Document {
	email?: string;
}

export const UsersDefinition = {
	email: String,
};

export const UsersSchema: Schema<IUser> = new Schema(UsersDefinition);

export const UsersModel: Model<IUser> = model("User", UsersSchema, "users");
