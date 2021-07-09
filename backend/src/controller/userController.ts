import { User, UserModel } from '../Model/userModel';

export const signUp = async (user: User) => {
  return await UserModel.create(user);
};

export const signIn = async (username: string, password: string) => {
  return await UserModel.findOne({ username, password });
};
