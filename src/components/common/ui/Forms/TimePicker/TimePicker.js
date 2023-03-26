import React from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';

const TimePicker = (props) => {
  return (
    <Form.Group
      as={Row}
      className="c-form-group"
      style={{ display: props.nonInline ? 'block' : 'inline-flex' }}
    >
      <Col>
        <Form.Label className="form-label">{props.label}</Form.Label>
      </Col>
      <Col className="c-input-wrapper">
        <InputGroup>
          <Form.Control
            name={props.name}
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

export default TimePicker;
