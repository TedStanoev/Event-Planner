import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import { auth } from '../config/app';
import { 
  userSignedIn, 
  userSignInError, 
  signOutUser,
  registeredUser,
  registeredUserFail,
} from '../redux/slices/authSlice';
import { addToDatabase } from '../tools/database';

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
}

export const registerUser = (email, password) => 
  async (dispatch) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      const userData = result.user.providerData[0];
      
      console.log(userData);
      addToDatabase('/users/', 'users', userData);

      dispatch(registeredUser(userData))
    } catch (e) {
      console.log(e);
      dispatch(registeredUserFail(e.message))
    }
  }

export const signoutUser = () => 
  async (dispatch) => {
    signOut(auth);
    localStorage.removeItem('token');

    dispatch(signOutUser());
  }