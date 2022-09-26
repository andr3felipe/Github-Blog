import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 90rem;
  height: 18.5rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #0b1b2b;

  > img {
    max-width: 30vw;
  }

  img:first-of-type {
    margin-top: 1.875rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;

    margin-top: -6.25rem;

    gap: 20px;
  }

  p {
    color: ${(props) => props.theme.blue};

    font-family: 'Coda', sans-serif;
    font-size: 1.5rem;
    line-height: 160%;
  }
`
