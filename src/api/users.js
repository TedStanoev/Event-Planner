import { updateProfile } from 'firebase/auth';

import { getFromDatabase, updateDatabase } from '../tools/database';
import { fetchedUsers, fetchedUsersFail } from '../redux/slices/usersSlice';
import { uploadFile } from '../tools/fileStorage';
import { editUser as editUserDispatch, editUserFail } from '../redux/slices/usersSlice';
import { auth } from '../config/app';

const usersEndpoint = '/users';

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const result = await getFromDatabase(usersEndpoint);

      if (Object.keys(result).length > 0) {
        const users = Object.keys(result).map((key) => ({
          ...result[key],
          id: key,
        }));

        dispatch(fetchedUsers(users));

        return { data: users };
      }
    } catch (e) {
      console.log(e);
      dispatch(fetchedUsersFail(e.message));

      return { error: e.message };
    }
  };
};

export const getFilteredUsers = (filterValue) => {
  return async (dispatch) => {
    try {
      const result = await getFromDatabase(usersEndpoint);

      if (Object.keys(result).length > 0) {
        const users = Object.keys(result).map((key) => ({
          ...result[key],
          id: key,
        }));
        dispatch(fetchedUsers(users));

        return { data: users };
      }
    } catch (e) {
      console.log(e);
      dispatch(fetchedUsersFail(e.message));

      return { error: e.message };
    }
  };
};

export const editUser = (data) => {
  return async (dispatch) => {
    try {
      const { id, username, imageFile } = data;

      let uploadedFileResponse;

      if (imageFile) {
        uploadedFileResponse = await uploadFile(
            imageFile,
          `${usersEndpoint}/${imageFile.name}`
        );

        console.log(uploadedFileResponse);
      }

      const updateProfileResult = await updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: uploadedFileResponse?.metadata.fullPath || ''
      });

      console.log('update profile', updateProfileResult);

      const updateDBRecord = await updateDatabase(usersEndpoint, { uid: id, username, photoURL: uploadedFileResponse?.metadata.fullPath || '' });

      console.log(updateDBRecord);
      
      dispatch(editUserDispatch(updateDBRecord));

      return { data: updateDBRecord };
    } catch (error) {
        console.log(error);
        dispatch(editUserFail(error.message));

        return { error: error.message };
    }
  };
};
