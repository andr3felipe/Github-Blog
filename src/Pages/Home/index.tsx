import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import GitHubIcon from '../../assets/github.svg'
import {
  AlignProfileText,
  CardAlign,
  HomeContainer,
  ProfileContainer,
} from './styles'
import { Form } from '../../components/Form'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <img
          src="https://avatars.githubusercontent.com/u/105335598?v=4"
          alt=""
        />
        <AlignProfileText>
          <div>
            André Felipe
            <span>
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </div>
          <div>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </div>
          <div>
            <div>
              <img src={GitHubIcon} alt="" />
              <span>cameronwll</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </div>
          </div>
        </AlignProfileText>
      </ProfileContainer>
      <Form />
      <CardAlign>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardAlign>
    </HomeContainer>
  )
}
