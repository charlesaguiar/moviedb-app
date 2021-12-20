import styled from 'styled-components';
import colors from 'design/colors';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.headerBackground};
  padding: 16px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.span`
  font-weight: 600;
  font-size: 32px;
`;

export const HeaderColoredTitle = styled.span`
  font-weight: 600;
  font-size: 32px;
  color: ${colors.primaryActive};
`;

export const HeaderSubTitle = styled.span`
  font-size: 14px;
`;

export default null;
