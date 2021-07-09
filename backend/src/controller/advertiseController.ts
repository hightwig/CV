import { Advertise, AdvertiseModel } from '../Model/advertiseModel';

export class AdvertiseController {
  async addAdvertise(advertise: Advertise) {
    return await AdvertiseModel.create(advertise);
  }
}
