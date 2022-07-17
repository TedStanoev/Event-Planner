import { addToDatabase, getFromDatabase } from "../tools/database";
import * as EVENT_STATUS from '../constants/eventStatus';
import { uploadFile } from "../tools/fileStorage";

export const getPublicEvents = () => 
    async (dispatch) => {
        try {
            const results = await getFromDatabase('/events');
            console.log(results);
        } catch (error) {
            
        }
    }

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