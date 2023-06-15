import { lazy } from "react";
import circuit from "../../assets/circuit.svg";
import drone from "../../assets/drone.svg";
import { withTranslation } from "react-i18next";
import BAC from "../../assets/BAC.svg";
import PAC from "../../assets/PAC.svg";
import IT from "../../assets/IT.svg";
import AERONAUTICS from "../../assets/AERONAUTICS.svg";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Contact = lazy(() => import("../../components/Block/ContactForm"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const sections = [
  {
    route: "pac",
    title: "Physical access control",
    content: "",
    icon: PAC,
  },
  {
    route: "bac",
    title: "Border access control",
    content: "",
    icon: BAC,
  },
  {
    route: "it",
    title: "IT solutions",
    content: "",
    icon: IT,
  },
  {
    route: "aeronautics",
    title: "Aeronautics",
    content: "",
    icon: AERONAUTICS,
  },
];
const Home = ({ t }: { t: any }) => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={"AUTONOMOUS SYSTEMS ENGINEERING"}
        content={t("IntroContent")}
        button={[
          {
            title: "Contact",
          },
        ]}
        icon={circuit}
        id="intro"
      />
      <MiddleBlock title={t("AboutTitle")} content={t("AboutContent")} />
      <ContentBlock
        type="left"
        title={t("UseCasesTitle")}
        content=""
        section={sections}
        icon={drone}
        id="use-cases"
      />
      <Contact
        title={t("ContactTitle")}
        content={t("ContactContent")}
        id="contact"
      />
    </Container>
  );
};

export default withTranslation()(Home);
