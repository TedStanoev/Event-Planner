import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import FormHeader from '../../common/ui/Forms/FormHeader/FormHeader';
import InputFormGroup from '../../common/ui/Forms/InputFormGroup/InputFormGroup';
import RegisterButton from '../../common/ui/RegisterButton/RegisterButton';

import { validateEmail, validatePassword } from '../utils/validators';
import { signInUser } from '../../../api/auth';

const createInitialState = () => ({
  email: '',
  password: '',
});

const Login = props => {
  const [form, setForm] = useState(createInitialState);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const navigate = useNavigate();

  const setFormInputField = (event, property) => {
    const value = event.currentTarget.value;

    setForm({ ...form, [property]: value });

    if (property === 'email') {
      const isValid = validateEmail(value);
      setEmailIsValid(isValid);
    } else if (property === 'password') {
      const isValid = validatePassword(value);
      setPasswordIsValid(isValid);
    }
  }

  const handleSubmit = async () => {
    const { email, password } = form;

    await props.dispatch(signInUser(email, password));

    if (!props.error) {
      navigate('/', { replace: true });
    }
  }

  return (
    <Form style={{ margin: '5% 10%' }}>
        <FormHeader 
            heading="Login"
            linkText="Don't have an account? Click here to register!"
            linkPath="/register"
        />
        <InputFormGroup 
            label="Email:"
            inputType="email"
            value={form.email}
            changeValue={(e) => setFormInputField(e, 'email')}
            invalid={!emailIsValid}
        />
        <InputFormGroup 
            label="Password:"
            inputType="password"
            value={form.password}
            changeValue={(e) => setFormInputField(e, 'password')}
            invalid={!passwordIsValid}
        />

      <RegisterButton 
        disabled={[emailIsValid, passwordIsValid].some(p => !p)}
        onClick={handleSubmit}
      />

    </Form>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  error: state.auth.error,
})

export default connect(mapStateToProps)(Login);