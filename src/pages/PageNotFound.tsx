import styled from "styled-components";

// 메인 컨테이너 (flex 레이아웃 적용)
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem;
  margin-left: 2rem;
  gap: 2rem;
  h2 {
    color: #d5c1b4;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.2em;
  }
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 1rem;
  @media (max-width: 1280px) {
    width: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 2rem;
    padding: 0;
  }
`;
// 왼쪽 섹션
const LeftSection = styled.div`
  width: 50%;
  background-color: #fff;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    font-size: 32px;
    font-weight: lighter;
  }
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

// 오른쪽 섹션
const RightSection = styled.div`
  width: 41.67%;
  max-width: 52rem;
  p {
    margin: auto 0;
    font-weight: lighter;
  }
`;

export default function PageNotFound() {
  return (
    <ContentContainer>
      <h2>404 - Seite nicht gefunden </h2>
      <MainSection>
        <LeftSection>
          <div>
            <p>
              You have landed here because we could not find your requested
              page. Treat yourself to a moment of peace, a short break and
              listen to your surroundings.
            </p>
            <p>
              Wouldn't a little more peace and quiet to find peace and quiet be
              more pleasant?
            </p>
            <p>
              We would be happy to show you a system solution that matches the
              requirements of your room.
            </p>
          </div>
        </LeftSection>
        <RightSection>
          <p>
            Haben Sie vielleicht nach folgendem gesucht? International Rugby
            Experience Stein Egerta Seminar Center Auschreibungen
            Detailzeichnungen 80 Fenchurch Street Offices Regierungsgebäude
            Kanton Nidwalden Rolex Learning Center, Lausanne Altersheim
            Engelburg Ovaverva Sportzentrum, St. Moritz Kapelle Ehmen
          </p>
        </RightSection>
      </MainSection>
    </ContentContainer>
  );
}
