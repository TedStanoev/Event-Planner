import { 
  getAuth, 
  signInWithEmailAndPassword 
} from 'firebase/auth'

import { auth } from '../app/app';

const adminCredentials = {
  email: 'administrator@mail.com',
  password: 'jurko2'
};

export const signInUser = async (
  email = adminCredentials.email, 
  password = adminCredentials.password 
) => {
  const credentials = await signInWithEmailAndPassword(auth, email, password);

  if (!credentials) {
    console.log('Cant get credentials!');
    return;
  }

  const { uid } = credentials.user;

  return { email, uid };
}