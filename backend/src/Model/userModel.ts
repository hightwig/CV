import { Schema, model } from 'mongoose';

export enum UserRole {
  JobSeeker = 'JobSeeker',
  EmployeeSeeker = 'EmployeeSeeker',
  Admin = 'Admin'
}

export interface User {
  name: string;
  email: string;
  username: string;
  password: string;
  role: UserRole;
  skills?: string;
}

export const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  skills: { type: [String] }
});

export const UserModel = model<User>('User', userSchema);
