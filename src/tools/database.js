import {
    ref,
    child,
    push,
    update,
} from 'firebase/database';

import { db } from '../app/app';

export const addToDatabase = (endpoint, entity, data) => {
    const newKey = push(child(ref(db), entity)).key;
    const fullEndpoint = `${endpoint}${newKey}`;

    return update(ref(db), { [fullEndpoint]: data })
}