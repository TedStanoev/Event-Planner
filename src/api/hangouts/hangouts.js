import { addToDatabase, getFromDatabase } from '../../tools/database';
import * as EVENT_STATUS from '../../constants/eventStatus';
import { uploadFile } from '../../tools/fileStorage';

const hangoutsEndpoint = 'hangouts';

export const getPublicHangouts = () => async (dispatch) => {
  try {
    const results = await getFromDatabase(`/${hangoutsEndpoint}`);
    console.log(results);
  } catch (error) {}
};

export const createHangout = (data, currentUser, file) => async (dispatch) => {
  try {
    let uploadedFileResponse;
    if (file) {
        uploadedFileResponse = await uploadFile(
          file,
          `/${hangoutsEndpoint}/${file.name}`
        );
    
        console.log(uploadedFileResponse);
    }

    const parsedData = {
      hangoutInfo: {
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time,
        imageSrc: uploadedFileResponse?.metadata.fullPath || '',
      },
      creator: {
        id: currentUser.uid,
      },
      invited: {
        users: {
          ...data.users.map((user) => ({
            [user.uid]: {
              status: EVENT_STATUS.INVITED,
              id: user.uid,
            },
          })),
        },
        count: data.users.length,
      },
    };

    const result = await addToDatabase(
      `/${hangoutsEndpoint}/`,
      hangoutsEndpoint,
      parsedData
    );
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
