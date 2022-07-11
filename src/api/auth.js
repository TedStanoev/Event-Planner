import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth'

import { auth } from '../app/app';
import { userSignedIn, userSignInError, signOutUser } from '../redux/slices/authSlice';

// const adminCredentials = {
//   email: 'administrator@mail.com',
//   password: 'jurko2'
// };

export const signInUser = (
  email,
  password
) => async (dispatch) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    
    if (!credentials) {
      throw new Error('Cant get credentials!');
    }

    const { refreshToken } = credentials.user;
    const userData = credentials.user.providerData[0];

    localStorage.setItem('token', refreshToken);
    dispatch(userSignedIn(userData));
  } catch (error) {
    console.log(error.message);
    dispatch(userSignInError(error.message));
  }



  // const { uid, refreshToken } = credentials.user;


  // return { email, uid };
}

export const registerUser = (email, password) => 
  async (dispatch) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

export const signoutUser = () => 
  async (dispatch) => {
    signOut(auth);
    localStorage.removeItem('token');

    dispatch(signOutUser());
  }