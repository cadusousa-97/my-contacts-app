import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'sora', sans-serif;
}
body {
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[900]};
}

button {
  cursor: pointer;

}
`;
