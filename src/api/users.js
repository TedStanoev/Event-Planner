import { getFromDatabase } from "../tools/database"
import { fetchedUsers, fetchedUsersFail } from "../redux/slices/usersSlice";

export const getUsers = () => {
    return async (dispatch) => {
        try {
            const result = await getFromDatabase('/users');
            
            if (Object.keys(result).length > 0) {
                const users = Object.keys(result).map(key => ({ ...result[key], id: key }));
                dispatch(fetchedUsers(users));
                console.log(users);

                return { data: users };
            }
        } catch (e) {
            console.log(e);
            dispatch(fetchedUsersFail(e.message))

            return { error: e.message }
        }
    }
}

export const getFilteredUsers = (filterValue) => {
    return async (dispatch) => {
        try {
            const result = await getFromDatabase('/users');
            
            if (Object.keys(result).length > 0) {
                const users = Object.keys(result).map(key => ({ ...result[key], id: key }));
                dispatch(fetchedUsers(users));
                console.log(users);

                return { data: users };
            }
        } catch (e) {
            console.log(e);
            dispatch(fetchedUsersFail(e.message))

            return { error: e.message }
        }
    }
}