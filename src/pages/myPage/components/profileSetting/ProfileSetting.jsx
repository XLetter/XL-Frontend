import React, { Component } from 'react';
import './ProfileSetting.css';
import profile from '../../../../assets/image/user_profile.jpeg';
import SettingUserProfile from './SettingUserProfile';
import SettingUsername from './SettingUsername';

const ProfileSetting = () => {

  return (
    <div className='ProfileSetting'>
        <h1>Settings</h1>
        <br />
        <h2>Profile</h2>

        <div className='profile_content'>
          <h3>profile picture</h3>

          <div className='picture_area'>
            <div className='profile_picture'>
              <img className='profile' src={profile}></img>
            </div>

            <div className='profile_picture_edit'>
              <SettingUserProfile />
              
            </div>
          </div>

          <br />
          <br />

          <div className='username_area'>
            <div className='profile_username'>
              <h3>username: </h3>
              <SettingUsername />

            </div>
          </div>
          
        </div>
    </div>
  );
};

export default ProfileSetting;