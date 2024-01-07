import { styled } from "styled-components";
import img from "../images/Rectangle 1.png";

export const StyledImg = styled.div`
  background-image: url("${img}");
  // background-repeat: no-repeat;
  background-size: 100% 100%;
  object-fit: cover;
  width: 100%;
  height: 170px;
  border-radius: 10px;
  margin: auto;
`;
