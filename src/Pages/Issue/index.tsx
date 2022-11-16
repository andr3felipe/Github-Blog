import { Link, useParams } from 'react-router-dom'
import { IssueBody, IssueContainer, IssueHeader } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GitHubIcon from '../../assets/github.svg'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function Issue() {
  const params = useParams()
  console.log(params)
  const [showIssue, setShowIssue] = useState({})

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/andr3felipe/Github-Blog/issues/${params.number}`,
      )
      .then((response) => {
        console.log('params', response.data)
        setShowIssue(response.data)
      })
  }, [params])

  return (
    <>
      {showIssue && (
        <IssueContainer>
          <IssueHeader>
            <div>
              <Link to="/">
                <div>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span>VOLTAR</span>
                </div>
              </Link>
              <div>
                <a href={showIssue?.html_url} target="_blank" rel="noreferrer">
                  <span>VER NO GITHUB</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
            <div>
              <h2>{showIssue?.title}</h2>
            </div>
            <div>
              <div>
                <img src={GitHubIcon} alt="" />
                <span>
                  <a
                    href={showIssue?.user?.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {showIssue?.user?.login}
                  </a>
                </span>
              </div>
              <div>
                <FontAwesomeIcon icon={faCalendarDay} />
                <span>Há 1 dia</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} />
                <span>{showIssue?.comments} comentários</span>
              </div>
            </div>
          </IssueHeader>
          <IssueBody>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {showIssue?.body}
            </ReactMarkdown>
          </IssueBody>
        </IssueContainer>
      )}
    </>
  )
}
