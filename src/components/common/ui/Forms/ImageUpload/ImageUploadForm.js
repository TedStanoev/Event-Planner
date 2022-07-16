import React from 'react';
import { Form, Figure } from 'react-bootstrap';

const ImageUploadForm = (props) => {

    return (
        <React.Fragment>
            <Figure>
                <Figure.Image 
                    width={props.imageWidth ? props.imageWidth : 500}
                    height={props.imageHeight ? props.imageHeight : 300}
                    //alt={props.imageAlt}
                    alt='No image'
                    src={props.imageSrc}
                />
            </Figure>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control 
                type="file" 
                value={props.imageValue}
                onChange={props.onChange}
            />
        </React.Fragment>
    )
}

export default ImageUploadForm;