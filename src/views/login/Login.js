import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import LoginForm from './form/LoginForm';
import routes from '../../components/router/routes';

import { signInUser } from '../../api/auth';
import FormHeader from '../../components/common/ui/Forms/FormHeader/FormHeader';

const createInitialState = () => ({
  email: '',
  password: '',
});

const Login = (props) => {
  const [form, setForm] = useState(createInitialState);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.auth.user);
  const error = useSelector(state => state.auth.loginError);

  useEffect(() => {
    if (user) {
      navigate(routes.home.path, { replace: true });
    }
  }, [user]);

  const handleSubmit = async () => {
    const { email, password } = form;

    await dispatch(signInUser(email, password));
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

export default Login;
