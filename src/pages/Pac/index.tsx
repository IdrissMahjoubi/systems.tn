import { FC } from "react";
import styled from "styled-components";
import { PAC_DATA } from "../../content/pac";
import { CategoryProps, ProductProps } from "../../types";

const HeaderContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const PageTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
`;

const PageDescription = styled.p`
  font-size: 20px;
  text-align: center;
`;

const BlockContainer = styled.div`
  margin: 20px;
  width: 90%;
`;

const Block = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
`;

const BlockTitle = styled.h2`
  font-size: 34px;
  margin-bottom: 10px;
`;

const BlockDescription = styled.p`
  font-size: 22px;
`;

const ProductsGrid = styled.div`
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

const ProductCard = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  height: 500px;
  width: 500px;
  @media only screen and (max-width: 890px) {
    height: 300px;
    width: 300px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductTitle = styled.h6`
  margin: 0;
  @media only screen and (max-width: 890px) {
    font-size: 22px;
  }
`;

const ProductDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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
    transform: translateY(-10px);
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

const Product: FC<ProductProps> = ({
  description,
  imageSrc,
  title,
  pending,
  handleOpenModal,
}) => {
  console.log("test", process.env.PUBLIC_URL);
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

const Categories: FC<CategoryProps> = ({
  productCategory,
  productCategoryDescription,
  products,
  handleOpenModal,
}) => {
  return (
    <BlockContainer>
      <Block>
        <BlockTitle>{productCategory}</BlockTitle>
        <BlockDescription>{productCategoryDescription}</BlockDescription>
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

const Pac = () => {
  const { pageTitle, pageDescription, categories } = PAC_DATA;
  // const [isOpen, toggle] = useState(false);

  // const handleOpenModal = () => {
  //   toggle(true);
  // };
  // const handleCloseModal = () => {
  //   toggle(false);
  // };
  const paragraphs = pageDescription.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ));
  return (
    <>
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
    </>
  );
};

export default Pac;
