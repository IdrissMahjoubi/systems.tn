import { lazy } from "react";
import { withTranslation } from "react-i18next";

const Container = lazy(() => import("../../common/Container"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const About = ({ t }: { t: any }) => {
  return (
    <Container>
      <MiddleBlock title={t("AboutTitle")} content={t("AboutContent")} />
    </Container>
  );
};

export default withTranslation()(About);
