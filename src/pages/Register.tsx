import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRegister } from '@/types/IAuth';
import InputTextHover from '../components/Input/InputTextHover';
import InputCalendar from '../components/Input/InputCalendar';
import MainButton from '../components/Button/MainButton';
import Util from '../helper/Utility';
import { register } from '../redux/actions/AuthAction';
import { RootState, AppDispatch } from '../redux/Store';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
   const navigator = useNavigate();
   const [form, setForm] = useState<IRegister>({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      lastname: '',
      phoneNumber: '',
      birthdate: null,
   });
   const [errors, setErrors] = useState<Partial<IRegister>>({});
   const dispatch: AppDispatch = useDispatch();
   const registerState = useSelector((state: RootState) => state.register);

   const handleChange = (value: object) => {
      const keyObj = Object.keys(value);
      const key = keyObj.length ? keyObj[0] : '';
      //set data to form
      setForm({ ...form, ...value });
      //reset errors
      setErrors((error) => ({
         ...error,
         [key]: undefined,
      }));
   };
   const handleSubmit = async () => {
      if (validateInputField()) {
         form.username = form.email;
         let result = await dispatch(register(form));
         console.log(result);
      }
   };
   const validateInputField = () => {
      const newErrors: Partial<IRegister> = {};
      // Validate require field
      if (Util.isEmpty(form.firstname))
         newErrors.firstname = 'First name is required';
      if (Util.isEmpty(form.lastname))
         newErrors.lastname = 'Last name is required';
      if (Util.isEmpty(form.email)) newErrors.email = 'Email is required';
      if (Util.isEmpty(form.phoneNumber))
         newErrors.phoneNumber = 'Phone number is required';
      if (Util.isEmpty(form.password))
         newErrors.password = 'Password is required';
      if (Util.isEmpty(form.confirmPassword))
         newErrors.confirmPassword = 'Confirm password is required';
      //Validate email format
      if (form.email && !Util.isEmailFormat(form.email)) {
         console.log('validate email');
         newErrors.email = 'Email format is invalid';
      }
      //Validate phone number format
      if (form.phoneNumber && form.phoneNumber.length < 10) {
         newErrors.phoneNumber = 'Phone number format is invalid';
      }
      //Validate password not match
      if (
         form.password &&
         form.confirmPassword &&
         form.password !== form.confirmPassword
      ) {
         newErrors.confirmPassword = "Password doesn't match";
      }
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
         console.log(true);
         return true;
      }
      console.log(newErrors);
      return false;
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
                     errorMsg={errors.firstname}
                     onChange={(value) => handleChange({ firstname: value })}
                  />
               </div>
               <div className="pt-4">
                  <InputTextHover
                     label="Last name"
                     isError={Boolean(errors.lastname)}
                     errorMsg={errors.lastname}
                     onChange={(value) => handleChange({ lastname: value })}
                  />
               </div>
               <div className="pt-4">
                  <InputTextHover
                     label="Phone number"
                     type="tel"
                     maxLength={10}
                     isError={Boolean(errors.phoneNumber)}
                     errorMsg={errors.phoneNumber}
                     onChange={(value) => handleChange({ phoneNumber: value })}
                  />
               </div>
               <div className="pt-4">
                  <InputCalendar
                     label="Birth day"
                     onChange={(value) => handleChange({ birthdate: value })}
                  />
               </div>
               <div className="pt-4">
                  <InputTextHover
                     label="Email"
                     type="email"
                     isError={Boolean(errors.email)}
                     errorMsg={errors.email}
                     onChange={(value) => handleChange({ email: value })}
                  />
               </div>
               <div className="pt-4">
                  <InputTextHover
                     label="Password"
                     type="password"
                     isError={Boolean(errors.password)}
                     errorMsg={errors.password}
                     onChange={(value) => handleChange({ password: value })}
                  />
               </div>
               <div className="pt-4">
                  <InputTextHover
                     label="Confirm password"
                     type="password"
                     isError={Boolean(errors.confirmPassword)}
                     errorMsg={errors.confirmPassword}
                     onChange={(value) =>
                        handleChange({ confirmPassword: value })
                     }
                  />
               </div>
               <div className="flex justify-center mt-5">
                  <MainButton
                     disabled={registerState.loading}
                     customClass={'w-40'}
                     onClick={handleSubmit}
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
