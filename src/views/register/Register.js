import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import FormHeader from '../../components/common/ui/Forms/FormHeader/FormHeader';
import InputFormGroup from '../../components/common/ui/Forms/InputFormGroup/InputFormGroup';
import RegisterButton from '../../components/common/ui/RegisterButton/RegisterButton';

import { validateEmail, validatePassword, validatePasswordsMatch } from '../../components/auth/utils/validators';
import { registerUser } from '../../api/auth';
import RegisterForm from './form/RegisterForm';
import routes from '../../components/router/routes';

const createInitialState = () => ({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const Register = props => {
  const [form, setForm] = useState(createInitialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.auth.user);
  const error = useSelector(state => state.auth.registerError);

  useEffect(() => {
    if (user) {
      navigate(routes.home.path, { replace: true });
    }
  }, [user]);

  const handleSubmit = async () => {
    const { email, password, username } = form;

    const result = await dispatch(registerUser(email, password, username));

    if (!result.error) {
      navigate(routes.login.path);
    }
  }

  return (
    <div className="bg-purple-gradient d-flex min-heigth-100vh">
      <Container className="align-content-center flex-wrap d-flex">
        <FormHeader
          heading="Register"
          linkText="Already have an account? Click here to log in!"
          linkPath={routes.login.path}
        />
        <RegisterForm
          form={form}
          setForm={setForm}
          handleSubmit={handleSubmit}
          error={error}
        />
      </Container>
    </div>
  )
}

export default Register;