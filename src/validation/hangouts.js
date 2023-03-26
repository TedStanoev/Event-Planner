import * as yup from 'yup';
import { PUBLICITY_OPTIONS } from '../constants/hangoutConstants';

export const createHangoutSchema = yup.object().shape({
  title: yup.string().required('Hangouts should have a title'),
  description: yup.string().notRequired(),
  date: yup.date().required('Date should be specified'),
  time: yup.string().required('Time should be specified'),
  publicity: yup.string().oneOf(PUBLICITY_OPTIONS.map(o => o.value)).required('Please select who you want to share this hangout with'),
  users: yup.array().of(yup.object().shape({
    email: yup.string(),
    uid: yup.string(),
    providerId: yup.string(),
    id: yup.string(),
    value: yup.string()
  }))
    .min(1, 'Please invite at least one user to your hangout')
});