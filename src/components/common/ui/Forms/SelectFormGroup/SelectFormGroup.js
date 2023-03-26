import React from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';

import '../InputFormGroup/InputFormGroup.css';

const SelectFormGroup = (props) => {
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
          <Form.Select
            className="c-input-field"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            disabled={props.disabled}
            name={props.name}
            multiple={props.multiple}
          >
            {props.options.map((option, index) => {
              return (
                <option style={{ color: 'black' }} key={index} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </Form.Select>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};

export default SelectFormGroup;
