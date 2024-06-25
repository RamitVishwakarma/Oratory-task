import InnerNavBar from "../../components/InnerNavBar";
import { MainContent } from "../../components/MainContent";
import Navbar from "../../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <InnerNavBar />
      <MainContent />
    </>
  );
};

export default LandingPage;
