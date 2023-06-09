import styled, { css } from 'styled-components';

export default styled.input`
  height: 52px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  padding: 0 14px;
  font-size: 16px;
  transition: border-color 0.1s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`
