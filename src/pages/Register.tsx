import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import file
import InputTextHover from '../components/Input/InputTextHover';
import InputCalendar from '../components/Input/InputCalendar';
import MainButton from '../components/Button/MainButton';
import Util from '../helper/Utility';
import { register } from '../redux/actions/AuthAction';
import { RootState, AppDispatch } from '../redux/Store';
import { useFormSchema } from "../hooks/useFormSchema";
import { RegisterSchema } from "../schemas/formSchemas";
import { IRegister } from "../types/IAuth";

const Register: React.FC = () => {
   const navigator = useNavigate();
   const dispatch: AppDispatch = useDispatch();
   const registerState = useSelector((state: RootState) => state.register);
   const {
      register: formRegister,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useFormSchema(RegisterSchema);

   const handleChange = (data: any) => {
      const keyObj = Object.keys(data);
      const key = keyObj.length ? keyObj[0] : '';
   };

   const onSubmit = async (data: IRegister) => {
      console.log('data', data)
   };

   return (
      <div>
         <h1 className="text-center pt-10 pb-5">Sign Up</h1>
         <div className="flex justify-center">
            <div className="w-full max-w-[500px] h-auto">
               <div className="pt-4">
                  <InputTextHover
                     label="First name"
                     isError={Boolean(errors.firstname)}
                     errorMsg={errors.firstname?.message}
                     onChange={(value) => handleChange({firstname: value})}
                  />
               </div>
               <div className="pt-4">
                  <InputTextHover
                     label="Last name"
                     isError={Boolean(errors.lastname)}
                     errorMsg={errors.lastname?.message}
                     onChange={(value) => setValue("lastname", value)}
                  />
               </div>
               <div className="pt-4">
                  <InputTextHover
                     label="Phone number"
                     type="tel"
                     maxLength={10}
                     isError={Boolean(errors.phoneNumber)}
                     errorMsg={errors.phoneNumber?.message}
                     onChange={(value) => setValue("phoneNumber", value)}
                  />
               </div>
               <div className="pt-4">
                  <InputCalendar
                     label="Birth day"
                     onChange={(value) => setValue("birthdate", value)}
                  />
               </div>
               <div className="pt-4">
                  <InputTextHover
                     label="Email"
                     type="email"
                     isError={Boolean(errors.email)}
                     errorMsg={errors.email?.message}
                     onChange={(value) => setValue("email", value)}
                  />
               </div>
               <div className="pt-4">
                  <InputTextHover
                     label="Password"
                     type="password"
                     isError={Boolean(errors.password)}
                     errorMsg={errors.password?.message}
                     onChange={(value) => setValue("password", value)}
                  />
               </div>
               <div className="pt-4">
                  <InputTextHover
                     label="Confirm password"
                     type="password"
                     isError={Boolean(errors.confirmPassword)}
                     errorMsg={errors.confirmPassword?.message}
                     onChange={(value) => setValue("confirmPassword", value)}
                  />
               </div>
               <div className="flex justify-center mt-5">
                  <MainButton
                     disabled={registerState.loading}
                     customClass={'w-40'}
                     onClick={handleSubmit(onSubmit)}
                  >
                     Sign up
                  </MainButton>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Register;
