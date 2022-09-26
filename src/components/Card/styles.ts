import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 26rem;
  max-width: 50vw;
  height: 16.25rem;

  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  gap: 1.25rem;

  padding: 2rem;

  > div:first-of-type {
    ///Card Head
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    gap: 1rem;

    h3 {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};

      max-width: 17.6875rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  div:last-of-type {
    // Card Body
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6rem;
  }
`
