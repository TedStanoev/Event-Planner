import { addToDatabase } from "../tools/database";
import * as EVENT_STATUS from '../constants/eventStatus';
import { uploadFile } from "../tools/fileStorage";

export const createEvent = (data, currentUser, file) => 
    async (dispatch) => {
        try {
            const uploadedFileResponse = await uploadFile(file, `/events/${file.name}`);

            console.log(uploadedFileResponse);
    
            const parsedData = {
                eventInfo: {
                    title: data.title,
                    usersCount: data.users.length,
                    description: data.description,
                    date: data.date,
                    creator: currentUser.uid,
                    imageSrc: uploadedFileResponse.metadata.fullPath,
                },
                invited: data.users.map(user => ({
                    userId: user.uid,
                    status: EVENT_STATUS.INVITED
                }))
            }
    
            const result = await addToDatabase('/events/', 'events', parsedData);
            console.log(result);
        } catch (e) {
            console.log(e);
        }

    }