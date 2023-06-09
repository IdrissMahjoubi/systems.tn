import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import { data as UseCasesData } from "../../content/UseCases";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";
import circuit from "../../assets/circuit.svg";
import drone from "../../assets/drone.svg";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Contact = lazy(() => import("../../components/Block/ContactForm"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon={circuit}
        id="intro"
      />
      <MiddleBlock title={AboutContent.title} content={AboutContent.text} />
      <ContentBlock
        type="left"
        title={UseCasesData.title}
        content={UseCasesData.text}
        section={UseCasesData.section}
        icon={drone}
        id="use-cases"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
