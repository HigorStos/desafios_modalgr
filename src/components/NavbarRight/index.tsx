import { useState } from "react"

import { NavbarBalls, NavbarStyled } from "./styles"

const NavbarRight = () => {
  const [navBalls, setNavBalls] = useState([true, false, false, false])
  const [hrefName, setHrefName] = useState('')

  const toggleBall = (index: number) => {
    const newBalls = [...navBalls];
    newBalls[index] = !newBalls[index];
    setNavBalls(newBalls);
  
    for (let i = 0; i < newBalls.length; i++) {
      if (i !== index) {
        newBalls[i] = false;
      }
    }
  
    setNavBalls(newBalls);
  };

  return (
    <>
      <NavbarStyled>
      {navBalls.map((active, index) => (
        <NavbarBalls
          href={hrefName}
          key={index}
          active={active}
          onClick={() => {
            if (active === false) {
              toggleBall(index);
            }
            switch (index) {
              case 0:
                setHrefName("#TitleDiv");
                break;
              case 1:
                setHrefName("#ChallengeOneDiv");
                break;
              case 2:
                setHrefName("#ChallengeTwoDiv");
                break;
              case 3:
                setHrefName("#ChallengeThreeDiv");
                break;
              default:
                setHrefName("#TitleDiv");
            }
          }}
        />
      ))}
      </NavbarStyled>
    </>
  )
}

export default NavbarRight
