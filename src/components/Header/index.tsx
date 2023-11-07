import HomeButton from "../HomeButton"
import { MainHeader, Logo } from "./styles"

type Props = {
  showHomeButton: Boolean;
}

const Header = ({ showHomeButton }: Props) => {
  return (
    <>
      <MainHeader>
        <Logo src='./logo-modalgr.png' />
        {showHomeButton ? <HomeButton /> : ''}
      </MainHeader>
    </>
  )
}

export default Header
