import styled from "styled-components";

export const LeftContentSection = styled("section")`
  position: relative;
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  padding: 10rem 60px;
`;

export const SectionWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  max-width: 100%;
`;

export const SectionItem = styled("div")`
  background: linear-gradient(#fff2f2 0 0) var(--p, 0) / var(--p, 0) no-repeat;
  transition: 0.4s, background-position 0s;
  &:hover,
  &:active,
  &:focus {
    color: #fff2f2;
    --p: 100%;
    cursor: pointer;
  }
  border: 1px solid #afefff;
  margin: 5px;
  padding: 12px;
  height: 150px;
`;

export const MinTitle = styled("h1")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
  font-weight: bold;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;
