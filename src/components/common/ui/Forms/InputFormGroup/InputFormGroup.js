import React from 'react';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';
import { XCircleFill } from 'react-bootstrap-icons';

import './InputFormGroup.css';

const InputFormGroup = (props) => {
  return (
    <Form.Group
      as={Row}
      className="c-form-group"
      // style={{ display: props.nonInline ? 'block' : 'inline-flex' }}
    >
      <Col md={2}>
        <Form.Label className="form-label">
          {props.label}
        </Form.Label>
      </Col>
      <Col className="c-input-wrapper">
        <InputGroup>
          <XCircleFill
            style={{ display: props.invalid ? 'block' : 'none' }}
            className="c-invalid-icon"
            size={15}
          />
          <Form.Control
            className="c-input-field"
            type={props.inputType}
            value={props.value}
            onChange={props.changeValue}
            placeholder={props.placeholder}
            plaintext
          />
        </InputGroup>
      </Col>
    </Form.Group>
  );
};

export default InputFormGroup;
