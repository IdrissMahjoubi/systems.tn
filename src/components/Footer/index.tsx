import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import france from "../../assets/france.svg";
import logo from "../../assets/logo.svg";
import uk from "../../assets/uk.svg";
import linkedin from "../../assets/linkedin.svg";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={6} md={6} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <a href="tel::+216 71 703 733">
                <Chat>
                  {" "}
                  <b>Mobile:</b> +216 71 703 733
                </Chat>
              </a>
              <a href="mailto:contact@systems.tn">
                <Chat>
                  {" "}
                  <b>E-mail:</b> contact@systems.tn
                </Chat>
              </a>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large left="true" to="/">
                {t("Solutions")}
              </Large>
              <Large left="true" to="/">
                {t("Support and Services")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src={uk}
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("fr")}>
                  <SvgIcon
                    src={france}
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>
                10 Avenue Habib Bourguiba Immeuble Zéphire, Appart 8 3-1
              </Para>
              <Para>2080 Ariana </Para>
              <Para>Tunis</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Title>{t("Policy")}</Title>
              <Large to="/" left="true">
                {t("Application Security")}
              </Large>
              <Large left="true" to="/">
                {t("Software Principles")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src={logo}
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <SocialLink
              href="https://www.linkedin.com/company/autonomous-system-engineering/"
              src={linkedin}
            />
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
