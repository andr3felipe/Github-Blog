import styled from 'styled-components'

export const IssueContainer = styled.div`
  margin: -88px auto 4.5rem auto;
  max-width: 50rem;
  position: relative;
  z-index: 1;
`

export const IssueHeader = styled.div`
  padding: 32px;
  max-width: 50rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  background-color: ${(props) => props.theme['base-profile']};
  > div:first-of-type {
    // VOLTAR & VER GITHUB
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    div > span {
      font-family: Nunito;
      font-weight: 700;
      font-size: 0.75rem;
    }
  }

  div:first-of-type div {
    // VOLTAR & VER GITHUB DIVS ALIGN
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    > span {
      font-family: Nunito;
      font-weight: 700;
      font-size: 0.75rem;
    }

    > svg {
      // VER NO GITHUB LINK
      font-size: 0.75rem;
      margin-top: -2px;
    }

    > div > svg {
      // VOLTAR LINK
      font-size: 0.75rem;
      margin-top: -2px;
    }
  }

  > div:nth-child(2) {
    // TITLE
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 12px;
  }

  > div:last-of-type {
    // LAST DIV LINKS
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 32px;
    margin-top: 8px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      svg {
        color: ${(props) => props.theme['base-label']};
      }

      span {
        color: ${(props) => props.theme['base-span']};
      }
    }
  }
`

export const IssueBody = styled.div`
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  color: ${(props) => props.theme['base-text']};
`

export const IssueFooter = styled.div``
