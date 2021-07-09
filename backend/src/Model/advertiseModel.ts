import { Schema, model } from 'mongoose';

export interface Advertise {
  employeeSeeker: string;
  title: string;
  description: string;
  skills: string[];
  salary: number;
  condition: string;
}

export const AdvertiseSchema = new Schema<Advertise>({
  employeeSeeker: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  skills: { type: [String], required: true },
  salary: { type: Number, required: true },
  condition: { type: String, required: true }
});

export const AdvertiseModel = model<Advertise>('Advertise', AdvertiseSchema);
