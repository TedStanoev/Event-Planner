import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import HangoutForm from '../common/ui/hangout-form/HangoutForm';
import { createEvent } from '../../api/hangouts/hangouts';

const initialState = {
    title: '',
    date: dayjs(),
    description: '',
    imageSrc: '',
    users: [],
}

const CreateEvent = (props) => {
    const [event, setEvent] = useState(initialState);
    const [image, setImage] = useState(null);
    const [formIsValid, setIsValid] = useState(true);

    const dispatch = useDispatch();

    const onChange = (ev, accessor) => {
        setEvent({ ...event, [accessor]: ev.target.value });
    }

    const onUsersChange = (value, options) => {
        setEvent({ ...event, users: options });
    }

    const onImageChange = (ev) => {
        const file = ev.target.files[0];
        const imageSrc = URL.createObjectURL(file);

        setEvent({ ...event, imageSrc });
        setImage(file);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (event.title.length === 0) {
            setIsValid(false);
            return;
        }

        await dispatch(createEvent(event, props.user, image));
    }

    return (
        <HangoutForm 
            eventTitleValue={event.title}
            onEventTitleChange={(e) => onChange(e, 'title')}
            eventDescriptionValue={event.description}
            onEventDescriptionChange={(e) => onChange(e, 'description')}
            eventDateValue={event.date}
            onEventDateChange={(e) => onChange(e, 'date')}
            selectedUsers={event.users}
            onUserSelect={onUsersChange}
            imageValue={event.imageSrc}
            onImageChange={(e) => onImageChange(e)}
            formIsValid={formIsValid}
            onSubmit={onSubmit}
        />
    )
};

export default CreateEvent;