import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from{
    opacity:0;
    transform:translateX(-50px);
  }
  to{
    opacity:1;
    transform:translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${appearFromRight} 1s;

  img {
    margin-top: 10px;
  }
  form {
    margin: 75px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 20px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 20px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ff9000;
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
    svg {
      margin-right: 8px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
