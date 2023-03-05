import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';

import LoginForm from './form/LoginForm';
import routes from '../../components/router/routes';

import { signInUser } from '../../api/auth';
import FormHeader from '../../components/common/ui/Forms/FormHeader/FormHeader';

const createInitialState = () => ({
  email: '',
  password: '',
});

const Login = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const error = useSelector(state => state.auth.error)
  // const state = {
  //   user: useSelector(state => state.auth.user)
  // }
  const [form, setForm] = useState(createInitialState);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(routes.home.path, { replace: true });
    }
  }, [user]);

  const handleSubmit = async () => {
    const { email, password } = form;

    const result = await dispatch(signInUser(email, password));

    console.log('result:', result)
    console.log('redux:', user, error);

    // if (error) {
    //   navigate(routes.home.path, { replace: true });
    // }
  };

  return (
    <div className="bg-purple-gradient d-flex min-heigth-100vh">
      <Container className="align-content-center flex-wrap d-flex">
        <FormHeader
          heading="Login"
          linkText="Don't have an account? Click here to register!"
          linkPath={routes.register.path}
        />
        <LoginForm
          form={form}
          setForm={setForm}
          handleSubmit={handleSubmit}
          error={error}
        />
      </Container>
    </div>
    
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  error: state.auth.error,
});

export default Login;
