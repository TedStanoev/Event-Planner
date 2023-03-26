import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';

import HangoutForm from '../../components/hangout-form/HangoutForm';
import { createHangout } from '../../api/hangouts/hangouts';
import { auth } from '../../config/app';

const CreateHangout = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const onSubmit = async (hangoutData, actions) => {
    console.log(hangoutData, actions);
    const { imageSrc, ...hangout } = hangoutData;

    await dispatch(createHangout(hangout, user, imageSrc));
  };

  return (
    <HangoutForm
      onSubmit={onSubmit}
      heading="Create a Hangout"
    />
  );
};

export default CreateHangout;
