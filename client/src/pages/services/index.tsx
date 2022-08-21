/**
 * Imports
 */
import Layout from '../../components/layout/Layout';
import { Banner } from '../../components/banner';
import { IntroSection } from '../../components/sections';

/**
 * Imports
 */
const ServicesPage = () => {
  return (
    <Layout title="Services">
      <IntroSection
        title="Services"
        text="Become a hero and support your favorite charity for the 2022 edition of Music for Life aka De Warmste Week. All while getting some awesome stuff in return. Win-win."
      />
      <Banner
        color="#96f0b6"
        image="avatar-generator.jpg"
        title="Avatar Generator"
        url="/services/generator"
      />

      <Banner
        color="#f46ebe"
        image="image-2.jpg"
        title="Coming soon"
        url="#"
      />

      <Banner
        color="#2941ab"
        image="image-3.jpg"
        title="Coming soon"
        url="#"
      />
    </Layout>
  );
};

/**
 * Export
 */
export default ServicesPage;
