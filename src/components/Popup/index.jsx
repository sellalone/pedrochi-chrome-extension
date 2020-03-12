import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';

const Container = styled.div`
  width: 500px;
  background: linear-gradient(to top, rgb(33, 147, 176), rgb(109, 213, 237));
`;

const LogoImage = styled.img`
  width: 200px;
  max-width: 100%;
`;

const Popup = () => {
  return (
    <Container>
      <LogoImage src={Logo} />
      <button type="button" onClick={() => alert('ss')}>
        Pedro
      </button>
    </Container>
  );
};

export { Popup };
