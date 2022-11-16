import styled from 'styled-components'

export const HomeContainer = styled.section``
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['base-profile']};

  max-width: 54rem;
  padding: 2rem;
  position: relative;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin: -88px auto 4.5rem auto;

  > img {
    //profile img
    max-width: 148px;
    max-height: 148px;

    border-radius: 8px;
    margin-left: 8px;
    margin-right: 2rem;
  }
`
export const AlignProfileText = styled.div`
  width: 600px;
  max-width: 60vw;

  > div:first-of-type {
    //PROFILE NAME AND GITHUB DIV
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    line-height: 130%;
    font-size: 1.5rem;

    span > a {
      font-weight: 700;
      font-size: 0.75rem;
      text-decoration: none;
      color: ${(props) => props.theme.blue};

      svg {
        // GITHUB ICON
        margin-left: 8px;
      }
    }
  }

  > div:nth-child(2) {
    //TEXT
    color: ${(props) => props.theme['base-text']};
  }

  > div:nth-child(3) {
    // PROFILE FOOTER ICONS
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-top: 24px;
    gap: 1.5rem;

    > div > span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    > div {
      //align profile footer icons
      display: flex;
      align-items: center;
      justify-items: flex-start;

      gap: 0.5rem;
      line-height: 0;
    }

    > div > svg {
      //svg color
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const CardAlign = styled.main`
  max-width: 54rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  padding-bottom: 14.625rem;

  a {
    text-decoration: none;
  }
`
