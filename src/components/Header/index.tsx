import HomeButton from "../HomeButton"
import { MainHeader, Logo } from "./styles"

type Props = {
  showHomeButton: Boolean;
}

const Header = ({ showHomeButton }: Props) => {
  return (
    <>
      <MainHeader>
        <a href="https://modalgr.com.br/" target="_blank" rel="noreferrer">
          <Logo src='./logo-modalgr.png' />
        </a>
        {showHomeButton ? <HomeButton /> : ''}
      </MainHeader>
    </>
  )
}

export default Header
