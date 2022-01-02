import styled from 'styled-components';
import colors from 'design/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 90vw;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px;
  gap: 10px;
  width: 500px;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 28px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    font-size: 12px;
  }

  & strong {
    cursor: pointer;
    text-decoration: underline;
  }

  & strong:hover {
    color: ${colors.primaryActive};
  }
`;

export default null;
