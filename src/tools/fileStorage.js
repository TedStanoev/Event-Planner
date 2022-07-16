import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { storage } from '../app/app';

export const getFile = async (path) => {
    const imgRef = ref(storage, path);
    return await getDownloadURL(imgRef)
}

export const uploadFile = (file, fileName = '') => {
    const storageRef = ref(storage, fileName);

    return uploadBytes(storageRef, file)
        .then(snapshot => snapshot);
}