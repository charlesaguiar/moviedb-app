import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  border-radius: ${(props) => (props.roundedBorder ? '12px' : '0px')};
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;

  & > p {
    font-weight: 600;
  }
`;

export default null;
