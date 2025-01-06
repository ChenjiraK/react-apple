import React, { useState, useEffect } from 'react';
import InputTextHover from '../components/Input/InputTextHover.tsx';
import MainButton from '../components/Button/MainButton.tsx';
import InputCalendar from '../components/Input/InputCalendar';
import { IProfile } from '@/types/IAuth.ts';
import { ProfileModel } from '../model/ProfileModel';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../redux/actions/AuthAction';
import { RootState, AppDispatch } from '../redux/Store';
const Profile: React.FC = () => {
   const [form, setForm] = useState<IProfile>(new ProfileModel().getRawData());
   const dispatch: AppDispatch = useDispatch();
   const profileState = useSelector((state: RootState) => state.profile);

   const handleChange = (value: object) => {
      //set data to form
      setForm({ ...form, ...value });
   };

   // fetch data
   useEffect(() => {
      dispatch(getProfile());
  }, [dispatch]);

   return (
      <div className='flex justify-center'>
         <div className='w-full max-w-[800px] px-10'>
            <h1 className='text-center p-4'>My Profile</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
               <div>
                  <InputTextHover
                     label="First name"
                     value={form.firstname}
                     onChange={(value) => handleChange({ firstname: value })}
                  />
               </div>
               <div>
                  <InputTextHover
                     label="Last name"
                     value={form.lastname}
                     onChange={(value) => handleChange({ lastname: value })}
                  />
               </div>
               <div>
                  <InputTextHover
                     label="Email"
                     value={form.email}
                     onChange={(value) => handleChange({ email: value })}
                  />
               </div>
               <div>
                  <InputTextHover
                     label="Phone number"
                     value={form.phoneNumber}
                     onChange={(value) => handleChange({ phoneNumber: value })}
                  />
               </div>
               <div>
               <InputCalendar
                     label="Birth day"
                     value={form.birthdate}
                     onChange={(value) => handleChange({ birthdate: value })}
                  />
               </div>
            </div>
            <div className='flex justify-end mt-7'>
               <div className='font-semibold text-primary mx-5 self-center'>Back</div>
               <div><MainButton customClass="w-32" onClick={() => {}}>Save</MainButton></div>
            </div>
         </div>
      </div>
     
   );
};

export default Profile;
