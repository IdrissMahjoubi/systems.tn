import {
  Block,
  BlockContainer,
  BlockDescription,
  HeaderContainer,
  PageContainer,
  PageDescription,
  PageTitle,
  Product,
} from "../PAC";
import { DRONE_DATA } from "../../content/DRONE";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { lazy } from "react";
import Container from "../../common/Container";
const Contact = lazy(() => import("../../components/Block/ContactForm"));

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  justify-items: center;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  @media only screen and (max-width: 890px) {
    grid-template-columns: auto;
  }
`;
const Aeronautics = ({ t }: { t: any }) => {
  const { pageTitle, pageDescription, categories } = DRONE_DATA;
  // const [isOpen, toggle] = useState(false);

  // const handleOpenModal = () => {
  //   toggle(true);
  // };
  // const handleCloseModal = () => {
  //   toggle(false);
  // };
  const paragraphs = pageDescription
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);
  return (
    <Container>
      <HeaderContainer>
        <PageTitle>{pageTitle}</PageTitle>
        <PageDescription>{paragraphs}</PageDescription>
      </HeaderContainer>
      <PageContainer>
        {/* <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <ModalContent>
            <h1> Awesome modal </h1>
          </ModalContent>
        </Modal> */}
        <BlockContainer>
          <Block>
            {/* <BlockTitle>{productCategory}</BlockTitle> */}
            <BlockDescription>
              {categories[0].productCategoryDescription}
            </BlockDescription>
            <ProductsGrid>
              {categories[0].products.map((product, index) => (
                <Product key={index} {...product} />
              ))}
            </ProductsGrid>
          </Block>{" "}
        </BlockContainer>
      </PageContainer>
      <Contact
        title={t("ContactTitle")}
        content={t("ContactContent")}
        id="contact"
      />
    </Container>
  );
};

export default withTranslation()(Aeronautics);
