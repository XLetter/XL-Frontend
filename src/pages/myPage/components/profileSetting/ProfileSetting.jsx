import React, { Component } from 'react';
import './ProfileSetting.css';
import profile from '../../../../assets/image/user_profile.jpeg';
import SettingUserProfile from './SettingUserProfile';
import SettingUsername from './SettingUsername';

const ProfileSetting = () => {
  return (
    <div className="ProfileSetting">

      <div className='setting_header' style={{width: 1030}}>
        Settings
      </div>

      <div className='about_account'>
        Account Info
        <div className='account_infotext'>
          Kaikas Wallet Account: 0x396eC1747A6BC98A7E45fC707F3CBa187a1447F7
        </div>
      </div>

      <div className='about_profile'>
        Profile

        <div className='profile_content2'>
          
          <div className='picture_area2'>
            <div className='profile_infotext1'>
              profile picture
            </div>
            
            <div className='profile_picture2'>
              <img className='profile2' src={profile}></img>
            </div>

            <div className='profile_picture_edit'>
              <SettingUserProfile />
              
            </div>
          </div>

          <div className="username_area">
            <div className="profile_username">
              <div className='profile_infotext2'>
                Username:
              </div>
              
              <div className='profile_username_edit'>
                <SettingUsername />
              </div>
              
            </div>
          </div>

        </div>

      </div>

      <div className='save'>

      </div>
        
    </div>
  );
};

export default ProfileSetting;
