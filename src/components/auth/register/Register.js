import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import FormHeader from '../../common/ui/Forms/FormHeader/FormHeader';
import FormGroup from '../../common/ui/Forms/FormGroup/FormGroup';
import RegisterButton from '../../common/ui/RegisterButton/RegisterButton';

const createInitialState = () => ({
  email: '',
  password: '',
  confirmPassword: '',
});

const Register = props => {
  const [form, setForm] = useState(createInitialState);

  const setFormInputField = (event, property) => {
    setForm({ ...form, [property]: event.currentTarget.value })
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
        />
        <FormGroup 
            label="Password:"
            inputType="password"
            value={form.password}
            changeValue={(e) => setFormInputField(e, 'password')}
        />
        <FormGroup 
            label="Confirm Password:"
            inputType="password"
            value={form.confirmPassword}
            changeValue={(e) => setFormInputField(e, 'confirmPassword')}
        />

      <RegisterButton disabled />

    </Form>
  )
}

export default Register;