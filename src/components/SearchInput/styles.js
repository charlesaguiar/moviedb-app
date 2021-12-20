import styled from 'styled-components';
import colors from 'design/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const Input = styled.input`
  background-color: ${colors.white};
  width: 100%;
  padding: 10px;
  margin: 12px 0;
  border: 1px solid ${colors.gray};
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  &:focus {
    outline: none;
    border: 2px solid ${colors.primaryActive};
  }
`;

export const SearchIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${colors.gray};
  padding: 11px;
  cursor: pointer;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
`;

export default null;
