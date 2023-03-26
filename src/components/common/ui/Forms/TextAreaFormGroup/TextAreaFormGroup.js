import React from 'react';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';

import '../InputFormGroup/InputFormGroup.css';

const TextAreaFormGroup = (props) => {

    return (
        <Form.Group as={Row} className="c-form-group" style={{ display: props.nonInline ? 'block' : 'inline-flex' }}>
            <Form.Label className="form-label" column sm="2">
                {props.label}
            </Form.Label>
            <Col className="c-input-wrapper">
                <InputGroup>
                    <Form.Control 
                        className="c-input-field c-textarea" 
                        type="text"
                        as="textarea"
                        name={props.name}
                        value={props.value}
                        onChange={props.changeValue}
                        placeholder={props.placeholder}
                        readOnly={props.readonly}
                        rows={props.rows}
                        plaintext 
                    />
                </InputGroup>
            </Col>
      </Form.Group>
    )
}

export default TextAreaFormGroup;