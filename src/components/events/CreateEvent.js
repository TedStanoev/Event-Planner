import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import EventForm from '../common/ui/event-form/EventForm';
import { createEvent } from '../../api/events';

const initialState = {
    title: '',
    date: moment(),
    description: '',
    imageSrc: '',
    users: [],
}

const CreateEvent = (props) => {
    const [event, setEvent] = useState(initialState);
    const [image, setImage] = useState(null);
    const [formIsValid, setIsValid] = useState(true);

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

        await props.createEvent(event, props.user, image);
    }

    return (
        <EventForm 
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

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
    createEvent: (event, user, image) => dispatch(createEvent(event, user, image)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);