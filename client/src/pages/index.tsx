/**
 * Imports
 */
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import { Banner } from '../components/banner';

/**
 * Styles
 */
const StyledSection = styled.section`
  @media (min-width: ${({ theme }) => theme.devices.desktopL }) {
    /* margin-top: 5rem; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 80vh;
  }
`;

/**
 * Component
 */
const LandingPage = () => {
  return (
    <Layout title="Home">
      <StyledSection>
        <Banner
          color="#96f0b6"
          image="image-4.jpg"
          title="Services"
          url="/services"
          type="big"
        />

        <Banner
          color="#f46ebe"
          image="image-5.jpg"
          title="About"
          url="/about"
          type="small"
        />

        <Banner
          color="#2941ab"
          image="image-6.jpg"
          title="Contact"
          url="/contact"
          type="small"
        />
      </StyledSection>
    </Layout>
  );
};

/**
 * Export
 */
export default LandingPage;
