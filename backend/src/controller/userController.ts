import { User, UserModel } from '../Model/userModel';

export const signUp = async (user: User) => {
  return await UserModel.create(user);
};
