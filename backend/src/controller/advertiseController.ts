import { Advertise, AdvertiseModel } from '../Model/advertiseModel';

export class AdvertiseController {
  async addAdvertise(advertise: Advertise) {
    return await AdvertiseModel.create(advertise);
  }

  async editAdvertise(id: string, advertise: Partial<Advertise>) {
    return await AdvertiseModel.findByIdAndUpdate(id, advertise, {
      returnOriginal: false
    });
  }

  async removeAdvertise(id: string) {
    return await AdvertiseModel.findByIdAndDelete(id);
  }
}
