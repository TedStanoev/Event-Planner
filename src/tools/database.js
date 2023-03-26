import {
    ref,
    child,
    push,
    update,
    get,
    orderByValue,
    query,
    limitToFirst,
    startAt,
    equalTo,
} from 'firebase/database';

import { db } from '../config/app';

export const getFromDatabase = async (endpoint) => {
    const dbRef = ref(db);

    return get(child(dbRef, endpoint))
        .then(snapshot => snapshot.exists() 
            ? snapshot.val() 
            : []
        );
}

export const addToDatabase = (endpoint, entity, data) => {
    const newKey = push(child(ref(db), entity)).key;
    const fullEndpoint = `${endpoint}${newKey}`;
    
    return update(ref(db), { [fullEndpoint]: data });
}