import Header from "../components/Header";
import Footer from "../components/Footer";
import Masthead from "../components/Masthead";
import Testimonial from "../components/Testimonial";
import FeaturesSection from "../components/FeaturesSections";
import SectionFold1 from "../components/SectionFold1";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Masthead />
      <Testimonial />
      <FeaturesSection />
      <SectionFold1 />
      <Footer />
    </Layout>
  );
}
