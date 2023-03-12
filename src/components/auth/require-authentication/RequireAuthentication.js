import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

import { ReactComponent as LoadingSpinner } from '../../../assets/loading/loading.svg';
import { auth } from '../../../config/app';

const RequireAuthentication = (props) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner className="d-flex m-auto" />;
  }

  
  if (!user || error) {
    // add notification
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
};

export default RequireAuthentication;
