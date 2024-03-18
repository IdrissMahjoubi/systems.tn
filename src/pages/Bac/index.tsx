import { lazy } from "react";
import { HeaderContainer } from "../PAC";
import { BAC } from "../../content/BAC";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import ContentBlock from "../../components/ContentBlockBac";
import Container from "../../common/Container";
const Contact = lazy(() => import("../../components/Block/ContactForm"));

export const MiddleBlockSection = styled("section")`
  position: relative;
  border: 10px solid #000b30;
  text-align: center;
  display: flex;
  justify-content: center;
  text-align: justify;
  margin: 10px;
`;

export const InnerContainer = styled.div`
  background-color: #5fd3f2;
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

export const PageDescription = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const ProductBac = styled.img`
  width: 70%;
  height: 70%;
  object-fit: cover;
`;

export const ProductTitle = styled.h6`
  margin: 0;
  font-size: 24px;
  @media only screen and (max-width: 890px) {
    font-size: 22px;
  }
`;

export const StyledContainer = styled("div")<any>`
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};
`;

const Bac = ({ t }: { t: any }) => {
  const { pageTitle, pageDescription, imageSrc } = BAC;

  const paragraphs = pageDescription
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);
  return (
    <>
      <HeaderContainer>
        <PageTitle>{pageTitle}</PageTitle>
        <PageDescription>{paragraphs}</PageDescription>
      </HeaderContainer>
      <MiddleBlockSection>
        <ProductBac src={imageSrc} />
      </MiddleBlockSection>
      <StyledContainer>
        <ContentBlock
          id="1"
          type="left"
          title={"Advanced Document Scanning"}
          content=" Our e-gates are equipped with ICAO 9303-compliant document scanners capable of rapidly and accurately scanning machine-readable travel documents, such as passports, visas, and ID-cards. This ensures seamless and efficient document verification. "
        />
        <ContentBlock
          id="2"
          type="right"
          title={"Facial Recognition Excellence"}
          content=" Nestled within our e-gates are high-performance facial recognition cameras, designed for exceptional accuracy and speed in facial recognition. These cameras are engineered to capture and analyze facial features with precision, ensuring reliable authentication. "
        />
        <ContentBlock
          id="3"
          type="left"
          title={"Dual Authentication Power"}
          content="By seamlessly integrating document scanning and facial recognition, our e-gates establish a dual-layer authentication process. This robust approach creates an impervious security perimeter at border checkpoints, enhancing safety and control. "
        />
        <ContentBlock
          id="4"
          type="right"
          title={"Dedicated Management System"}
          content="Our solution is underpinned by a dedicated control system meticulously crafted for the unique demands of border control operations. This control system enables real-time monitoring, seamless integration with other information systems, and flexible oversight of the entire border control process. "
        />
        <ContentBlock
          id="5"
          type="left"
          title={"Elevate Security Standards"}
          content="Our solution empowers you to embrace the future of border control, offering unmatched precision, efficiency, and security. It's ideal for enhancing security at border crossings, airports, government installations, financial institutions, and other high-profile facilities where the highest standards of security are non-negotiable. "
        />
        <ContentBlock
          id="6"
          type="right"
          title={"Unlock the Future"}
          content="Stay ahead in technology and security with our advanced solution. Contact us today to explore how our Automated Border Control Solution, with its cutting-edge e-gates equipped with advanced cameras and scanners, seamlessly managed by a dedicated system, can modernize your security infrastructure, elevate user experiences, and fortify security in your critical environments."
        />
      </StyledContainer>
      <Container>
        <Contact
          title={t("ContactTitle")}
          content={t("ContactContent")}
          id="contact"
        />
      </Container>
    </>
  );
};

export default withTranslation()(Bac);
