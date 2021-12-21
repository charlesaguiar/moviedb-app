import styled from 'styled-components';
import colors from 'design/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const CastProfilePictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CastProfilePicture = styled.img`
  width: 150px;
  height: 225px;
`;

export const CastInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  background-color: ${colors.sky};
  padding: 8px;
  text-align: center;

  & > span.italic {
    font-style: italic;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

export default null;
