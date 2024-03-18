import { FC, lazy } from "react";
import styled from "styled-components";
import { PAC_DATA } from "../../content/pac";
import { CategoryProps, ProductProps } from "../../types";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
const Contact = lazy(() => import("../../components/Block/ContactForm"));

export const HeaderContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const PageTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
`;

export const PageDescription = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const BlockContainer = styled.div`
  margin: 20px;
  width: 90%;
`;

export const Block = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
`;

export const BlockTitle = styled.h2`
  font-size: 34px;
  margin-bottom: 10px;
`;

export const BlockDescription = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

export const ProductCard = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  height: 500px;
  @media only screen and (max-width: 890px) {
    height: 300px;
    width: 300px;
  }
`;

export const ProductImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
`;

export const ProductTitle = styled.h6`
  margin: 0;
  font-size: 24px;
  @media only screen and (max-width: 890px) {
    font-size: 22px;
  }
`;

export const ProductDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 16px;
  transition: 0.4s, background-position 0s;
  top: 50%;
  &:hover,
  &:active,
  &:focus {
    color: #fff2f2;
    background-color: #000b30;
    --p: 100%;
    cursor: pointer;
    transform: translateY(-120px);
    height: 100%;
    ${ProductTitle} {
      color: #fff2f2;
    }
  }
  @media only screen and (max-width: 890px) {
    font-size: 12px;
  }
`;

// const ModalContent = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   h1 {
//     color: #000b30;
//   }
// `;

export const Product: FC<ProductProps> = ({
  description,
  imageSrc,
  title,
  pending,
  handleOpenModal,
}) => {
  return (
    <ProductCard>
      {!pending && <ProductImage src={imageSrc} alt={title} />}
      <ProductDescription onClick={handleOpenModal}>
        <ProductTitle>{title}</ProductTitle>
        {description}
      </ProductDescription>
    </ProductCard>
  );
};

export const Categories: FC<CategoryProps> = ({
  productCategoryDescription,
  products,
  handleOpenModal,
}) => {
  const paragraphs = productCategoryDescription
    ?.split("\n")
    .map((line: any, index: any) => <p key={index}>{line}</p>);
  return (
    <BlockContainer>
      <Block>
        {/* <BlockTitle>{productCategory}</BlockTitle> */}
        <BlockDescription>{paragraphs}</BlockDescription>
        <ProductsGrid>
          {products.map((product, index) => (
            <Product
              key={index}
              {...product}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </ProductsGrid>
      </Block>{" "}
    </BlockContainer>
  );
};

const Pac = ({ t }: { t: any }) => {
  const { pageTitle, pageDescription, categories } = PAC_DATA;
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
        {categories.map((category, index) => (
          <Categories
            key={index}
            {...category}
            // handleOpenModal={handleOpenModal}
          />
        ))}
      </PageContainer>
      <Contact
        title={t("ContactTitle")}
        content={t("ContactContent")}
        id="contact"
      />
    </Container>
  );
};

export default withTranslation()(Pac);
