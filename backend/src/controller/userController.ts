import { User, UserModel } from '../Model/userModel';

export class UserController {
  async signUp(user: User) {
    return await UserModel.create(user);
  }

  async signIn(username: string, password: string) {
    return await UserModel.findOne({ username, password });
  }

  async getUser(userId: string) {
    return await UserModel.findById(userId);
  }

  async search(skills: string[]) {
    return await UserModel.aggregate().match({
      skills: new RegExp(`(${skills.join('|')})`)
    });
  }
}
