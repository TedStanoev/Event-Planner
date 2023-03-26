import React from 'react';
import { Form, Figure, Row } from 'react-bootstrap';

import { ReactComponent as ImagePlaceholder } from '../../../../../assets/imagePlaceholder.svg';

const ImageUploadForm = (props) => {
  return (
    <div className="d-flex flex-column w-100">
      <Row className="justify-content-center border">
        {props.imageSrc ? (
          <Figure
            style={{
              height: 281,
            }}
          >
            <Figure.Image
              style={{
                maxWidth: 500,
                maxHeight: 281,
              }}
              //alt={props.imageAlt}
              alt="No image"
              src={props.imageSrc}
            />
          </Figure>
        ) : (
          <ImagePlaceholder width={500} height={281} />
        )}
      </Row>
      <Row>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type="file"
          value={props.imageValue}
          onChange={props.onChange}
        />
      </Row>
    </div>
  );
};

export default ImageUploadForm;
