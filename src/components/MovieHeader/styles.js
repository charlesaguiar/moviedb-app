import styled from 'styled-components';
import colors from 'design/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-auto-rows: auto;
`;

export const PosterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Poster = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  height: 380px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 24px;
  overflow: auto;
`;

export const InfoFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 16px;
  height: 70px;
  background-color: rgba(0, 0, 0);
  padding: 24px;
  align-items: center;
  justify-content: space-between;
`;

export const InfoFooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  & > span {
    color: ${colors.white};
    font-weight: 600;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.span`
  color: ${colors.white};
  font-weight: 600;
  font-size: 32px;
`;

export const Tagline = styled.div`
  margin-bottom: 24px;

  & > span {
    color: ${colors.white};
    font-style: italic
  }
`;

export const GenresContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 8px;
`;

export const Genre = styled.div`
  background-color: ${colors.primaryActive};
  border-radius: 16px;
  padding: 4px 12px;

  & > span {
    color: ${colors.white};
    font-weight: 600;
  }
`;

export const BookmarkButton = styled.button`
  display: flex;
  gap: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 0;
  background-color: ${colors.green};
  border-radius: 24px;
  width: 25%;
  margin-bottom: 24px;
  cursor: pointer;

  & > span {
    color: ${colors.white};
    font-weight: 600;
  }
`;

export const SummaryContainer = styled.div`
  margin-bottom: 24px;
`;

export default null;
