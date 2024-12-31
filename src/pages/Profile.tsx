import React from 'react';
import InputTextHover from '../components/Input/InputTextHover.tsx';
import MainButton from '../components/Button/MainButton.tsx';
const Profile: React.FC = () => {
   return (
      <div className='flex justify-center'>
         <div className='w-full max-w-[800px]'>
            <h1 className='text-center p-4'>My Profile</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
               <div>
                  <InputTextHover
                     label="First name"
                     onChange={() => {}}
                  />
               </div>
               <div>
                  <InputTextHover
                     label="Last name"
                     onChange={() => {}}
                  />
               </div>
               <div>
                  <InputTextHover
                     label="Email"
                     onChange={() => {}}
                  />
               </div>
               <div>
                  <InputTextHover
                     label="Phone number"
                     onChange={() => {}}
                  />
               </div>
               <div>
                  <InputTextHover
                     label="Birth date"
                     onChange={() => {}}
                  />
               </div>
            </div>
            <div className='flex justify-end mt-7'>
               <div className='font-semibold text-btn-0071e3 mx-5 self-center'>Back</div>
               <div><MainButton customClass="w-32" onClick={() => {}}>Save</MainButton></div>
            </div>
         </div>
      </div>
     
   );
};

export default Profile;
