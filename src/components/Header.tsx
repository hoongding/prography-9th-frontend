import React from 'react';
import styled from 'styled-components';
import Image from './common/Image';

const Header = () => {
  return (
    <HeaderContainer>
      <Image src="./assets/GNB.png" alt="GNB" width={120} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: start;
  padding-top: 20px;
  padding-bottom: 60px;
`;

export default Header;
