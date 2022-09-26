import Logo from '../../assets/logo.svg'
import HeaderLeftEffetcs from '../../assets/header-left-effects.svg'
import HeaderRightEffetcs from '../../assets/header-right-effects.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={HeaderLeftEffetcs} alt="" />
      <div>
        <img src={Logo} alt="" />
        <p>GITHUB BLOG</p>
      </div>
      <img src={HeaderRightEffetcs} alt="" />
    </HeaderContainer>
  )
}
