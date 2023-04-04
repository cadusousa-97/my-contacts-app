import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'sora', sans-serif;
}
body {
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: 16px;
}

button {
  cursor: pointer;

}
`;
