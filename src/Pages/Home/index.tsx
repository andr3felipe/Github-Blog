import axios from 'axios'
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
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Profile {
  user: string
  name: string
  avatar_url: string
  followers: number
  company: string
  bio: string
}

export interface Issue {
  title: string
  body: string
  number: number
}

export function Home() {
  const [user, setUser] = useState<Profile>()
  const [issues, setIssues] = useState<Issue[]>([])
  const [filter, setFilter] = useState('')

  const filtered = issues.filter((item) =>
    item.title.toUpperCase().includes(filter.toUpperCase()),
  )

  useEffect(() => {
    axios.get('https://api.github.com/users/andr3felipe').then((response) => {
      console.log(response.data)
      setUser({
        user: response.data.login,
        name: response.data.name,
        avatar_url: response.data.avatar_url,
        followers: response.data.followers,
        company: response.data.company,
        bio: response.data.bio,
      })
    })

    axios
      .get('https://api.github.com/repos/andr3felipe/Github-Blog/issues')
      .then((response) => {
        console.log(response.data)
        setIssues(response.data)
      })
  }, [])

  return (
    <HomeContainer>
      <ProfileContainer>
        <img src={user?.avatar_url} alt="" />
        <AlignProfileText>
          <div>
            {user?.name}
            <span>
              <a
                href="https://github.com/andr3felipe"
                target="_blank"
                rel="noreferrer noopener"
              >
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </span>
          </div>
          <div>{user?.bio}</div>
          <div>
            <div>
              <img src={GitHubIcon} alt="" />
              <span>{user?.name}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user?.company == null ? 'empty' : user?.company}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user?.followers} seguidores</span>
            </div>
          </div>
        </AlignProfileText>
      </ProfileContainer>
      <Form issues={issues} filter={filter} setFilter={setFilter} />
      <CardAlign>
        {filter === ''
          ? issues.map((item) => {
              return (
                <Link to={`/issues/${item.number}`} key={item.title}>
                  <Card title={item.title} body={item.body} />
                </Link>
              )
            })
          : filtered.map((item) => {
              return (
                <Link to={`/issues/${item.number}`} key={item.title}>
                  <Card title={item.title} body={item.body} />
                </Link>
              )
            })}
      </CardAlign>
    </HomeContainer>
  )
}
