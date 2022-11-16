import HeaderIMG from '../../assets/header-img.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={HeaderIMG} alt="" />
    </HeaderContainer>
  )
}
