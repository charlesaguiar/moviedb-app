import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

export default null;
