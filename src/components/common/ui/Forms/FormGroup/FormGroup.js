import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import './FormGroup.css';

const FormGroup = (props) => {
    return (
        <Form.Group as={Row} className="c-form-group">
            <Form.Label className="form-label" column sm="2">
                {props.label}
            </Form.Label>
            <Col className="c-input-wrapper">
                <Form.Control 
                    className="c-input-field" 
                    type={props.inputType} 
                    value={props.value}
                    onChange={props.changeValue}
                    plaintext 
                />
            </Col>
      </Form.Group>
    )
}

export default FormGroup;