import React from 'react';
import { UserProfileProps } from '../../../interfaces/CompInterfaces';

const UserProfile: React.FC<UserProfileProps> = (props) => {
  console.log(props)
  return (
    <div>
        Profile
    </div>
  );
};

export default UserProfile;
