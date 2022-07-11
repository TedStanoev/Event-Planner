import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import FormHeader from '../../common/ui/Forms/FormHeader/FormHeader';
import FormGroup from '../../common/ui/Forms/FormGroup/FormGroup';
import RegisterButton from '../../common/ui/RegisterButton/RegisterButton';

import { validateEmail, validatePassword, validatePasswordsMatch } from '../utils/validators';
import { registerUser } from '../../../api/auth';

const createInitialState = () => ({
  email: '',
  password: '',
  confirmPassword: '',
});

const Register = props => {
  const [form, setForm] = useState(createInitialState);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const navigate = useNavigate();

  const setFormInputField = (event, property) => {
    const value = event.currentTarget.value;

    setForm({ ...form, [property]: value });

    // const isValid = property === 'email'
    //   ? validateEmail(value)
    //   : property === 'password'
    //     ? validatePassword(value)
    //     : property === 'confirmPassword'
    //       ? validatePasswordsMatch(form.password, value)
    //       : false;

    if (property === 'email') {
      const isValid = validateEmail(value);
      setEmailIsValid(isValid);
    } else if (property === 'password') {
      let isValid = validatePassword(value);
      isValid = isValid && validatePasswordsMatch(value, form.confirmPassword);
      setPasswordIsValid(isValid);
      setPasswordsMatch(isValid);
    } else if (property === 'confirmPassword') {
      const isValid = validatePasswordsMatch(form.password, value);
      setPasswordsMatch(isValid);
    }
  }

  const handleSubmit = async () => {
    const { email, password } = form;
    await props.dispatch(registerUser(email, password));

    if (!props.error) {
      navigate('/login');
    }
  }

  return (
    <Form style={{ margin: '5% 10%' }}>
        <FormHeader 
            heading="Register"
            linkText="Already have an account? Click here to log in!"
            linkPath="/login"
        />
        <FormGroup 
            label="Email:"
            inputType="email"
            value={form.email}
            changeValue={(e) => setFormInputField(e, 'email')}
            invalid={!emailIsValid}
        />
        <FormGroup 
            label="Password:"
            inputType="password"
            value={form.password}
            changeValue={(e) => setFormInputField(e, 'password')}
            invalid={!passwordIsValid}
        />
        <FormGroup 
            label="Confirm Password:"
            inputType="password"
            value={form.confirmPassword}
            changeValue={(e) => setFormInputField(e, 'confirmPassword')}
            invalid={!passwordsMatch}
        />

      <RegisterButton 
        disabled={[emailIsValid, passwordIsValid, passwordsMatch].some(p => !p)} 
        onClick={handleSubmit}
      />

    </Form>
  )
}

export default Register;