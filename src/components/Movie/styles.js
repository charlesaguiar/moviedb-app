import styled from 'styled-components';
import colors from 'design/colors';

export const Container = styled.div`
`;

export const MovieMainPicture = styled.img`
  border-radius: 12px;
  cursor: pointer;
`;

export const MovieInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
  flex-wrap: wrap;
  max-width: fit-content;
`;

export const MovieTitle = styled.span`
  font-weight: 600;
`;

export const MovieReleaseDate = styled.span`
  color: ${colors.gray};
  font-size: 12px;
`;

export default null;
