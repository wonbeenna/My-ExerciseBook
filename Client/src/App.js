import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import axios from 'axios';
import Door from './Pages/Door';
import Scroll from './Pages/Scroll';
import Svg from './Pages/Svg';
import Socket from './Pages/Socket';

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  return (
    <AppWrap>
      <GlobalStyle />
      {/*<Door />*/}
      {/*<Scroll />*/}
      {/*<Svg />*/}
      <Socket />
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-size: 16px;
    background-color: #fff;
  }

  ul, li, ol {
    list-style: none;
  }

  a, a:visited, a:active, a:hover {
    color: initial;
  }
`;
