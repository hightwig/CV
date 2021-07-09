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
}

export const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
});

export const UserModel = model<User>('User', userSchema);
