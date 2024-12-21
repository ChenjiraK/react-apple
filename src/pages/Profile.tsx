import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputTextHover from '../components/Input/InputTextHover';
import MainButton from '../components/Button/MainButton';
import { login } from '../redux/actions/AuthAction';
import { RootState, AppDispatch } from '../redux/Store';

const Profile: React.FC = () => {
   return (
      <div>
         <div>TEST</div>
      </div>
   );
};

export default Profile;
