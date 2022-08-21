/**
 * Imports
 */
import styled from 'styled-components';
import { Card } from '../components/cards';

import Layout from '../components/layout/Layout';
import { IntroSection } from '../components/sections';
import { Team } from '../components/team';

/**
 * Styles
 */

const MemberStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const FeedContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: ${({ theme }) => theme.spacing.regular};
  }
`;

const FeedStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${({ theme }) => theme.devices.mini}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

/**
 * Component
 */
const AboutPage = () => {
  return (
    <Layout title="About">
      <IntroSection
        title="About"
        text="Cool that you want to find out more about who we are and what kind of stuff we do!"
        extra="We Are PGM"
      />
      <MemberStyles>
        <Team
          firstName="Nicolas"
          lastName="Cnudde"
          imageUrl="nicolas.png"
          bio="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
          linkedinUrl="https://www.linkedin.com/in/nicolascnudde/"
          gitUrl="https://github.com/pgm-nicolascnudde"
        />
        <Team
          firstName="Thabisa"
          lastName="Dingani"
          imageUrl="thabisa.png"
          bio="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
          linkedinUrl="https://www.linkedin.com/in/thabisa-dingani-b173251b7/"
          gitUrl="https://github.com/pgm-thabisadingani"
        />
        <Team
          firstName="Cagri"
          lastName="Avci"
          imageUrl="cagri.png"
          bio="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
          linkedinUrl="https://www.linkedin.com/in/cagricemavci/"
          gitUrl="https://github.com/pgm-cagravci"
        />
      </MemberStyles>

      <FeedContainer>
        <h2 style={{ marginBottom: '1rem' }}>Instagram Feed</h2>
        <p>
          Check out our latest posts on IG, a follow is always appreciated! 😉
        </p>
        <FeedStyles>
          <Card color="#2941ab" image="/image-3.jpg" url="#" alt="feeds" />
          <Card color="#96f0b6" image="/image-2.jpg" url="#" alt="feeds" />
          <Card color="#f46ebe" image="/image-2.jpg" url="#" alt="feeds" />
          <Card color="#2941ab" image="/image-3.jpg" url="#" alt="feeds" />
        </FeedStyles>
      </FeedContainer>
    </Layout>
  );
};

/**
 * Export
 */
export default AboutPage;
