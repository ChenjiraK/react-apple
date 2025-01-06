import Util from "../helper/Utility";
import { IProfile } from '@/types/IAuth';

export class ProfileModel {
   id: number | null;
   firstname : string | null;
   lastname : string | null;
   email : string | null;
   phoneNumber : string | null;
   birthdate : Date | string | null;

   constructor(data:any = {}) {
      this.id = data.id ?? null;
      this.firstname = data.first_name ?? '';
      this.lastname = data.last_name ?? '';
      this.email = data.email ?? '';
      this.phoneNumber = data.phone_number ?? '';
      this.birthdate = data.birth_date ? new Date(data.birth_date) : null;
   }
   getRawData(): IProfile{
      return Util.normalObject(this) as IProfile;
   }
   setParams(params: IProfile) {
      return {
         first_name: params.firstname,
         last_name: params.lastname,
         email: params.email,
         phone_number: params.phoneNumber,
         birth_date: params.birthdate,
      }
   }
}