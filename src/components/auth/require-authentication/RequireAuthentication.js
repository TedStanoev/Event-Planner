import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

import { ReactComponent as LoadingSpinner } from '../../../assets/loading/loading.svg';
import { auth } from '../../../config/app';
import { userSignedIn } from '../../../redux/slices/authSlice';

const RequireAuthentication = (props) => {
  const [user, loading, error] = useAuthState(auth);

  const dispatch = useDispatch();
  
  const location = useLocation();

  useEffect(() => {
    if (user) {
      dispatch(userSignedIn(user.providerData[0]));
    }
  }, [user])

  if (loading) {
    return <LoadingSpinner className="d-flex m-auto" />;
  }

  if (!user || error) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
};

export default RequireAuthentication;
