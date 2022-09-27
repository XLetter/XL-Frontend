import React, { Component } from 'react';
import './ProfileSetting.css';
import profile from '../../../../assets/user_profile.jpeg';
import SettingUserProfile from './SettingUserProfile';

const ProfileSetting = () => {
  return (
    <div >
        <h1>Settings</h1>
        <br />
        <h2>Profile</h2>

        <div className='profile_content'>
          <h3>profile picture</h3>

          <br />
          <br />

          <div className='profile_picture'>
            <img className='profile' src={profile}></img>
          </div>

          <div className='profile_picture_edit'>
            <SettingUserProfile />
            
          </div>

          <br />
          <br />

          <div className='profile_username'>
            <h3>username: </h3>

          </div>
        </div>
    </div>
  );
};

export default ProfileSetting;