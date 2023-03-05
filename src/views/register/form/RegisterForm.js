import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import {
  validateEmail,
  validatePassword,
  validatePasswordsMatch,
} from '../../../components/auth/utils/validators';
import InputFormGroup from '../../../components/common/ui/Forms/InputFormGroup/InputFormGroup';
import RegisterButton from '../../../components/common/ui/RegisterButton/RegisterButton';

const RegisterForm = (props) => {
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const setFormInputField = (event, property) => {
    const value = event.currentTarget.value;

    props.setForm({ ...props.form, [property]: value });

    if (property === 'email') {
      const isValid = validateEmail(value);
      setEmailIsValid(isValid);
    } else if (property === 'password') {
      let isValid = validatePassword(value);
      setPasswordIsValid(isValid);
      isValid =
        isValid && validatePasswordsMatch(value, props.form.confirmPassword);
      setPasswordsMatch(isValid);
    } else if (property === 'confirmPassword') {
      const isValid = validatePasswordsMatch(props.form.password, value);
      setPasswordsMatch(isValid);
    }
  };

  return (
    <Form className="w-100">
      <Row>
        <Col md={11}>
          <InputFormGroup
            label="Email:"
            inputType="email"
            value={props.form.email}
            changeValue={(e) => setFormInputField(e, 'email')}
            invalid={!emailIsValid}
          />
        </Col>

        <Col md={11}>
          <InputFormGroup
            label="Password:"
            inputType="password"
            value={props.form.password}
            changeValue={(e) => setFormInputField(e, 'password')}
            invalid={!passwordIsValid}
          />
        </Col>

        <Col md={11}>
          <InputFormGroup
            label="Confirm Password:"
            inputType="password"
            value={props.form.confirmPassword}
            changeValue={(e) => setFormInputField(e, 'confirmPassword')}
            invalid={!passwordsMatch}
          />
        </Col>

        <Col className="d-flex justify-content-md-end justify-content-center align-content-center flex-wrap order-2 order-md-1" md={1}>
          <RegisterButton
            disabled={[emailIsValid, passwordIsValid, passwordsMatch].some(
              (p) => !p
            )}
            onClick={props.handleSubmit}
          />
        </Col>

        {props.error && <Col className="order-1 order-md-2 mb-3 mx-auto" xs={7} md={12}>
          <p className="text-center ml-md-5 text-danger text-bold">{props.error}</p>
        </Col>}
      </Row>
    </Form>
  );
};

export default RegisterForm;
