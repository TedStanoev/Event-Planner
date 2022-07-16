import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import InputFormGroup from '../Forms/InputFormGroup/InputFormGroup';
import TextAreaFormGroup from '../Forms/TextAreaFormGroup/TextAreaFormGroup';
import SearchDropdown from '../search-dropdown/SearchDropdown';

import { getUsers } from '../../../../api/users';
import ImageUploadForm from '../Forms/ImageUpload/ImageUploadForm';

const EventForm = (props) => {
    useEffect(() => {
        props.fetchUsers()
    }, []);

    return (
        <React.Fragment>
            <h1>Create Event:</h1>
            <div style={{ padding: '3%' }}>
                <InputFormGroup 
                    label="Event Title:"
                    inputType="text"
                    value={props.eventTitleValue}
                    changeValue={props.onEventTitleChange}
                    placeholder="eg: Birthday Party"
                    nonInline
                />
                <TextAreaFormGroup 
                    label="Description:"
                    value={props.eventDescriptionValue}
                    changeValue={props.onEventDescriptionChange}
                    placeholder="eg: Welcome! I'd like to give some more information..."
                    rows={3}
                    nonInline
                />
                <InputFormGroup 
                    label="Choose a date:"
                    inputType="date"
                    value={props.eventDateValue}
                    changeValue={props.onEventDateChange}
                    nonInline
                />
                <SearchDropdown 
                    label="Invite users to event:"
                    placeholder="Type a username then select it from the dropdown"
                    emptyMessage="No users found with that username"
                    options={props.users}
                    optionKey="email"
                    optionValue="id"
                    onSelect={props.onUserSelect}
                    value={props.selectedUsers}
                    multiple
                />
                <ImageUploadForm 
                    label="Upload an event photo:"
                    imageAlt="Upload image"
                    imageSrc={props.imageValue}
                    value={props.imageValue}
                    onChange={props.onImageChange}
                />
            </div>
            <Button 
                variant="info"
                onClick={props.onSubmit}
                type="submit"
            >
                Create Event
            </Button>{' '}
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    users: state.users.users,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);