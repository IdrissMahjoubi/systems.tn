import { lazy } from "react";
import {
  Categories,
  HeaderContainer,
  PageContainer,
  PageDescription,
  PageTitle,
} from "../PAC";
import { IT_DATA } from "../../content/IT";

const IT = () => {
  const { pageTitle, pageDescription, categories } = IT_DATA;
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

export default IT;
