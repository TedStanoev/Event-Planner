import React from 'react';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';
import { XCircleFill } from 'react-bootstrap-icons';

import './FormGroup.css';

const FormGroup = (props) => {

    return (
        <Form.Group as={Row} className="c-form-group">
            <Form.Label className="form-label" column sm="2">
                {props.label}
            </Form.Label>
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
                        plaintext 
                    />
                </InputGroup>
            </Col>
      </Form.Group>
    )
}

export default FormGroup;