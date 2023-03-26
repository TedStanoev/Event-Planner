import React from 'react';
import dayjs from 'dayjs';
import { Col, Container, Row } from 'react-bootstrap';
import { Formik } from 'formik';

import InputFormGroup from '../common/ui/Forms/InputFormGroup/InputFormGroup';
import TextAreaFormGroup from '../common/ui/Forms/TextAreaFormGroup/TextAreaFormGroup';

import ImageUploadForm from '../common/ui/Forms/ImageUpload/ImageUploadForm';
import ColorfulButton from '../common/ui/buttons/ColorfulButton';
import DateAndTime from '../common/ui/Forms/DateAndTime/DateAndTime';
import SelectFormGroup from '../common/ui/Forms/SelectFormGroup/SelectFormGroup';
import UsersSearchSelect from '../users/UsersSearchSelect';

import './HangoutForm.css';
import { PUBLICITY_OPTIONS } from '../../constants/hangoutConstants';
import { createHangoutSchema } from '../../validation/hangouts';

const initialState = {
  title: '',
  date: dayjs().format('YYYY-MM-DD'),
  time: undefined,
  description: '',
  imageSrc: '',
  imageFile: undefined,
  users: [],
  publicity: 'public',
};

const HangoutForm = (props) => {
  const onFileUpload = (e, setValue) => {
    const file = e.target.files[0];
    const imageSrc = URL.createObjectURL(file);
    console.log(file, imageSrc);

    setValue('imageFile', file);
    setValue('imageSrc', imageSrc);
  };

  return (
    <Container>
      <h1 className="text-center border-bottom">{props.heading}</h1>

      <Formik
        initialValues={initialState}
        onSubmit={props.onSubmit}
        validationSchema={createHangoutSchema}
      >
        {({ values, handleChange, handleSubmit, setFieldValue, errors }) => {
          console.log('Errors', errors);
          return (
            <Container fluid style={{ padding: '3%' }}>
              <Row>
                <Col className="d-flex align-items-center">
                  <ImageUploadForm
                    label="Upload a photo:"
                    imageAlt="Upload image"
                    imageSrc={values.imageSrc}
                    value={values.imageFile}
                    onChange={(e) => onFileUpload(e, setFieldValue)}
                  />
                </Col>

                <Col>
                  <InputFormGroup
                    label="Hangout Title:"
                    inputType="text"
                    name="title"
                    value={values.title}
                    changeValue={handleChange}
                    placeholder="eg: Birthday Party"
                    nonInline
                  />
                  <TextAreaFormGroup
                    label="Description:"
                    name="description"
                    value={values.description}
                    changeValue={handleChange}
                    placeholder="eg: Welcome! I'd like to give some more information..."
                    rows={3}
                    nonInline
                  />

                  <DateAndTime
                    values={{
                      time: values.time,
                      date: values.date,
                    }}
                    handleChange={handleChange}
                  />

                  <SelectFormGroup
                    label="Set Public:"
                    name="publicity"
                    value={values.publicity}
                    options={PUBLICITY_OPTIONS}
                    onChange={handleChange}
                    nonInline
                  />

                  <UsersSearchSelect
                    onUserSelect={(selectedValues, selectedUsers, snapshot) => {
                      console.log(selectedValues, selectedUsers);
                      setFieldValue('users', selectedUsers);
                    }}
                    selectedUsers={values.users}
                  />
                </Col>
              </Row>

              <Row className="my-3">
                <Col className="selected-users-container d-flex justify-content-start align-items-center">
                  {values.users.map((u) => (
                    <div
                      key={u.id}
                      className="selected-user-field d-inline-flex p-2"
                    >
                      <p className="m-0">{u.email}</p>
                    </div>
                  ))}
                </Col>
              </Row>

              <Row>
                <ColorfulButton onClick={handleSubmit} type="submit">
                  Create Hangout
                </ColorfulButton>{' '}
              </Row>
            </Container>
          );
        }}
      </Formik>
    </Container>
  );
};

export default HangoutForm;
