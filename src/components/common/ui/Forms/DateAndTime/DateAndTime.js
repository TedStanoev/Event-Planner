import React from 'react';
import { Col, Row } from 'react-bootstrap';
import InputFormGroup from '../InputFormGroup/InputFormGroup';

const DateAndTime = (props) => {
  return (
    <Row>
      <Col>
        <InputFormGroup
          label="Date:"
          name="date"
          inputType="date"
          value={props.values.date}
          changeValue={props.handleChange}
          nonInline
        />
      </Col>

      <Col>
        <InputFormGroup
          label="Time:"
          name="time"
          inputType="time"
          value={props.values.time}
          changeValue={props.handleChange}
          nonInline
        />
      </Col>
    </Row>
  );
};

export default DateAndTime;
