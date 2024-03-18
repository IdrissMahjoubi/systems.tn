import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
} from "./styles";

const LeftContentBlock = ({
  icon,
  title,
  content,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-around" align="middle" id={id}>
          {icon && (
            <Col lg={11} md={11} sm={12} xs={24}>
              <SvgIcon src={icon} width="100%" height="100%" />
            </Col>
          )}
          <ContentWrapper>
            <h1>{t(title)}</h1>
            <Content>{t(content)}</Content>
          </ContentWrapper>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
