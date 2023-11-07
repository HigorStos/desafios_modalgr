import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai"

export const HomeButtonStyled = styled(Link)`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background-color: #fff;
  color: #091A2C;
  position: fixed;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`;

export const HomeIcon = styled(AiFillHome)`
  height: 32px;
  width: 32px;
`
