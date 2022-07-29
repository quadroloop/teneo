import Header from "../components/Header";
import Footer from "../components/Footer";
import Masthead from "../components/Masthead";
import FeedMetrics from "../components/FeedMetrics";
import MainFeed from "../components/MainFeed";
import SectionFold1 from "../components/SectionFold1";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Masthead />
      <FeedMetrics />
      <MainFeed />
      <SectionFold1 />
      <Footer />
    </Layout>
  );
}
