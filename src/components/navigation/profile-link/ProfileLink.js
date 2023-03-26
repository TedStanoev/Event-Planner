import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSignedIn } from '../../../redux/slices/authSlice';
import { getFile } from '../../../tools/fileStorage';

const ProfileLink = ({ to, user }) => {
  const userImage = useSelector(state => state.auth.userImage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      getFile(user.photoURL).then((url) => dispatch(userSignedIn({ ...user, userImage: url })));
    }
  }, [user]);

  console.log(userImage)

  return (
    <Link to={to} className="d-flex">
      <div className="d-flex align-items-center">
        <div className="d-inline-flex">
          {userImage && <img src={userImage} width={30} height={29} alt="" className="profile-avatar" />}
        </div>
        <p className="d-inline-flex m-0">{user.displayName || user.email}</p>
      </div>
    </Link>
  )
};

export default ProfileLink;