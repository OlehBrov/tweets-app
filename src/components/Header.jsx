import { Link } from "react-router-dom";

import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLinkStyle to={"/"}>Tweets Container</HeaderLinkStyle>{" "}
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: #a4a5f6;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 13px 2px #000000;
  /* height: 50px; */
`;
const HeaderLinkStyle = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 125px;
  letter-spacing: 5px;
  font-weight: 600;
  text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
`;
