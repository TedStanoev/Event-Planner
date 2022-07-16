import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuthentication = (props) => {
    const location = useLocation();
    
    if (!props.user) {
        //add notification
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return props.children;
};

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(RequireAuthentication);