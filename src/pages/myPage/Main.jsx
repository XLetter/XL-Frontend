import React, { useState } from 'react';
import styled from 'styled-components';
import BuyXLT from './components/BuyXLT';
import MyNFTs from './components/MyNFTs';
import PurchaseHistory from './components/PurchaseHistory';
import ProfileSetting from './components/ProfileSetting';

const Main = () => {
  const [content, setContent] = useState();
  
  const handleClickBtn = e => {
    const { menu } = e.name;
    setContent(menu);
  };

  const selectComponent = {
    myNFTs: <MyNFTs />,
    buyXLT: <BuyXLT />,
    purchaseHistory: <PurchaseHistory />,
    profileSetting: <ProfileSetting />,
  };

  console.log(content);

  return (
    <div className='Main'>
        {content && <Content>{selectComponent[content]}</Content>}
    </div>
  );
};

export default Main;

const Container = styled.div`
  ${props => props.theme.flex('center', 'center')}
  height: 20vh;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-right: 1rem;
  color: #111111;
  background-color: #eeeeee;
  border-radius: 2rem;
`;

const Content = styled.div`
  ${props => props.theme.flex('center', 'center')}
  width: 100%;
  height: 100%;
`;