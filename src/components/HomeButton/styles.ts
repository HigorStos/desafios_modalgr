import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai"

export const HomeButtonStyled = styled(Link)`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: #fff;
  color: #091A2C;
  position: fixed;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const HomeIcon = styled(AiFillHome)`
  height: 24px;
  width: 24px;
`
