import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../api/users';
import { filterUsers } from '../../redux/slices/usersSlice';
import { getFilteredData } from '../../tools/database';
import SearchDropdown from '../common/ui/search-dropdown/SearchDropdown';

const UsersSearchSelect = (props) => {
    const dispatch = useDispatch();
  
    const users = useSelector(state => state.users.users);
    const error = useSelector(state => state.users.error);

    useEffect(() => {
      dispatch(getUsers());
    }, []);

    return <SearchDropdown
      label="Invite users to hangout:"
      placeholder="Type a username then select it from the dropdown"
      emptyMessage="No users found with that username"
      optionKey="email"
      optionValue="id"
      options={users}
      onChange={props.onUserSelect}
      value={props.selectedUsers}
      multiple
    />
};

export default UsersSearchSelect;