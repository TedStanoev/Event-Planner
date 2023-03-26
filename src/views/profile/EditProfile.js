import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import ImageUploadForm from '../../components/common/ui/Forms/ImageUpload/ImageUploadForm';
import InputFormGroup from '../../components/common/ui/Forms/InputFormGroup/InputFormGroup';
import ConfirmButton from '../../components/common/ui/buttons/ConfirmButton';
import { Formik } from 'formik';
import { editUser } from '../../api/users';
import { getFile } from '../../tools/fileStorage';

const setInitialState = (user, imageSrc) => {
  if (!user) {
    return {
      id: '',
      username: '',
      imageSrc: '',
      imageFile: undefined,
    };
  }

  return {
    id: user?.uid,
    username: user?.displayName || '',
    imageSrc: imageSrc || '',
    imageFile: undefined,
  };
};

const EditProfile = () => {
  const [image, setImage] = useState('');
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      getFile(user.photoURL).then((url) => setImage(url));
    }
  }, [user]);

  const onFileUpload = (e, setValue) => {
    const file = e.target.files[0];
    const imageSrc = URL.createObjectURL(file);

    console.log(file, imageSrc);

    setValue('imageFile', file);
    setValue('imageSrc', imageSrc);
  };

  const onSubmit = async (formValues, actions) => {
    console.log(formValues);

    const result = await dispatch(editUser(formValues));

    console.log('Result', result);
  };

  return (
    <Formik
      initialValues={setInitialState(user, image)}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ handleSubmit, handleChange, setFieldValue, values }) => {
        return (
          <Container>
            <Row className="d-flex justify-content-start">
              <Col xs={12} md={9} lg={10}>
                <InputFormGroup
                  labelColProps={{ xs: 3 }}
                  label="Username:"
                  value={values.username}
                  changeValue={handleChange('username')}
                  inputType="text"
                />
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs={12} md={9} lg={6}>
                <ImageUploadForm
                  label="Uplad image:"
                  imageAlt="Uploaded image"
                  imageSrc={values.imageSrc}
                  value={values.imageFile}
                  onChange={(e) => onFileUpload(e, setFieldValue)}
                />
              </Col>
            </Row>

            <Row className="my-3">
              <Col className="d-flex justify-content-center">
                <ConfirmButton onClick={() => handleSubmit()} />
              </Col>
            </Row>
          </Container>
        );
      }}
    </Formik>
  );
};

export default EditProfile;
