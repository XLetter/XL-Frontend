import React from 'react';
import './ProfileSetting.css';

const ProfileSetting = () => {
  return (
    <div >
        <h1>Settings</h1>
        <br />
        <h2>Profile</h2>

        <div className='profile_content'>
          <div className='profile_picture'>
            <h3>profile picture</h3>
            <br />

          </div>

          <br />

          <div className='profile_username'>
            <h3>username: </h3>

          </div>
        </div>
    </div>
  );
};

export default ProfileSetting;