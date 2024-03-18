import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  background-color: #faf9f6;
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  text-align: justify;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  padding: 10rem 60px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
