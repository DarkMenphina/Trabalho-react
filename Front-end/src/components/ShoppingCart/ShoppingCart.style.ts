import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { padding } from "polished";

export const ShoppingCartElement = styled.div`
  z-index: 1;
  position: fixed;
  right: 0;
  top: 0;
  width: 450px;
  height: 100vh;
  padding: 16px;
  background-color: ${colors.commom.white};
  transform: translateX(100%);
  transition: transform 0.2s ease-out;
  box-shadow: #0000001f -20px 1px 20px 16px;

  ${(props) =>
    props.open === true &&
    `
    transform: translateX(0);
    `}
`;

export const divHamburger = {
  display: "flex",
  alignItems: "center",
  margin: "10px",
}

export const footer = {
  position: "absolute",
  bottom: "0",
  padding: "10px",
  backgroundColor: "white",
  width: "100%"
}