import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button?: string;
  t: any;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const paragraphs = t(content)
    .split("\n")
    .map((line: any, index: any) => <p key={index}>{line}</p>);

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <Col lg={24} md={24} sm={24} xs={24}>
            <ContentWrapper>
              <h1>{t(title)}</h1>
              <Content>{paragraphs}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("contact")}>
                  {t(button)}
                </Button>
              )}
            </ContentWrapper>
          </Col>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
