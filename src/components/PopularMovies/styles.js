import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
`;

export const Title = styled.span`
  margin: 12px 0 24px 12px;
  font-weight: 600;
  font-size: 24px;
  align-self: flex-start;
`;

export default null;
