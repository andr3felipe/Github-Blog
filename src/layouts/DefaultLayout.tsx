import { LayoutContainer } from './styles'

import { Header } from '../components/Header'
import { Home } from '../Pages/Home'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Home />
    </LayoutContainer>
  )
}
