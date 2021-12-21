import styled from 'styled-components';
import colors from 'design/colors';

export const Button = styled.button`
  border: 0;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  background-color: ${colors.primaryActive};
  padding: 12px;
  width: 50%;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
`;

export const ButtonText = styled.span`
  color: ${colors.white};
  font-weight: 600;
  font-size: 16px;
`;

export default null;
