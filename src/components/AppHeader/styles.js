import styled from 'styled-components';
import colors from 'design/colors';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.headerBackground};
  padding: 16px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > a {
    text-decoration: none;
  }
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

export const NavContainer = styled.div`
  display: flex;
  padding: 12px;
  gap: 20px;

  & span {
    font-weight: bold;
    line-height: 24px;
    cursor: pointer;
  }

  & span:hover {
    color: ${colors.primaryActive}
  }
`;

export default null;
