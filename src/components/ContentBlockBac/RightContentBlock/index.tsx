import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { RightBlockContainer, Content, ContentWrapper } from "./styles";

const RightBlock = ({
  title,
  content,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <ContentWrapper>
            <h1>{t(title)}</h1>
            <Content>{t(content)}</Content>
          </ContentWrapper>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
