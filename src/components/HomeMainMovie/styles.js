import styled from 'styled-components';
// import colors from 'design/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 16px;
`;

export const HighlightedContainer = styled.div`

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PosterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Poster = styled.img`
  width: 200px;
  height: 260px;
  border-radius: 16px;
`;

export const HighlightedTitle = styled.p`
  font-style: italic;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
`;

export default null;
